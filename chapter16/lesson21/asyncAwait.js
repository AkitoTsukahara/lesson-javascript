// async function foo(x) {
//     return x * 10;
// }
//
// foo(5)
//     .then(v => console.log(v));

// async function foo(x){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{ resolve(x*10); }, 1000);
//     });
// }
//
// foo(5).then(v=> console.log(v));

// function waitFor3Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(resolve, 3000);
//     });
// }
//
// async function main() {
//     console.log('main started');
//     await waitFor3Seconds();
//     console.log('done!');
// }
//
// main();
// console.log('called main');


// 1秒かけて値を倍にする関数
// function double(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(2 * x);
//         }, 1000);
//     });
// }
//
// async function main1() {
//     const x = 10;
//     // 1秒かけてxを倍にしてもらう
//     const y = await double(x);
//     console.log(y);
// }
//
// main1();
//
// async function main2() {
//     const x = 10;
//     const x2 = await double(x);
//     const x3 = await double(x2);
//     const x4 = await double(x3);
//     console.log(x4);
// }
//
// main2();
//
// function main3() {
//     const x = 10;
//     double(x)
//         .then(x2 => double(x2))
//         .then(x3 => double(x3))
//         .then(x4 => {
//             console.log(x4);
//         });
// }
//
// main3();
//
// async function main4() {
//     const x = 10;
//     const x4 = await double(x).then(double).then(double);
//     console.log(x4);
// }
//
// main4();


async function fail() {
    throw new Error('ぎゃーーーー');
}

async function main() {
    console.log('main start');
    try {
        await fail();
    } catch (e) {
        console.log('caught error:', e);
    }
    console.log('main end');
}

main()
    .then(() => {
        console.log('returned from main');
    });


// 3秒待つ関数
function waitFor3Seconds() {
    return new Promise((resolve) => {
        setTimeout(resolve, 3000);
    });
}

// 初期値xに対してasync関数fを2回適用する関数
async function runTwice(x, f) {
    const x2 = await f(x);
    console.log('done (1)');
    const x3 = await f(x2);
    console.log('done (2)');
    return x3;
}

runTwice(10, async function (x) {
    await waitFor3Seconds();
    return x * 2;
})
    .then(x => {
        console.log('result:', x);
    });


const obj = {
    foo: 3,
    async func(){
        return this.foo;
    },
};

obj.func().then(x=>{
    console.log(x);
});