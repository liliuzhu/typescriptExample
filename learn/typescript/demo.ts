let arr3: any[] = [1, '1']
// 数组泛型<T> T泛型变量
let arr4:Array<number> = [1,2,3]

let s2 = function <T> (x: T, y:T): T{
    return x
}
 s2<number>(2,3)
