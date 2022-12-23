function num1(a, b) {
    return [a, b];
}
num1(1, 2);
function str23(a, b) {
    return [a, b];
}
str23('', '');
function add(a, b) {
    return [a, b];
}
add(1, 2);
add('', '');
function sub(a, b) {
    let arr = [a, b];
    return arr;
}
console.log(sub('1', 2));
function getLength(arg) {
    return arg.length;
}
getLength([1, 2]);
getLength('122');
function prop(obj, key) {
    return obj[key];
}
let o = { a: 1, b: 2, c: 3 };
prop(o, 'a');
prop(o, 'c');
class Sub {
    constructor() {
        this.attr = [];
        this.attr1 = [];
    }
    add(a) {
        return [a];
    }
}
let asdf = new Sub();
asdf.attr = [1, 2, 3];
asdf.add(21);
