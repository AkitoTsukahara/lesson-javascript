const obj = {
    // 直書き
    foo: 'Hey!',
    // 文字列
    'foo bar': 123,
    // 数値
    12: 'hello',
};

const obj1 = {
    1e5: 'foo',
};

console.log(obj1); // {100000: 'foo'}

const str1 = 'foo', str2 = 'bar';
const obj2 = {
    [str1 + str2]: 12345,
}

console.log(obj2); // {foobar: 12345}

const foo = '何かの値';

const obj3 = {
    foo,
};

const obj4 = {
    func: function* () {
        // ...
    },
};

const obj5 = {
    * func() {
        // ...
    },
};

const mysymbol = Symbol();

const obj6 = {
    foo: function () {
    },
    'foo bar'() {
        return 0;
    },
    1e5() {
        return 1e5;
    },
    [mysymbol]() {
        return 300;
    },
    [Symbol.iterator]() {
        throw new Error('Hi');
    },
};

console.log(obj6.foo.name); // "foo"
console.log(obj6['foo bar'].name); // "foo bar"
console.log(obj6[1e5].name); // "100000"
console.log(obj6[mysymbol].name); // ""
console.log(obj6[Symbol.iterator].name); // "[Symbol.iterator]"