// シンボルは、ES6で導入された新しいプリミティブです。
// 新しいプリミティブであるということは、オブジェクトではなく、メソッドを持たないデータ、文字列でも数値でも真偽値でもない値ということです。

// 一度作成した symbol はそれ自身とのみ等しい。
// ということは、
// まったく同じ symbol は二度と作ることはできない。

// symbol はオブジェクトのキーとして利用することができる。
// これを利用すれば、

// キーが被ることがない。
// ライブラリ・フレームワークなどとキーでの衝突を防げる
// キーを文字列で指定した場合に比べて、改変などされるリスクが減る (決してなくなるわけではない)。
// > Object.getOwnPropertySymbols( obj ) で指定されたシンボルの配列を取得できるため。

const obj = {};
obj["foo"] = "hoge";

const s = Symbol();
obj[s] = "piyo";

console.log(obj.foo, obj[s]);

const obj1 = {};
obj1[3] = "foo";

console.log(obj1["3"]);

const obj2 = {}, s2 = Symbol();
obj2[s2] = "foo";
console.log(obj[String(s2)]);
// -> undefined

const myhiddensymbol = Symbol();  //実際はグローバル変数にせずにどこかに隠しておく

function saveValueInObject(obj, value) {
    obj[myhiddensymbol] = value;
}

function getValueFromObject(obj) {
    return obj[myhiddensymbol];
}

const obj3 = {}, s3 = Symbol();
obj3[s3] = "foo";
console.log(Object.getOwnPropertySymbols(obj3)[0] === s3); //true

//Well-Known Symbols

// hasInstance
// isConcatSpreadable
// iterator
// match
// replace
// search
// species
// split
// toPrimitive
// toStringTag
// unscopables

const iterable = {
    a: 1,
    b: 0
};
iterable[Symbol.iterator] = function () {
    //イテレータを返す
    return {
        iterable: this,
        next: function () {
            if (this.iterable.a > 100) {
                //無限ループ防止のため100を超えたら打ち切り
                return {
                    done: true,
                    value: null
                };
            }
            const n = this.iterable.a + this.iterable.b, oldb = this.iterable.b;
            this.iterable.a = oldb, this.iterable.b = n;
            return {
                value: oldb,
                done: false
            };
        }
    };
};

//ためしに回してみる
for (const n of iterable) {
    console.log(n);
}

console.log(typeof Symbol());  //symbol

const x = "foo", y = "bar";
const obj4 = {
    [x + y]: 3
};
console.log(obj4.foobar);  //3

console.log(Symbol("foo") !== Symbol("foo"));  //true

let obj5 = {};
const sym1 = Symbol();
const sym2 = Symbol("debug");
const sym3 = Symbol.for("key");

obj5[sym1] = "lorem";
obj5[sym2] = "ipsum";
obj5[sym3] = "dolor";

// 下記は undefined を返す
console.log(obj5[Symbol()]);
console.log(obj5[Symbol("debug")]);
console.log(obj5[Symbol.for("debug")]);

// 下記は セットした値を返す
console.log(obj5[sym2]); // "ipsum"
console.log(obj5[sym3]); // "dolor"
console.log(obj5[Symbol.for("key")]); // "dolor"