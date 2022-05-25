// @ts-nocheck
// 冒泡排序
// 思路：01位置上的数比较，谁大谁往右移，12位置上的数比较，谁大谁往右移，依次进行下去，一轮下来就把最大的数移到最右边了，然后重复以上操作。
function bullleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// 测试代码
const arr = [2, 4, 1, 3, 7, 8, 23, 14];
console.log(bullleSort(arr));