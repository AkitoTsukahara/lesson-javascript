class Foo {
    constructor(arg) {
        this.prop = arg;
    }
}

const obj = new Foo(100);
console.log(obj);
console.log(typeof (Foo)); //function


class Teki {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name}の攻撃！`);
    }
}

const zako = new Teki("ザコ");
zako.attack();

class Teki1 {
    constructor(name) {
        this.name = name;
    }

    attack() {
        console.log(`${this.name}の攻撃！`);
    }

    static makeZako() {
        return new Teki1("ザコ");
    }
}

const zako1 = Teki1.makeZako();
zako1.attack();

{
    class Foo {
    }

    var foo = new Foo();
    console.log(foo); // Foo {}
}

console.log(typeof Foo); // "undefined"

const Foo1 = class {
    hello() {
        console.log("Hi!");
    }
};

const obj2 = new Foo1();
obj2.hello(); // "Hi!"

class Foo3 {
    constructor(x, y) {
        return [x, y];
    }
}

const arr3 = new Foo3(1, 2);

console.log(arr3); // [1, 2]
console.log(arr3 instanceof Foo3); // false