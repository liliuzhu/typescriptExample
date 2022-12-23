/*
* 配置rollup
* */

// import * as process from "process";
//
// const a:string = 'xiao2313423365666767'
// console.log(a)
// console.log(process.env.NODE_ENV)
// if(process.env.NODE_ENV === 'development'){
//     console.log('开发')
// }else {
//     console.log('生产')
// }


/*
* ts实现发布订阅
* */
interface Events {
    on: (name:string,fn:Function) => void,
    emit: (name:string, ...args:Array<any>) => void,
    off: (name:string,fn:Function) => void,
    once: (name:string,fn:Function) => void,
}

interface List {
    [key:string]: Array<Function>
}

class Dispatch implements Events {
    list:List
    constructor() {
        this.list = {}
    }
    on(name:string,fn:Function){
        const callbacks = this.list[name] || []
        callbacks.push(fn)
        this.list[name] = callbacks
    }
    emit(name:string, ...args:Array<any>){
        let eventName = this.list[name]
        if(eventName){
            eventName.forEach(fn=>{
                fn(...args)
            })
        }
    }
    off(name: string, fn:Function){
        let eventName = this.list[name]
        if(eventName && fn){
            let index = eventName.findIndex(fns => fns === fn)
            eventName.splice(index, 1)
        }
    }
    once(name:string,fn:Function){
        let de = (...args: Array<any>)=>{
            fn(...args)
            this.off(name, de)
        }

        this.on(name, de)
    }
}


// const o = new Dispatch()
//
// o.on('post', (...args: Array<any>) => {
//     console.log(1, args)
// })
//
// const fn = (...args: Array<any>) => {
//     console.log(2, args)
// }
// o.once('post', fn)
// // o.off('post', fn)
// o.emit('post', 1,false,'小满', { name: '小满' })
// o.emit('post', 1,false,'小满', { name: '小满' })

/*
* ts进阶proxy reflect
* */

type Person = {
    name: string,
    age: number,
    text: string
}


const proxy = (object: any, key:any)=>{
    return new Proxy(object, {
        get(target: any, prop: string | symbol, receiver: any): any {
            console.log('===>get',prop)
            return Reflect.get(target,prop,receiver)
            // return target[prop]
        },
        set(target: any, prop: string | symbol, newValue: any, receiver: any): boolean {
            console.log('===>set',prop)
            return Reflect.set(target,prop,newValue,receiver)
            // return target[prop] = newValue
        }
    })
}

const logAccess = (object:Person, key: keyof Person):Person => {
    return proxy(object, key)
}

// let man:Person = logAccess({
//     name: '小满',
//     age: 22,
//     text: '哈哈哈'
// }, 'age')
// console.log(man)
// console.log(man.name)
// man.age = 30
// console.log(man)


/*
* ts进阶Partial & Pick
* */
type Readonly2<T> = {
    readonly [P in keyof T]?: T[P];
};

type Record2<K extends keyof any, T> = {
    [P in K]?: T;
};

type p = Partial<Person>
type p2 = Pick<Person, 'age'|'name'>
type p3 = Readonly<Person>
type p4 = Readonly2<Person>
type key = "A"|"B"
type p5 = Record2<key,Person>

let obj:p5 = {
    A: { name: '',age:0,text:'' },
    B: { name: '',age:0,text:'' },
}

/*
* ts进阶用法 infer关键字
* */

// 定义一个类型 如果是数组类型 就返回 数组元素的类型 否则 就传入什么类型 就返回什么类型

// type TYPE<T> = T extends Array<any> ? T[number] : T
type TYPE<T> = T extends Array<infer U> ? U : T
type T = [string, number]
type uni = TYPE<T>
type A = TYPE<Array<string|number>>
type A1 = TYPE<(string|number)[]>
type B = TYPE<boolean>
let a:A = 12
let b:B = false


/*
* ts进阶用法 infer提取元素的妙用
* */

type Arr = ['a','b','c']
type First<T extends any[]> = T extends [infer A, ...any[]] ? A : []
type Last<T extends any[]> = T extends [...any[], infer Last,] ? Last : [] //  无效
type Pop<T extends any[]> = T extends [...infer Reset, unknown] ? Reset : [] // 无效
type Shift<T extends any[]> = T extends [unknown, ...infer Reset] ? Reset : []
type a = First<Arr>
type b = Last<Arr>
type c = Pop<Arr>
type d = Shift<Arr>

/*
* ts进阶用法 infer递归
* */
type Arra = [1,2,3,4]
type ReverArr<T extends any[]> = T extends [infer First, ...infer rest] ? [...ReverArr<rest>, First] : T

type Arrb = ReverArr<Arra>

