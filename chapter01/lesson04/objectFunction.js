const a = {};
a.abc = test;
a.abc();

function test() {
    console.log("test");
}

const b = {
    abc: function () {
        console.log("abc");
    },
    aaa: function () {
        console.log("aaa");
    }
};
b.abc();
b.aaa();