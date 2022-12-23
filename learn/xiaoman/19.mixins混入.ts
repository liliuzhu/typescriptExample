interface Name {
    name: string
}
interface Age {
    age: number
}
interface Sex {
    sex: number
}

let people1: Name = { name: "小满" }
let people2: Age = { age: 20 }
let people3: Sex = { sex: 1 }

const people = Object.assign({}, people1,people2,people3)
console.log(people)

class A {
    type: boolean = false;
    changeType() {
        this.type = !this.type
    }
}


class B {
    name: string = '张三';
    getName(): string {
        return this.name;
    }
}

class C implements A,B {
    type: boolean = false
    name: string = ''
    changeType:() => void
    getName:()=> string
}

function mixins (curCla:any, itemCls:any[]){
    itemCls.forEach(item=>{
        Object.getOwnPropertyNames(item.prototype).forEach(name=>{
            curCla.prototype[name] =  item.prototype[name]
        })
    })
}
console.log(Object.getOwnPropertyNames(C.prototype))
mixins(C, [A,B])

let ccc = new C()
console.log(ccc.type)
ccc.changeType()
console.log(ccc.type)
console.log(C.prototype.constructor)

