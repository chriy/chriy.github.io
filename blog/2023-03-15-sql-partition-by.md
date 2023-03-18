---
title: SQL窗口函数
slug: sql-partition-by
---


### 什么是窗口函数
在 SQL 中，窗口函数是一种特殊的函数，它可以对一个窗口（一组行）进行计算，而不是对整个结果集进行计算。这种功能对于分析和聚合数据非常有用。

### 窗口函数的语法
在 MySQL 中，窗口函数的语法如下：

```sql
SELECT column1, column2, ..., function(column) OVER (PARTITION BY column1, column2, ... ORDER BY columnX DESC/ASC) AS result_column
FROM table_name;
```
其中，column1, column2, ... 是你要对其进行分组的列，columnX 是你要根据其排序的列，function(column) 是你要应用的窗口函数。

### 窗口函数的用途
使用窗口函数，你可以轻松地执行以下任务：

- **计算行与组之间的排名**
- **计算行与组之间的百分比**
- **计算移动平均值或移动总和**
- **计算当前行与之前或之后的行之间的差异**
- **计算累积和或累积平均值等**

下面是一些窗口函数的例子：

示例：

假设你有一个包含员工工资信息的表格。以下是一些可以使用窗口函数执行的任务和相应的查询示例。

1. 为每个部门计算平均工资：
```sql
SELECT department, AVG(salary) OVER (PARTITION BY department) AS avg_salary
FROM employees;
```
2. 计算每个部门的工资排名：
```sql
SELECT department, salary, DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_rank
FROM employees;
```
3. 计算每个部门的工资百分比：
```sql
SELECT department, salary, PERCENT_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS salary_percentile
FROM employees;
```
4. 计算每个员工的薪水与其部门平均薪水之间的差异：
```sql
SELECT name, department, salary, AVG(salary) OVER (PARTITION BY department) - salary AS salary_difference
FROM employees;
```
这些是使用窗口函数的一些示例，你可以使用类似的查询来执行各种任务。窗口函数是 SQL 中非常强大的工具，可以帮助你更轻松地对数据进行分析和聚合。
