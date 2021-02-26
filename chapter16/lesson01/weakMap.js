const wm = new WeakMap();

const key1 = {};

wm.set(key1, 100);

console.log(wm.get(key1));

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

console.log()