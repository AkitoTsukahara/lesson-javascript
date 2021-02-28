// イテレータ（iterator）とは、ざっくり言うと一連の複数のデータからなるものです。
// そう言われて思い浮かぶのは配列でしょう。配列は複数のデータが並んだオブジェクトです。
// 他にも文字列なども、文字の並びとみなせばイテレータと言えなくもありません。
// ES2015ではこれらを抽象化してイテレータとして仕様化されました。

const arr = [0, 1, 2, 3, 4];
for (const value of arr) {
    console.log(value);
}

for (const value of "foobar") {
    console.log(value);
}

// 配列の場合はvaluesメソッドにより対応するイテレータを得る
const iterator = [1, 2, 3, 4, 5].values();
console.log(iterator.next());
console.log(iterator.next());

const arr01 = [1, 2, 3, 4, 5];
const iterator01 = arr01.values();
let result;
while (true) {
    result = iterator01.next();
    if (result.done) {
        break;
    }
    console.log(result.value);
}

// iterableは、イテレータにより順に取り出すことができるオブジェクト
// イテレータというのは本来データを保持するオブジェクトからデータを取ってくる役割を持っています

// Array.fromというメソッドがあります。これは、配列ではないものから配列を作るメソッドです。

console.log(Array.from("foobar"));

console.log(Array.from("foobar", function (char) {
    return char.toUpperCase()
}));
