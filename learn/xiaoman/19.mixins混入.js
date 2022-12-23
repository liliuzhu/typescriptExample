let people1 = { name: "小满" };
let people2 = { age: 20 };
let people3 = { sex: 1 };
const people = Object.assign({}, people1, people2, people3);
console.log(people);
class A {
    constructor() {
        this.type = false;
    }
    changeType() {
        this.type = !this.type;
    }
}
class B {
    constructor() {
        this.name = '张三';
    }
    getName() {
        return this.name;
    }
}
class C {
    constructor() {
        this.type = false;
        this.name = '';
    }
}
function mixins(curCla, itemCls) {
    itemCls.forEach(item => {
        Object.getOwnPropertyNames(item.prototype).forEach(name => {
            curCla.prototype[name] = item.prototype[name];
        });
    });
}
console.log(Object.getOwnPropertyNames(C.prototype));
mixins(C, [A, B]);
let ccc = new C();
console.log(ccc.type);
ccc.changeType();
console.log(ccc.type);
console.log(C.prototype.constructor);
