type bbb = string & number
let str = '122'

function err(msg:string):never{
    throw new Error(msg)
}
err('12')

interface A{
    type:'保安'
}
interface B{
    type:'草莓'
}
interface C{
    type:'菜菜'
}

type All = A|B|C
function type(val:All){
    switch (val.type){
        case "保安":
            break;
        case "草莓":
            break;
        case "菜菜":
            break;
        default:
            const check:never = val;
            break
    }
}

