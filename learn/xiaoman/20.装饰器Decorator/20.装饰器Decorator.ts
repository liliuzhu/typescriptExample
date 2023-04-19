const watcher:ClassDecorator = (...arg)=>{
    console.log(12, arg)
    // target.prototype.getName = <T>(name:T):T=>{
    //     return name
    // }
}

const watcher2 = (name:string):ClassDecorator => {
    return (target:Function) => {
        // target.prototype.getName = <T>(name:T):T=>{
        //     return name
        // }

        target.prototype.getNames = ()=>{
            return name
        }
    }
}

const log:ClassDecorator = (target:Function) =>{
    target.prototype.a = 213
}

const log2:PropertyDecorator = (...args) =>{
    console.log(2, args)
}

const log3:MethodDecorator = (...args) =>{
    console.log(3, args)
}

const log4:ParameterDecorator = (...args) =>{
    console.log(4, args)
}

@log
@watcher
@watcher2("xiao")
class A {
    @log2
    static names: string = 'li'
    @log2
    name:string
    @log2
    age:number
    constructor() {
    }
    @log3
    getAge(@log4 name:string, @log4 age:number) {
        return this.age
    }
    getAge2() {
        return this.name
    }
}

// let a = new A()

// console.log((<any>a).getName('1122'))
// console.log((<any>a).getNames())
// console.log((<any>a).a)

