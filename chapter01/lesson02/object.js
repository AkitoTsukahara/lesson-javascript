const a = {"aaa": 10};
const b = a;
a.aaa = 5;
console.log(a.aaa);
console.log(b.aaa);