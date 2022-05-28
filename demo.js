// @ts-nocheck
function xor_one(arr) {
    let xor = 0;
    arr.forEach(cur => {
        xor ^= cur;
    });
    console.log(xor);
}

const arr = [1, 1, 2, 2, 3];
xor_one(arr);

function xor_two(arr) {
    let xor = 0;
    arr.forEach(cur => {
        xor ^= cur;
    });
    const rightOne = xor & (~xor + 1);
    let onlyOne = 0;
    arr.forEach(cur => {
        let temp = rightOne & cur;
        if (temp === 0) {
            onlyOne ^= cur;
        }
    });
    console.log(onlyOne);
    console.log(xor ^ onlyOne);
}

const arr0 = [1, 2, 3, 3, 4, 4];
xor_two(arr0);



// 我的想法：哈希表整起
function xor(arr) {
    const map = new Map();
    arr.forEach(x => {
        if (!map.has(x)) {
            map.set(x, 1);
        } else {
            map.set(x, map.get(x) + 1);
        }
    });
    arr.forEach(x => {
        if (map.get(x) === 1) {
            console.log(x);
        }
    });
}
xor(arr);
xor(arr0);



