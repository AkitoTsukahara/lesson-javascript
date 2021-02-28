// よく見かける形
const p = makeSomePromise();
p.then(function () {
    /* 成功時の処理 */
}).catch(function () {
    /* 失敗時の処理 */
});

// sample
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "/index.html");
// xhr.send(null);
// xhr.addEventListener("load", function (e) {
//     console.log(xhr.status, xhr.responseText);
// });

// const fs = require('fs');
//
// fs.readFile("ファイル名", {encoding: "utf8"}, function (err, data) {
//     console.log(data);
// });

// {
//     //Imagen sample
//     // 実際に動くようなコードではない
//     readFile("ファイル名", function (err, data) {
//         //コールバック関数
//     });
//
//     const p = readFile("ファイル名");
//     //Promiseのインスタンスが持つメソッドはthenとcatchの2つです。
//     p.then(function (result) {
//         /* ここで処理終了時の動作 */
//     });
//
//     p.catch(function (error) {
//
//     });
// }

//Promiseを作る
const p = new Promise(function (fulfill, reject) {
});

//複数の処理を同時に行うことができます。すると「全ての処理が終わるまで待つ」ということをやりたくなります。これを実現するのがPromise.allメソッド
// Promise.raceというメソッドもあります。こちらは渡された全てのPromiseが解決するまで待つのではなく、どれか1つが解決した時点で終了するPromiseを返します

// Promise.resolveメソッド
// Promise.rejectメソッド
// →引数がおかしいとか、必ずをエラー返すことで、エラーの動作を確認した時に使うかも？

// Promiseチェーン
// Promiseのメソッドthenやcatchは、新しいPromiseを返します
const p1 = Promise.resolve(4);
const p2 = p1.then(function (result) {
    console.log("p1: ", result);
    return 5;
});
p2.then(function (result) {
    console.log("p2: ", result);
});

Promise.resolve(4)
    .then(function (result) {
        return result * 2;
    })
    .then(function (result) {
        console.log("p2: ", result);
    });

// function doublePromise(value) {
//     return new Promise(function (fulfill, resolve) {
//         setTimeout(function () {
//             fulfill(value * 2);
//         }, 1000);
//     });
// }
//
// Promise.resolve(4)
//     .then(function (result) {
//         return doublePromise(result);
//     })
//     .then(function (result) {
//         console.log("p2: ", result);
//     });

// この書き方でも同じように動く（少し読みづらいが）
// Promise.resolve(4)
//     .then(doublePromise)
//     .then(function(result){
//         console.log("p2: ",result);
//     });

//エラーの処理
//p21でthrowする
const p11 = Promise.resolve(4);
const p21 = p11.then(function (result) {
    throw "foo";
});
p21.then(function (result) {
    console.log("p2: ", result);
}, function (err) {
    console.log("p2 fails: ", err);
});

// p12で失敗する
const p12 = Promise.reject("err");
const p22 = p12.then(function (result) {
    return result * 2;
});
p22.then(function (result) {
    console.log("p2: ", result);
}, function (err) {
    console.log("p2 fails: ", err);
});