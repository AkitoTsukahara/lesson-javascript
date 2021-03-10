//先に自己紹介関数を作っておく
const jikoshokai = function () {
    console.log("私の名前は" + this.name + "です。");
};

const yuusha1 = new Object();
yuusha1.name = "勇者1";
yuusha1.jikoshokai = jikoshokai;
const yuusha2 = new Object();
yuusha2.name = "勇者2";
yuusha2.jikoshokai = jikoshokai;
const yuusha3 = new Object();
yuusha3.name = "勇者3";
yuusha3.jikoshokai = jikoshokai;
const yuusha4 = new Object();
yuusha4.name = "勇者4";
yuusha4.jikoshokai = jikoshokai;
const yuusha5 = new Object();
yuusha5.name = "勇者5";
yuusha5.jikoshokai = jikoshokai;

//みんなに自己紹介してもらう
yuusha1.jikoshokai();
yuusha2.jikoshokai();
yuusha3.jikoshokai();
yuusha4.jikoshokai();
yuusha5.jikoshokai();