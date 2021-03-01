const target = {};
const obj = new Proxy(target, {
    get(target, name, receiver) {
        return name;
    },
});

console.log(obj.foo); // "foo"
console.log(obj['あいうえお']); // "あいうえお"

obj.name = "Mary Sue";
console.log(obj.name); // "name"
console.log(target.name); // "Mary Sue"


const target2 = {
    apple: 'りんご',
    orange: 'みかん',
};
const obj2 = new Proxy(target2, {
    get(target, name, receiver) {
        if (target.hasOwnProperty(name)) {
            return target[name];
        } else {
            return 'hello';
        }
    },
});

console.log(obj2.apple); // "りんご"
console.log(obj2.peach); // "hello"

obj.peach = 'もも';
console.log(obj2.peach); // "もも"

const obj3 = new Proxy({}, {
    set(target, name, value, receiver) {
        if ('number' === typeof value) {
            target[name] = value;
        } else {
            throw new Error('は？');
        }
    },
});

obj3.foo = 3;  // OK
console.log(obj3.foo); // 3
//obj3.bar = 'hello'; // エラー

const func = new Proxy(function () {
}, {
    apply(target, thisValue, args) {
        console.log('関数が次の引数で呼ばれました', args);
        return target.apply(thisValue, args);
    },
});

func('foo', 'bar', 3);