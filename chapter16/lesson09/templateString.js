const name = '山田太郎';
console.log(`こんにちは、${name}さん`); // "こんにちは、山田太郎さん"

const access = 123;
console.log(`今日のアクセス数は${access}です。`); // "今日のアクセス数は123です。"

const str1 = `foo
bar`;

console.log(str1);
console.log(str1 === 'foo\nbar'); // true

console.log(String.raw`foo\nbar こんに\u28ffちは`); // foo\nbar こんに\u28ffちは
console.log('foo\\nbar こんに\\u28ffちは');
//->大量にバックスラッシュを含む文字列の時に便利かも