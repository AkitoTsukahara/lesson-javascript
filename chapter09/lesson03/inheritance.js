function test(x, y){
    console.log("thisは", this, "です！！！");
    console.log(x, y);
}

test.apply({hoge: 3}, ["foo", "bar"]);

function sum(){
    let result = 0;
    for(let i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    return result;
}

console.log(sum(1,2,3,4,5)); // 15


//敵を作る
function Teki(){
    this.hp = 100;
}
Teki.prototype.die = function(){
    console.log("やった！　敵を倒した！");
};

//ドラゴンを作る
function Dragon(){
    Teki.apply(this,arguments);
}
Dragon.prototype = new Teki;

//攻撃してHPを教えてもらう
Dragon.prototype.attack = function(){
    console.log("ドラゴンの攻撃！ ドラゴンのHPは"+this.hp+"だ！");
};

const boss = new Dragon();	//インスタンスをつくる
boss.attack();	//攻撃してもらう
boss.die();     //死んでもらう