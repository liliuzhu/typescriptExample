function num1(a:number, b:number):number[]{
    return [a,b]
}
num1(1,2)
function str23(a:string, b:string):Array<string>{
    return [a,b]
}
str23('','')
function add<A>(a:A,b:A):Array<A>{
    return [a,b]
}
add<number>(1,2)
add<string>('','')

function sub<T,U>(a:T,b:U):Array<T|U>{
    let arr:Array<T|U> = [a,b]
    return arr
}

console.log(sub<string,number>('1', 2))

interface  Len{
    length: number
}
function getLength<T extends Len>(arg:T){
    return arg.length
}

getLength([1,2])
getLength('122')

function prop<T, K extends keyof T>(obj:T,key:K){
    return obj[key]
}

let o = { a: 1, b:2, c:3 }
prop(o, 'a')
prop(o, 'c')

class Sub<T>{
    attr:T[]= []
    attr1:Array<T> = []
    add(a:T):T[]{
        return [a]
    }
}

let asdf = new Sub<number>()
asdf.attr = [1,2,3]
asdf.add(21)

let asdfw = new Sub<string>()
asdfw.attr1 = ['1','2','3']
asdfw.add('21')
