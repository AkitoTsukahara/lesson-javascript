//途中で抜けたりまた入ったりできる関数
//functionキーワードのあとに*（アスタリスク）が付いています。このように宣言された関数はジェネレータ関数
//yield式はジェネレータ関数の中でのみ使用できる構文で、これは関数から一旦抜けることを意味します。

// ジェネレータ関数を定義
function* gen(x) {
    console.log(x);
    yield;
    console.log(x * 2);
    yield;
    console.log(x * 3);
}

const g = gen(10);
console.log("1回目");
g.next();
console.log("2回目");
g.next();
console.log("3回目");
g.next();

//ジェネレータ関数（上の例だとgen）を呼び出しただけでは関数は実行されません。
//nextメソッドを呼び出すことで初めてgenが実行されます。
//基本的な使い方は、まずGeneratorオブジェクトを取得してnextメソッドで関数を実行するということになります。

function* sum() {
    let acc = 0;
    while (true) {
        const x = yield acc;
        acc += x;
    }
}

const g1 = sum();
g1.next(); // 実行を開始

console.log(g1.next(1)); // {value: 1, done: false}
console.log(g1.next(2)); // {value: 3, done: false}
console.log(g1.next(3)); // {value: 6, done: false}
console.log(g1.next(4)); // {value: 10, done: false}

// startからendまでの整数を順番に発生させるジェネレータ関数
function* ran(start, end){
    for (let currentValue = start; currentValue <= end; currentValue++){
        yield currentValue;
    }
}

for (const i of ran(5, 10)){
    console.log(i);
}