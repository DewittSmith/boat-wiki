# Array
[[toc]]

You can store multiple variables of the same type in an ```array``` data structure.

```cs
const emptyArray = new int[0];
const int[] dynamicArray = [0, 1, 2, 3];

// You need to specify type for fixed-sized arrays
const int[4] fixedArray = [0, 1, 2, 3];
const int[4] defaultFixedArray = new int[4];
```

## Enumerations
All arrays implement [IEnumerable](/) interface, so you can use it in [foreach](/) loop.
```cs
const array = [0, 1, 2, 3];

foreach(const i in array)
{
    print(i);
}

// Output:
// 0
// 1
// 2
// 3
```

## Jagged Array
A jagged array is an array whose elements are arrays, possibly of different sizes. A jagged array is sometimes called an "array of arrays". There are no multidimensional arrays in ```Boat``` language, so it is the only alternative.
```cs
const jagged = [
    [1, 2, 3],
    [4],
    [5, 6, 7, 8, 9],
    [10]
]

const int[4][4] fixedJaggedArray = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15]
]

const int[4][4] defaultFixedJaggedArray = new int[4][4];

// It is possible to go even further and make array of arrays of arrays of...
const deepArray = new int[4][4][4][4];
```