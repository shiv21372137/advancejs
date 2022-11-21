// 2) type of function calling
//1) call by value 2) call by reference

// call by value(primitive data types)
function n(para) {
    console.log(para)
    
}
n(100);

// call by reference(non-primitive data types used)
function m (z) {
    console.log(z)}

    

let employe={
    name:"shivam",
    sirname:"raut",
    salary:"50k",
    idCardNo:1235,
}
m(employe)


// call back function

function name (call) {
    
call();
    
}


function shivam(){
    console.log("you are on right track")
}
function shivam2(){
    console.log("you are on wrong track dude")
}
function shivam3(){
    console.log("hie its an neutral ")
}
 name(shivam3);
 name(shivam2);
 name(shivam);

 //4) higher order function(when a function return another function)

function fun()
{
    return function(){console.log("this is an ex of higher order function")}
}
let returnfun=fun();
(fun)


//5 iife(immediate invoked function)

(function fun2() {
    console.log("hey bro im iife")
    
}
())



(function fun3() {console.log("im an sec example of iife")
    
}())


//vi) rest parameter
// using rest parameter we can collect multiple values in a single variable


function fun4(...value)
{
    console.log(value)
}
fun4(88,32,"shivam",44)


function fun5(...value2)
{
    console.log(value2)
} fun5(45,"undefined","null","shivam")


//vii) spread operator
// we can use to split value array

function fun6(a,b,c,d){
console.log(a)
console.log(b)
console.log(c)
console.log(d)}
let array=[12,55,25,87]
fun6(array[0],array[1],array[2],array[3])

// using spread  another example

function fun7(u,v,w,x,y,z)
{
    console.log(u)
    console.log(v)
    console.log(w)
    console.log(x)
    console.log(y)
    console.log(z)
}
arr=[12,"shivam",24,"name",36,"sirname"]
fun7(...arr)