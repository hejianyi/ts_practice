// function printLabel(labelledObj: {label: string}) {
//   console.log(labelledObj.label)
// }

// let myObj = {label: 'x', q:10}
// printLabel(myObj)

/** begin learn interface */ 
// interface labelledValue {
//   label: string;
// }

// function printLabel(labelledObj: labelledValue) {
//   console.log(labelledObj.label)
// }

// let myObj = {size:10, label:'x'}
// printLabel(myObj)

/** interface prop choose able, use ? after the prop name */
interface SquareConfig {
  color?: string;
  width?: number;
  // [propName: string]: any;
}

function createSquare(config: SquareConfig): {color: string; area:number} {
  let newSquare = {color: "white", area: 100}
  if(config.color) {
    newSquare.color = config.color
  }

  if(config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

// around and void to valid not declare prop
// let mySquare = createSquare({colour:'black'} as SquareConfig)
let sqObj1 = {colour:'black'}
// let mySquare = createSquare(sqObj1)

/** the porp just readonly,  use readonly before the prop name */
interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = {x:1, y:2}
// p1.x = 5
// ReadonlyArray
let ar1: any[] = [1, '2', false]
let ar2: ReadonlyArray<number> = ar1
let vr1 = ar2[1]
let ar3 = ar2 as number[]

/** interface to describe the type of function */

