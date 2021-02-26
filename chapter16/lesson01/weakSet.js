const key = {};
const ws = new WeakSet();

console.log(ws.has(key));

ws.add(key);

console.log(ws.has(key));

console.log(ws.has({}));

