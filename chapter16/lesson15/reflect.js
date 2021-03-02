const obj = {
    foo: 123,
};

// obj.foo と同じ意味
console.log(Reflect.get(obj, 'foo', obj)); // 123

const obj2 = {};

// プロパティfooを作成
Object.defineProperty(obj2, 'foo', {
    value: 'Hey!',
    writable: false,
    configurable: false,
});

// fooをwritableにしようとする (false)
console.log(Reflect.defineProperty(obj2, 'foo', {
    writable: true,
}));

const target = {
    apple: 'りんご',
    orange: 'みかん',
};
const obj3 = new Proxy(target, {
    get(target, name, receiver) {
        if (target.hasOwnProperty(name)) {
            return target[name];
        } else {
            return 'hello';
        }
    },
});

console.log(obj3.apple); // "りんご"
console.log(obj3.peach); // "hello"

obj3.peach = 'もも';
console.log(obj3.peach); // "もも"

const target4 = {
    apple: 'りんご',
    orange: 'みかん',
    get foo() {
        return this.peach;
    },
};
const obj4 = new Proxy(target4, {
    get(target, name, receiver) {
        if (target.hasOwnProperty(name)) {
            return Reflect.get(target, name, receiver);
        } else {
            return 'hello';
        }
    },
});

console.log(obj4.foo); // "hello"