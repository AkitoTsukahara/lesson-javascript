function* gen() {
    yield 1;
    yield 10;
    yield 100;
}

const g = gen();
console.log(g.next()); // {value: 1, done: false}
console.log(g.return('foo')); // {value: "foo", done: true}
console.log(g.next()); // {value: undefined, done: true}

//途中でreturnを挟むとジェネレータ関数の中での評価が終了する


function* gen1() {
    yield 1;
    yield 10;
    yield 100;
}

// const g1 = gen1();
// console.log(g1.next()); // {value: 1, done: false}
// console.log(g1.throw(new Error('Hey!'))); // エラー

//途中でthrowを挟むとジェネレータ関数の中で例外が発生する

function* gen2() {
    try {
        yield 1;
        yield 10;
        yield 100;
    } catch (e) {
        yield -42;
    }
}

const g2 = gen2();
console.log(g2.next()); // {value: 1, done: false}
console.log(g2.throw(new Error('Hey!'))); // {value: -42, done: false}


function* gen3() {
    console.log(yield* [1, 2, 3]);
}

const g3 = gen3();
console.log(g3.next()); // {value: 1, done: false}
console.log(g3.next()); // {value: 2, done: false}
console.log(g3.next()); // {value: 3, done: false}
console.log(g3.next()); // {value: undefined, done: true}

//yield*の返り値はyieldとは異なり、外からの入力ではありません。返り値はイテレータがdone:trueを返したときのvalueの値
//ジェネレータ関数の中から別のジェネレータ関数を呼び出す

function* genA() {
    yield* [1, 2, 3];
    return 'foo';
}

function* genB() {
    const result = yield* genA();
    console.log('resultは', result);
}

const g0 = genB();
console.log(g0.next()); // {value: 1, done: false}
console.log(g0.next()); // {value: 2, done: false}
console.log(g0.next()); // {value: 3, done: false}
// ここでresultは fooと表示
console.log(g0.next()); // {value: undefined, done: true}

// ジェネレータ関数はコンストラクタではないことになっています。よって、普通に呼び出すことはできても、newで呼び出すことはできません。

const obj = {
    foo: 100,
    bar: 200,
    gen: function* () {
        yield this.foo;
        yield this.bar;
    },
};

const gobj = obj.gen();
console.log(gobj.next()); // {value: 100, done: false}
console.log(gobj.next()); // {value: 200, done: false}
console.log(gobj.next());