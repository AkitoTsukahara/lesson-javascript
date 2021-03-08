const a = [0, 1, 2, 3, 4];
const b = a;
a[5] = 5;
console.log(a);
console.log(b);


function copyArray(arr) {
    const newarr = [];
    for (let i = 0; i < arr.length; i++) {
        newarr[i] = arr[i];
    }
    return newarr;
}

const a1 = [0, 1, 2, 3, 4];
console.log(a1);

const b1 = copyArray(a1);
a1[5] = 5;
console.log(a1);
console.log(b1);