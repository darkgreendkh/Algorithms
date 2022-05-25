// @ts-nocheck
// 选择排序
// 思路：从头遍历数组，找出整个数组中最小的数，放在第一位，然后从第二位开始遍历数组，找到最小的值，放在第二位，依次进行下去，直到数组整体有序。
// 也就是每次搞定一个数的位置（最小数的位置）
function selectionSort(arr) {
    if (arr === null || arr.length === 1) return;
    // 注意这里是 arr.length - 1，是因为当只剩下最后一个元素时，就不需要再遍历了
    for (let i = 0; i < arr.length - 1; i++) {
        // minIndex 表示最小值对应的下标值，一开始把 minIndex 设置为遍历的第一个元素的下标值
        let minIndex = i;
        // 注意这里是 arr.length，是因为每次比较一定要比较到数组的最后一个元素
        for (let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex;
        }
        swap(arr, i, minIndex);
    }
    return arr;
}

// 交换数组 arr 中位置 i 与位置 j 的数
function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 测试代码
const arr = [2, 4, 1, 3, 7, 8, 23, 14];
console.log(selectionSort(arr));