const str = "foobar";
const reg = /bar/y;

reg.lastIndex = 0;

console.log(reg.test(str)); // false

reg.lastIndex = 3;

console.log(reg.test(str)); // true
console.log(reg.lastIndex); // 6


const myregexp = {
    [Symbol.match](str){
        return 'hello';
    },
};

console.log('foobar'.match(myregexp)); //"hello"