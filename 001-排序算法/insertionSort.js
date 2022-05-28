// @ts-nocheck
function insertionSort(arr) {
    const len = arr.length;
    if (arr === null || len === 1) return;
    for (let i = 1; i < len; i++) { // 在 0~i 上有序
        // for (let j = i; j > 0; j--) {
        //     if (arr[j] < arr[j - 1]) {
        //         swap(arr, j, j - 1);
        //     } else {
        //         break;
        //     }
        // }
        // 左神是这样写的，学习起来
        for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
            swap(arr, j, j - 1);
        }
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [4, 2, 6, 1, 8, 11, -2];
console.log(insertionSort(arr));