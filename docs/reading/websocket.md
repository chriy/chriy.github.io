---
title: WebSocket
slug: websocket
---

:::info
WebSocket是一种传输协议, 基于TCP实现全双工通信, 并允许服务端主动向客户端推送数据。WebSocket与HTTP都位于应用层，且都基于传输层TCP协议，
与HTTP一样，也通过80端口和443端口工作。为了兼容HTTP, WebSocket使用HTTP
Upgradle请求头从HTTP协议升级为WebSocket协议。
:::
PS: [部分内容摘自维基百科](https://zh.wikipedia.org/wiki/WebSocket)
### 简介

- WebSocket 是独立的、创建在TCP上的协议。
- Websocket 通过 HTTP/1.1 协议的 **101** 状态码进行握手。
- 为了创建Websocket连接，需要通过浏览器发出请求，之后服务器进行回应，这个过程通常称为“握手”（Handshaking）。

- 请求头
    ```text
    GET /message HTTP/1.1
    Connection: Upgrade
    Upgrade: websocket
    Host: http://eample.com
    Origin: http://eample.com
    Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
    Sec-WebSocket-Key: MDxwXAXyPD78H7BSH6sbQA==
    Sec-WebSocket-Version: 13
    ```

- 响应头
    ```text
    Connection: upgrade
    Date: Wed, 25 May 2022 13:29:18 GMT
    Sec-WebSocket-Accept: uoSaVIJx6lXJUFI5EuWkafo4gYE=
    Sec-WebSocket-Extensions: permessage-deflate;client_max_window_bits=15
    Upgrade: websocket
    ```

- Connection必须设置Upgrade，表示客户端希望连接升级。
- Upgrade字段必须设置Websocket，表示希望升级到Websocket协议。
- Origin字段是必须的。如果缺少origin字段，WebSocket服务器需要回复HTTP 403 状态码（禁止访问）。

### 实现

使用SpringBoot实现一个案例

- 前端发送消息
- 后端推送消息

```java
# 依赖
implementation 'org.springframework.boot:spring-boot-starter-websocket'
implementation 'org.springframework.boot:spring-boot-starter-web'
```

编写一个 `MessageHandle` 继承 `WebSocketHandle`的实现类用于接受消息与主动推送消息。
- 仅用于处理文本消息：`TextWebSocketHandler`   
- 仅用于处理二进制消息：`BinaryWebSocketHandler` 

```java
@Component
public class MessageHandler extends TextWebSocketHandler {

    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        System.out.println("connection established");
    }

    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        // 二进制消息发送方式
        // ByteBuffer buffer = ByteBuffer.wrap("Hello".getBytes(StandardCharsets.UTF_8));
        // session.sendMessage(new BinaryMessage(buffer));
        
        // 文本消息
        session.sendMessage(new TextMessage("Hello"));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        System.out.println("connection closed");
    }
}
```

WebSocket 配置类，用于配置消息处理 `Handler` 和地址及一些规则

```java
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer {

    private final MessageHandler messageHandler;

    public WebSocketConfig(MessageHandler messageHandler) {
        this.messageHandler = messageHandler;
    }

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(this.messageHandler, "/message")
            // 配置支持跨域访问
            // .setAllowedOrigins("*")
            // 针对 SockJs
            // .withSockJS();
    }

}
```

写一个网页，然后实现一段 js script 脚本

```javascript
<script type="text/javascript">
    const socket = new WebSocket("ws://eample.com/message")
    // 建立连接
    socket.onopen = () => console.log("connect established")
    // 收到服务端消息
    socket.onmessage = event => console.log(event.data)
    // 关闭连接
    socket.onclose = () => console.log("connect closed")
    // 发送消息
    socket.send("Hi")
</script>
```

## 优点
不必使用HTTP请求进行轮询获取消息，使用WebSocket之后，服务端可以主动向客户端推送消息，一些场景下大大提升了通信效率
 
