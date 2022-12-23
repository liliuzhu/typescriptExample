let s:symbol = Symbol('二蛋')
let num:symbol = Symbol('二蛋')
console.log(s, num)
let obj = {
    [num]: 'value',
    [s]: '草莓',
    name: 'xx',
    sex:'男'
}


for(let key in obj){
    console.log(key)
}
console.log(Object.keys(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(JSON.stringify(obj))

console.log(Object.getOwnPropertySymbols(obj))
console.log(Reflect.ownKeys(obj))



let arr: Array<number> = [4,5,6]
let arr2:number[] = arr

let it:Iterator<number> = arr[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())


type mapKeys = string | number
let set:Set<Number> = new Set([1,2,3])
set.add(5)
console.log(set)
let map:Map<mapKeys, mapKeys> = new Map()
map.set('1', '王爷')
map.set('2', '皇上')

function gen(erg:any){
    let it:Iterator<any> = erg[Symbol.iterator]()
    let next:any = { done: false }
    while (!next.done){
        next = it.next()
        if(!next.done){
            console.log(next)
        }
    }
}
let obj2 = {
    name: 1
}
// gen(obj2)

// 生成器

for(let item of arr){
    console.log(item)
}
