// import { B } from './index2'
// namespace A{
//     export namespace C {
//         export const a = 5
//     }
// }
//
// namespace A{
//     export const b = 2
// }
// import AAA = A.C
// console.log(A, AAA.a, B)



///<reference path="./index2.ts" />
///<reference path="./index3.ts" />

namespace A {
    export namespace C {
        export const a = 1
    }
}

console.log(A)
