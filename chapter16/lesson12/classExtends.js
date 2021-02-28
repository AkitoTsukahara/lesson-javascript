class Teki {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    attack() {
        console.log(`${this.name}の攻撃！`);
    }
}

class Dragon extends Teki {
    hello() {
        console.log(`${this.name}のHPは${this.hp}です。`)
    }
}

const boss = new Dragon('どらごん', 3000);

boss.attack(); // どらごんの攻撃！
boss.hello();  // どらごんのHPは3000です。

console.log(Dragon.prototype.hasOwnProperty('hello')); // true
console.log(Dragon.prototype.hasOwnProperty('attack')); // false
console.log(Object.getPrototypeOf(Dragon.prototype) === Teki.prototype); // true


class Foo {
    static prop() {
        return 'hi';
    }
}

class Bar extends Foo {
}

console.log(Bar.prop()); // 'hi'
console.log(Object.getPrototypeOf(Bar) === Foo); // true

class Teki2 {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    attack() {
        console.log(`${this.name}の攻撃！`);
    }
}

class Dragon2 extends Teki2 {
    constructor(name, hp) {
        super(name, hp);
        console.log('がおーーーー');
    }

    hello() {
        console.log(`${this.name}のHPは${this.hp}です。`)
    }
}

const boss2 = new Dragon2('どらごん', 3000);

boss2.attack(); // どらごんの攻撃！
boss2.hello();  // どらごんのHPは3000です。

class Foo2 {
    constructor(x, y) {
        return [x, y];
    }
}

class Bar2 extends Foo2 {
    constructor(x, y, z) {
        super(x, y);
        this.push(z);
    }
}

console.log(new Bar2(1, 2, 3)); // [1, 2, 3]

class Teki3 {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    attack() {
        console.log(`${this.name}の攻撃！`);
    }
}


//親クラスのコンストラクタを呼ぶための構文
//super
class Dragon3 extends Teki3 {
    constructor(name, hp) {
        super(name, hp);
        console.log('がおーーーー');
    }

    attack() {
        super.attack();
        console.log('勇者は毒状態になった！');
    }

    hello() {
        console.log(`${this.name}のHPは${this.hp}です。`)
    }
}

var boss3 = new Dragon3('どらごん', 3000);

boss3.attack(); // どらごんの攻撃！勇者は毒状態になった！
boss3.hello();  // どらごんのHPは3000です。


class Teki4 {
    constructor() {
        console.log('コンストラクタは', new.target.name);
    }
}

class Dragon4 extends Teki4 {
    constructor() {
        super();
    }
}

const zako4 = new Teki4(); // コンストラクタは Teki
const boss4 = new Dragon4(); // コンストラクタは Dragon