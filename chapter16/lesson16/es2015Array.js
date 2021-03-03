const arr1 = ['foo', 'bar', 'baz'];
for (const [idx, value] of arr1.entries()) {
    console.log(`${idx}: ${value}`);
}

const arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr2.fill(100, 0, 5);
console.log(arr2); // [100, 100, 100, 100, 100, 5, 6, 7, 8, 9]

const arr3 = new Array(100);
arr3.fill('◯', 0, 100);
console.log(arr3);

const arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr4.copyWithin(5, 0, 3);
console.log(arr4); // [0, 1, 2, 3, 4, 0, 1, 2, 8, 9]

const arr5 = [3, 7, 1, -5, 0, -2];
console.log(arr5.find(x => x < 0)); // -5
console.log(arr5.findIndex(x => x < 0)); // 3
console.log(arr5.includes(3));

const arr6 = new Array(10);
console.log(arr6); // [empty × 10]
console.log(arr6.length); // 10
console.log(arr6[0]); // undefined
console.log('0' in arr6); // false


const arr7 = [0, 1, , 3, , , 6];
console.log(arr7); // [0, 1, empty, 3, empty × 2, 6]
console.log(Object.keys(arr7)); // ["0", "1", "3", "6"]


class SuperArray extends Array {
    constructor(...args) {
        super(...args);
    }

    double() {
        const len = this.length;
        this.length = len * 2;
        this.copyWithin(len, 0, len);
    }
}

var arr8 = new SuperArray(1, 2, 3);
console.log(arr8); // SuperArray [1, 2, 3]
console.log(arr8[1]); // 2

arr8.push(4);
console.log(arr8); // SuperArray [1, 2, 3, 4]

arr8.double();
console.log(arr8); // SuperArray [1, 2, 3, 4, 1, 2, 3, 4]

class SuperArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

var arr9 = SuperArray.of(1, 2, 3);

var arr10 = arr9.slice(0);

console.log(arr10 instanceof SuperArray); // false
console.log(arr10 instanceof Array); // true