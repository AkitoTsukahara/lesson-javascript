function Yuusha(n) {
    this.name = n;
}

Yuusha.prototype.jikoshokai = function () {
    console.log("私の名前は" + this.name + "です。" + "HPは" + this.hp + "です。");
};
Yuusha.prototype.hp = 100;
//攻撃する
Yuusha.prototype.attack = function () {
    this.hp -= 20;
    console.log("攻撃しました。 HPが" + this.hp + "に減りました。");
};

const yuusha1 = new Yuusha("勇者1");
const yuusha2 = new Yuusha("勇者2");

//攻撃してもらう
yuusha1.attack();
yuusha1.attack();

yuusha1.jikoshokai();
yuusha2.jikoshokai();