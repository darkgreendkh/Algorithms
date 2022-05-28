// @ts-nocheck
// 冒泡排序
// 思路：0 1位置上的数比较，谁大谁往右移，1 2位置上的数比较，谁大谁往右移，依次进行下去，一轮下来就把最大的数移到最右边了，然后重复以上操作。
function bubbleSort(arr) {
    const len = arr.length;
    if (arr === null || len === 1) return;
    for (let i = len - 1; i > 0; i--) { // 在 0~i 位置上进行比较和交换
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// 优化版本：如果某次冒泡中，没有发生交换操作，就证明已经有序，直接 return 即可
function bubbleSort_better(arr) {
    const len = arr.length;
    let flag = false; // 初始化为 false
    if (arr === null || len === 1) return;
    for (let i = len - 1; i > 0; i--) { // 在 0~i 位置上进行比较和交换
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                flag = true; // 如果发生了交换操作，就改为 true
            }
        }
        if (flag === false) return arr; // false 说明没有进行交换操作，那么就证明后面已经有序了，直接 return
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 测试代码
const arr = [2, 4, 1, 3, 7, 8, 23, 44];
console.log(bubbleSort(arr));
console.log(bubbleSort_better(arr));