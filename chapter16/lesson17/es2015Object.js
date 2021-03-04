const obj1 = {
    name: 'John Smith',
    age: 42,
};

const obj2 = {
    age: 28,
    job: 'Time-traveller',
};

Object.assign(obj1, obj2);
console.log(obj1);

const obj3 = {
    name: 'John Smith',
    age: 42,
};

const obj4 = Object.assign({}, obj3);

console.log(obj3 === obj4); // false
console.log(obj3, obj4);


const obj5 = {
    prop: {
        foo: 'bar',
    },
};

const obj6 = Object.assign({}, obj5);

console.log(obj5.prop === obj6.prop); // true


const obj7 = {
    name: 'John Smith',
    age: 28,
    job: 'Time-traveller',
};

console.log(Object.values(obj7)); // ["John Smith", 28, "Time-traveller"]
console.log(Object.entries(obj7)); // [["name", "John Smith"], ["age", 28], "job", "Time-traveller"]]

const obj8 = {
    name: 'John Smith',
    age: 28,
    job: 'Time-traveller',
};

console.log(Object.getOwnPropertyDescriptors(obj8));
/*
{
  "name": {
    "value": "John Smith",
    "writable": true,
    "enumerable": true,
    "configurable": true
  },
  "age": {
    "value": 28,
    "writable": true,
    "enumerable": true,
    "configurable": true
  },
  "job": {
    "value": "Time-traveller",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
}
*/