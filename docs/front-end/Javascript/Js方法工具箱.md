# Js 方法工具箱

## 数组方法

:::details 自己手写

### 不改变原数组 （返回值要用变量来接收）

1.  **concat()** -> 连接两个**或更多**的数组，并返回结果。
    > array1.concat(array2, array3,..., arrayX)
2.  **entries()** 返回数组的可迭代对象。

    ```js
    var fruits = ["Banana", "Orange"];
    var x = fruits.entries();
    a = x.next().value;
    b = x.next().value;
    c = x.next().value;
    //输出如下
    a: [0, "Banana"];
    b: [1, "Orange"];
    c: undefined;
    ```

3.  **keys()** 用于从数组创建一个包含数组键的可迭代对象。
4.  **values()** 用于从数组创建一个包含数组键的可迭代对象。
5.  **every()** -> 检测数值元素的每个元素是否**都**符合条件。

    > array.every(function(currentValue,index,arr), thisValue)

    > index、arr 可选，thisValue 默认为 undefined,

    > thisValue 是执行 callbackFn 时用作 this 的值。参见迭代方法

6.  **some()** 方法用于检测数组中的元素是否满足指定条件（函数提供）。

    > 参数同 every，一项满足就满足

7.  **filter()** -> 检测数值元素，并返回符合条件所有元素的数组。
    > array.filter(function(currentValue,index,arr), thisValue)
8.  **find()** -> 返回符合传入测试（函数）条件的数组的**第一个**元素的值
    > 如果没有符合条件的元素返回 undefined
9.  **findIndex()** -> 返回符合传入测试（函数）条件的数组元素索引
    > 否则返回-1
10. **forEach()** -> 数组每个元素都执行一次回调函数。
    > array.forEach(callbackFn(currentValue, index, arr), thisValue)
    > 相当于将每个数组复制一遍拿来操作，只复制了最外层
11. **from()** -> 用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
    > 如果对象是数组返回 true，否则返回 false。
    ```js
    var myArr = Array.from("boy");
    // myArr = ['b','o','y']
    ```
12. **includes()** -> 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则 false。

    > arr.includes(searchElement)
    > arr.includes(searchElement, fromIndex)

    > fromIndex -> 可选。从该索引处开始查找 searchElement。如果为负值，则按升序> 从 array.length + fromIndex 的索引开始搜索。默认为 0。

    > [1, 2, 3].includes(2); // true

    > [1, 2, 3].includes(4); // false

    > [1, 2, 3].includes(3, 3); // false

    > [1, 2, 3].includes(3, -1); // true

    > [1, 2, NaN].includes(NaN); // true

13. **indexOf()** -> 搜索数组中的第一个元素，并返回它所在的位置，否则返回-1。
14. **lastIndexOf()** -> 搜索数组中的最后一个元素，并返回它所在的位置，否则返回-1。
15. **Array.isArray(obj)** -> 判断是否为数组

16. **map()** -> 返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

17. **reduce()** -> 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。

    > array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

    > 没有 initialValue，第一项就为 initialValue，从第二项开始执行函数

18. **reduceRight()** -> 反着来
19. **slice()** -> 可从已有的数组中返回选定的元素

    > 不改变原数组

    > array.slice(start, end), 左闭右开，-数表示倒数

20. **sort()** -> 用于对数组的元素进行排序。
    > 默认按字母排序，若要按数字升序 points.sort((a,b)=>a-b);
21. **join()** -> 方法用于把数组中的所有元素转换一个字符串
    > array.join(separator) -> 若省略 separator，则逗号为分隔符
22. **toString()** 把数组转换为字符串，并返回结果。，分割符为',',相当于 jion()或 jion(',')
23. **from()** -> 通过给定的对象中创建一个数组。

### 改变原数组

1.  **fill()** -> 使用一个固定值来填充数组。

    > array.fill(value, start, end)
    > [start、end) 可选

2.  **unshift + shift + push + pop** -> 头增 + 头删 + 尾增 + 尾删，并返回新长度
3.  **reverse()** -> 用于颠倒数组中元素的顺序。
4.  **splice()** -> 改变原数组，返回新数组

    > array.splice(index,howmany,item1,.....,itemX)
    > index 起始位，howmany 几个， item 加入的元素
    > 返回删除的元素

:::
**查看图片可放大浏览器**
![数组方法](/数组方法.png)
参考菜鸟教程[数组方法](https://www.runoob.com/jsref/jsref-obj-array.html)

## 字符串方法

![字符串方法](/字符串方法.png)
参考菜鸟教程[字符串方法](https://www.runoob.com/jsref/jsref-obj-string.html)
