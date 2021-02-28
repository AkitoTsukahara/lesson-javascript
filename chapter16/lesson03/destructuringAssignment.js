//destructuring assignment
const [a1, b1] = ["foo", "bar"];
const [a2, b2, c2] = ["foo", "bar"];

const {c3, d3, e3} = {
    c3: "foo",
    d3: "bar"
};

[e4, f4] = [1, 2];

({g5, h5} = {g5: 3, h5: 4});

const [a6, b6, [c6, d6]] = [0, 1, [2, 3]];

[a7, b7, c7, d7, e7] = "foobar";

console.log([1, , , 2]);

const arr = ["foo", "bar", "baz"];
for (const [i, val] of arr.entries()) {
    console.log(i + ":" + val)
}

function foo({a, b, c}) {
    console.log(a, b, c);
}

foo({
    a: 3,
    b: "bar",
    c: false
});

function bar(a, b, ...c) {
    console.log(a, b, c);
}

bar(1, 2, 3, 4, 5);

function baz(a = 5, b = 3) {
    console.log(a, b);
}

baz(0);

//let ,const
// ブロックスコープ
// 変数の再宣言ができない

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// for (const i = 1; i <= 10; i++) {
//     console.log(i);
// }

let x = 3;
{
    let x = 5;
}
console.log(x);

// Objectの中身の変化は制限されない
function bar() {
    const obj = {a: 3, b: 5};
    obj.a = 6;
    console.log(obj);
}

bar();

//変数の再定義はできない。
//スコープの外ならば可能
let a = 10;
//let a = 20;
console.log(a);
