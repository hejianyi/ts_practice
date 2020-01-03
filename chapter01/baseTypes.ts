// the ts base types 
// number string boolean
let a:number = 1
let b:string = 'a'
let c:boolean = false

// the more types is array tuple enum
// array - must fixed type array, can be any
// first show 
let a1: number[] = [1,2,3]
let a2: string[] = ['a', 'b', 'c']
let a4: any[] = [1,2,'x']
// second show Array Genericity must assign the element type
let a3: Array<any> = [1,2, '3']

// tuple is the templete to give value about every element, every value must relative with it, can not more or less
let t1: [number, string, boolean]
t1 = [1, 'a', false]

// enum is the object, has index and string key equal each other,the objs index get string, the objs string get index
enum Color {Red, Yellow, Green}
let e1: string = Color[0]
let e2: number = Color.Red
console.log(e1)
console.log(e2)

// the type of any,not validate in compile, can give unknown type, every type , it can call every method in other type proptotype methods, how interesting
let notSure: any = 1
// notSure = 'x'
// notSure = [1 , 'w']
// notSure = {a:1}
notSure.push(a1)

// void when a function dont rentun any thing, it can give a type with void, if you give a variable void, just can give the variables value is undefined or null
function abc(): void {

}

let v1: void = undefined
// can use union type
let v2: void | string = undefined
v2 = '3'

// the type of never, never is always throw Error or never end function or variable
function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while(true) {

  }
}

let n1: never

// the type of Object，object means not the original(number, string, boolean, symbol, undefined, null)
declare function create(o: object | null): void
create({})
let o1: { x:string, y:number, z:boolean }

o1 = {x:'1', y:3, z:false}

// the type of assert,you know than computer,so dont validate compile, has two methods, first is (<type>variable),second is (variable as type), in typescript asyncx use it, just as allow
let as1: any = 'avc'
let an1: string = (<number>as1).toFixed(2)
let an2: number = (as1 as string).length