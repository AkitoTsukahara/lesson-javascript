// Mapと違って、キーとして使われるオブジェクトが生きているうちに、WeakMapがキーの参照を持ちますが、
// WeakMap以外誰にも使われていなければ、ガベージコレクションによってキーオブジェクトのメモリを解放してしまいます。
// つまり、キーの参照が弱い参照であり、自動的に削除される可能性があります。

const wm = new WeakMap();

const key1 = {};

wm.set(key1, 100);

console.log(wm.get(key1));

// 同一のオブジェクトでないと参照できないことを意味する
console.log(key1 === {});

function saveValueObject(obj, value) {
    obj._myvalue = value;
}

function getValueObject(obj) {
    return obj._myvalue;
}

const a = {
    foo: 3,
    bar: 5
};

const wm1 = new WeakMap();
wm1.set(a, 100);

console.log(wm1.get(a));