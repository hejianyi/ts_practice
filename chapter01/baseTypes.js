// the ts base types 
// number string boolean
var a = 1;
var b = 'a';
var c = false;
// the more types is array tuple enum
// array - must fixed type array, can be any
// first show 
var a1 = [1, 2, 3];
var a2 = ['a', 'b', 'c'];
var a4 = [1, 2, 'x'];
// second show Array Genericity must assign the element type
var a3 = [1, 2, '3'];
// tuple is the templete to give value about every element, every value must relative with it, can not more or less
var t1;
t1 = [1, 'a', false];
// enum is the object, has index and string key equal each other,the objs index get string, the objs string get index
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var e1 = Color[0];
var e2 = Color.Red;
console.log(e1);
console.log(e2);
// the type of any,not validate in compile, can give unknown type, every type , it can call every method in other type proptotype methods, how interesting
var notSure = 1;
// notSure = 'x'
// notSure = [1 , 'w']
// notSure = {a:1}
notSure.push(a1);
// void when a function dont rentun any thing, it can give a type with void, if you give a variable void, just can give the variables value is undefined or null
function abc() {
}
var v1 = undefined;
// can use union type
var v2 = undefined;
v2 = '3';
// the type of never, never is always throw Error or never end function or variable
function error(message) {
    throw new Error(message);
}
function infiniteLoop() {
    while (true) {
    }
}
var n1;
create({});
// the type of assert,
var as1 = 'avc';
var an1 = as1.toFixed(2);
var an2 = as1.length;
