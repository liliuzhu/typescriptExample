// 1.类装饰器ClassDecorator target 构造函数
// 2. 属性装饰器 PropertyDecorator
// 3. 参数装饰器 ParameterDecorator
// 4. 方法装饰器 MethodDecorator
import axios from "axios";
import 'reflect-metadata'

const Base:ClassDecorator = (target)=>{
   console.log('Base')
   target.prototype.xiaoman = '小满'
   target.prototype.fn = function (){
      console.log('我是憨憨', this.name, this.xiaoman)
   }
}

const Base2 = (name: string):ClassDecorator => { // 装饰器工厂
   console.log(1, 'Base2')
   const fn: ClassDecorator = (target)=>{
      console.log(2, 'Base2')
      target.prototype.xiaoman = name
      target.prototype.fn = function(){
         console.log('我是憨憨', this.name, this.xiaoman)
      }
   }
   return fn
}

const Get = (url:string):MethodDecorator =>{
   const fn: MethodDecorator = (target,propertyKey,descriptor:PropertyDescriptor)=>{
      console.log('@Get',target,propertyKey,descriptor)
      const key = Reflect.getMetadata('result-key', target)
      axios.get(url).then((res)=>{
         descriptor.value(key?res.data[key]:res.data)
         // target[propertyKeym](key?res.data[key]:res.data)
      })
   }
   return fn
}

const Result = ():ParameterDecorator =>{
   const fn: ParameterDecorator = (target,propertyKey,parameterIndex)=>{
      console.log('@Result', target,propertyKey,parameterIndex)
      Reflect.defineMetadata('result-key','result', target)
   }
   return fn
}

const Name:PropertyDecorator = (target,propertyKey) =>{
   console.log('@Name', target, propertyKey)
}

@Base2('哈哈')
@Base
class Http{
   @Name
   name:string
   constructor(name) {
      this.name = name
   }
   @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
   getList(@Result() date:any){
      // console.log(date)
   }
}

const http = new  Http('李')
// console.log((<any>http).fn()) // console.log((http as any).fn())
