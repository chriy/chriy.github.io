---
title: 朴素贝叶斯
---
## 从 UCI 上下载数据集

[鸢尾花特征集](https://archive.ics.uci.edu/ml/datasets/iris)

### 实现方法一

> 调用 scikit-learn 库来完成分类

```python
from sklearn.naive_bayes import GaussianNB  # 高斯朴素贝叶斯
from sklearn.model_selection import train_test_split  # 训练集测试集划分
from sklearn.metrics import accuracy_score  # 计算准确率
# 导入数据集 <鸢尾花>
from sklearn import datasets


def sk_learn():
    """
    方式一，直接调用 sk_learn类库
    :return:
    """
    iris = datasets.load_iris()

    # 分类数据
    # print(iris.data)
    # 标签
    # print(iris.target)

    # 切分数据集
    trainSet, testSet, trainTarget, testTarget = train_test_split(iris.data, iris.target, random_state=37)

    # 建模
    clf = GaussianNB()
    # 传入数据和标签
    clf.fit(trainSet, trainTarget)

    # 在测试集上进行预测，proba导出的是每个样本属于某类的概率
    predict = clf.predict(testSet)
    clf.predict_proba(testSet)

    target_name = iris.target_names

    # 测试准确率
    print("预测结果准确率：{}".format(accuracy_score(testTarget, predict)))

    for i in range(len(testSet)):
        print("{}===>{}".format(testSet[i], target_name[predict[i]]))
        
        
if __name__ == '__main__':
    sk_learn()
    pass
```

<mark>OUT</mark>

```bash
D:\Anaconda3\envs\TF2.1\python.exe naive_bayes.py
预测结果准确率：1.0
[6.4 2.9 4.3 1.3]===>versicolor
[5.2 3.5 1.5 0.2]===>setosa
[6.5 3.  5.8 2.2]===>virginica
[5.8 2.7 5.1 1.9]===>virginica
[4.6 3.4 1.4 0.3]===>setosa
[5.6 2.7 4.2 1.3]===>versicolor
[4.7 3.2 1.3 0.2]===>setosa
[5.7 2.5 5.  2. ]===>virginica
[6.9 3.2 5.7 2.3]===>virginica
[6.  3.  4.8 1.8]===>virginica
[5.4 3.9 1.7 0.4]===>setosa
[5.9 3.  5.1 1.8]===>virginica
[6.7 3.1 5.6 2.4]===>virginica
[5.3 3.7 1.5 0.2]===>setosa
[4.3 3.  1.1 0.1]===>setosa
[6.5 3.  5.5 1.8]===>virginica
[5.6 2.5 3.9 1.1]===>versicolor
[6.4 3.1 5.5 1.8]===>virginica
[6.8 3.  5.5 2.1]===>virginica
[6.9 3.1 5.4 2.1]===>virginica
[5.6 3.  4.5 1.5]===>versicolor
[5.4 3.7 1.5 0.2]===>setosa
[6.7 3.3 5.7 2.1]===>virginica
[6.3 2.5 4.9 1.5]===>versicolor
[4.9 3.6 1.4 0.1]===>setosa
[5.7 2.9 4.2 1.3]===>versicolor
[7.2 3.2 6.  1.8]===>virginica
[5.2 2.7 3.9 1.4]===>versicolor
[5.1 3.3 1.7 0.5]===>setosa
[5.7 3.  4.2 1.2]===>versicolor
[4.6 3.1 1.5 0.2]===>setosa
[6.3 2.5 5.  1.9]===>virginica
[5.7 2.6 3.5 1. ]===>versicolor
[5.  3.5 1.3 0.3]===>setosa
[6.3 3.4 5.6 2.4]===>virginica
[7.1 3.  5.9 2.1]===>virginica
[6.3 2.3 4.4 1.3]===>versicolor
[6.6 3.  4.4 1.4]===>versicolor

Process finished with exit code 0

```





### 实现方式二

> 手写

```python
# 方式二：
import pandas as pd
import numpy as np
import random


def load_dataSet():
    csv = pd.read_csv('iris.data', header=None)
    return csv
    pass


def randSplit(dataSet, rate):
    """
    随机打乱数据集
    :param dataSet: 数据集
    :param rate: 提取训练集和测试集的比率
    :return: train test
    """
    l_index = list(dataSet.index)  # 提取出索引
    random.shuffle(l_index)  # 随机打乱索引
    dataSet.index = l_index  # 将打乱后的索引重新赋值给原数据集
    n = dataSet.shape[0]  # 总行数
    m = int(n * rate)  # 训练集的数量
    train = dataSet.loc[range(m), :]  # 提取前m个记录作为训练集
    test = dataSet.loc[range(m, n), :]  # 剩下的作为测试集
    dataSet.index = range(dataSet.shape[0])  # 更新原数据集的索引
    test.index = range(test.shape[0])  # 更新测试集的索引
    return train, test


def gnb_classify(train, test):
    """
    分类
    :param train: 训练集 
    :param test:  测试集
    :return: 
    """
    labels = train.iloc[:, -1].value_counts().index  # 提取训练集的标签种类
    mean = []  # 存放每个类别的均值
    std = []  # 存放每个类别的方差
    result = []  # 存放测试集的预测结果
    for i in labels:
        item = train.loc[train.iloc[:, -1] == i, :]  # 分别提取出每一种类别
        m = item.iloc[:, :-1].mean()  # 当前类别的平均值
        s = np.sum((item.iloc[:, :-1] - m) ** 2) / (item.shape[0])  # 方差
        mean.append(m)
        std.append(s)
    means = pd.DataFrame(mean, index=labels)
    stds = pd.DataFrame(std, index=labels)

    for j in range(test.shape[0]):
        iset = test.iloc[j, :-1].tolist()  # 当前测试实例
        iprob = np.exp(-1 * (iset - means) ** 2 / (stds * 2)) / (np.sqrt(2 * np.pi * stds))  # 正态分布公式
        prob = 1  # 初始化当前实例总概率

        for k in range(test.shape[-1] - 1):
            prob *= iprob[k]
            cla = prob.index[np.argmax(prob.values)]  # 返回最大概率的类别
        result.append(cla)
    test['predict'] = result
    acc = (test.iloc[:, -1] == test.iloc[:, -2]).mean()  # 计算预测准确率
    print("预测准确率: {}".format(acc))
    # 输入预测的结果
    print(test)
    
    
if __name__ == '__main__':
    data_set = load_dataSet()
    # 给 80% 的数据用来训练，20% 用来测试
    _train, _test = randSplit(data_set, 0.8)
    gnb_classify(_train, _test)
    pass
```

<mark>OUT</mark>

```bash
D:\Anaconda3\envs\TF2.1\python.exe /naive_bayes.py
预测准确率: 0.9666666666666667
      0    1    2    3                4          predict
0   6.8  2.8  4.8  1.4  Iris-versicolor  Iris-versicolor
1   7.4  2.8  6.1  1.9   Iris-virginica   Iris-virginica
2   4.6  3.1  1.5  0.2      Iris-setosa      Iris-setosa
3   7.0  3.2  4.7  1.4  Iris-versicolor  Iris-versicolor
4   6.3  2.3  4.4  1.3  Iris-versicolor  Iris-versicolor
5   6.9  3.2  5.7  2.3   Iris-virginica   Iris-virginica
6   6.0  2.2  5.0  1.5   Iris-virginica  Iris-versicolor
7   6.3  3.3  4.7  1.6  Iris-versicolor  Iris-versicolor
8   5.5  2.6  4.4  1.2  Iris-versicolor  Iris-versicolor
9   5.4  3.9  1.7  0.4      Iris-setosa      Iris-setosa
10  5.8  4.0  1.2  0.2      Iris-setosa      Iris-setosa
11  6.5  3.0  5.2  2.0   Iris-virginica   Iris-virginica
12  5.2  3.5  1.5  0.2      Iris-setosa      Iris-setosa
13  6.3  2.5  4.9  1.5  Iris-versicolor  Iris-versicolor
14  7.7  3.0  6.1  2.3   Iris-virginica   Iris-virginica
15  5.4  3.4  1.5  0.4      Iris-setosa      Iris-setosa
16  5.0  3.6  1.4  0.2      Iris-setosa      Iris-setosa
17  5.1  3.8  1.9  0.4      Iris-setosa      Iris-setosa
18  5.7  2.9  4.2  1.3  Iris-versicolor  Iris-versicolor
19  7.2  3.2  6.0  1.8   Iris-virginica   Iris-virginica
20  4.8  3.0  1.4  0.3      Iris-setosa      Iris-setosa
21  4.3  3.0  1.1  0.1      Iris-setosa      Iris-setosa
22  5.0  3.4  1.6  0.4      Iris-setosa      Iris-setosa
23  5.1  3.8  1.5  0.3      Iris-setosa      Iris-setosa
24  6.0  2.7  5.1  1.6  Iris-versicolor  Iris-versicolor
25  5.5  2.3  4.0  1.3  Iris-versicolor  Iris-versicolor
26  5.0  3.3  1.4  0.2      Iris-setosa      Iris-setosa
27  5.5  2.5  4.0  1.3  Iris-versicolor  Iris-versicolor
28  5.4  3.9  1.3  0.4      Iris-setosa      Iris-setosa
29  6.4  2.8  5.6  2.1   Iris-virginica   Iris-virginica

Process finished with exit code 0

```



*问题：训练数是随机筛选的，每次运行的准确率不一样*

