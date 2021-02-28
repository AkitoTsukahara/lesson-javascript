// function (x, y, z){ ... }
// 上記の書き方が、以下の書き方でも表現できるようになる
// (x, y, z)=>{ ... }

//アロー関数の特徴
// コンストラクタとして利用できない（関数がコンストラクトして利用できる需要が無かった背景がある？）
// thisを引き継ぐ

// function MyDivOld(name) {
//     this.div = document.createElement("div");
//     this.name = name;
//     this.div.appendChild(document.createTextNode("このdiv要素は" + name + "です"));
//     document.body.appendChild(this.div);
//
//     this.div.addEventListener('click', (function (e) {
//         console.log(this.name);
//     }).bind(this), false);
// }
//
// const div1 = new MyDivOld("div1");
//
// // 新しい書き方
// function MyDiv(name) {
//     this.div = document.createElement("div");
//     this.name = name;
//     this.div.appendChild(document.createTextNode("このdiv要素は" + name + "です"));
//     document.body.appendChild(this.div);
//
//     this.div.addEventListener('click', (e) => {
//         console.log(this.name);
//     }, false);
// }

//const div2 = new MyDiv("div2");


const func1 = (x, y) => {
    return x + y;
};

const func2 = (x, y) => x + y;

const arr = [1, 2, 3, 4, 5];
console.log(arr.map(x => x * 2)); // [2, 4, 6, 8, 10]

console.log(arr.map(function (val) {
    return val * 2
})); // [2, 4, 6, 8, 10]
console.log(arr.map((val) => val * 2));
console.log(arr.map(val => val * 2));

//function というキーワードを無くし、=>で繋ぐ