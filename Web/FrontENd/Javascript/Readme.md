alert('hello world')\
other way to use console https://developer.mozilla.org/en-US/docs/Web/API/Console/
let can change data const cannot change\
data type string number boolean null undefined symbol(es6)\
variable example\
const name = 'john'\
const age = 30;\
const rating = 4.5;\
const isCool = true;\
const x = null;\
const y = undefined;\
let z;\
const number = new Array(1,2,3,4,5) or [1,2,3,4,5,'dd', true] \
array tip .push to last element .unshift to first element .pop delete last element \
.indexOf to find index \
cantest with console.log(typeof variable)\
Template String\
console.log(`${variable}`)\
\
object\
const person = {\
	firstname = \
	age : \
	hooby :\
	address : {\
	city:\
	town:\
}\
}\
const {firstname lastname, address: {city}} = person Now yout can use first name lastname;\
your can turn opject to JSON with stringitfy(variable)\
\
constructor function\
function Person(a, b,c ){\
	this.a = a;\
	this.b = b;\
	this.c = c;\
	this.plue = function(){\
	return a + b\
}\
}\
const person1 = new Person(1, 2, ,3)\
you can do a \
person.prototype.plus = function(){\
	return this.a + this.b\
}\

//class \
class Person{
	constructor(a, b, c){\
	this.a = a;\
	this.b = b;\
	this.c = c;\
}\
plus(){\
	return this.a + this.b\
}\
}\