const obj = {
    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return "三百";
        } else {
            return 300;
        }
    },
};

console.log(String(obj)); // "三百"
console.log(Number(obj)); // 300
console.log(obj * 3); // 900


const obj2 = {
    [Symbol.toPrimitive](hint) {
        if (hint === "string") {
            return "hello";
        } else if (hint === "number") {
            return 100;
        } else {
            return 5;
        }
    },
};

console.log("5" == obj2); // true


const obj3 = {
    foo: 3,
};
console.log(String(obj3)); // "[object Object]"

const obj4 = Promise.resolve(4);
console.log(String(obj4)); // "[object Promise]"

class MyClass{}
const obj5 = new MyClass();
console.log(obj5.toString()); // "[object Object]"