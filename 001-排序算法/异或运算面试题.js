// @ts-nocheck
// (1) 在一个整形数组中，已知该数组中只有 ** 一种 ** 数出现的次数为奇数，其余所有数出现次数均为偶数，请找出此数。
// (2) 在一个整形数组中，已知该数组中只有 ** 两种 ** 数出现的次数为奇数，其余所有数出现次数均为偶数，请找出此数。
// 要求：时间复杂度 O(n)、空间复杂度 O(1)

// (1)
function xor_one(arr) {
    let xor = 0;
    arr.forEach(cur => {
        xor ^= cur;
    });
    console.log(xor);
}

// 测试代码
const arr_one = [1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 999, 6, 6];
xor_one(arr_one);


// (2)
function xor_two(arr) {
    let xor = 0;
    arr.forEach(x => {
        xor ^= x;
    });
    // xor = a ^ b 
    let rightOne = xor & (~xor + 1); // 取出一个数最右侧的 1。这里是取出 xor 最右侧的 1
    // console.log(rightOne);
    let onlyOne = 0;
    arr.forEach(cur => {
        // console.log(cur & rightOne);
        let res = cur & rightOne;  // 只用当与 rightOne 相同位置为 0 的数，res 的结果才为 1
        if (res === 0) {
            // console.log(cur);
            onlyOne ^= cur;
        }
    });
    console.log(onlyOne);
    console.log(xor ^ onlyOne);
}

// 测试代码
const arr_two = [1, 2, 2, 3, 3, 4];
xor_two(arr_two);
