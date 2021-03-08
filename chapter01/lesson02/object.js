const a = {"aaa": 10};
const b = a;
a.aaa = 5;
console.log(a.aaa);
console.log(b.aaa);

const a1 = {"aaa": 10};
const b2 = {"aaa": 10};
a1.aaa = 5;
console.log(a1.aaa);
console.log(b2.aaa);
