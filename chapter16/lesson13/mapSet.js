const m = new Map();

m.set(2, 'foo');
m.set(null, 'bar');

console.log(m.get(2), m.get(null)); // foo bar


const m1 = new Map([['alpha', 'α'], ['beta', 'Β'], ['gamma', 'γ']]);

console.log(m1.get('alpha')); // 'α'
console.log(m1.get('beta')); // 'Β'
console.log(m1.get('gamma')); // 'γ'

const arr = ['John Smith', 'Taro Tanaka', 'Gonbe Nanashino'];
const m2 = new Map(arr.entries());

console.log(m2.get(0)); // John Smith

const m3 = new Map([[Boolean, 'Boolean'], [Number, 'Number'], [String, 'String']]);

m3.forEach((value, key) => {
    console.log(`${value}(3):`, key(3));
});

var arr4 = ['John Smith', 'Taro Tanaka', 'Gonbe Nanashino'];
var m4 = new Map(arr4.entries());

console.log(m4.size); // 3

const s = new Set(['foo', 'bar', 3]);

console.log(s); // Set {"foo", "bar", 3}
console.log(s.has('foo')); // true
for (const value of s.values()) {
    console.log(value);
}
for (const value of s.entries()) {
    console.log(value);
}
for (const value of s) {
    console.log(value);
}