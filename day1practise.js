
function fun(a, b) {
    return a * b
}
let m = fun(7, 9)
console.log(m)

// by expression

let s = function fun2() {
    console.log("hi")
}
s();


// anonymous function

let k = function () {
    console.log("hie i am anonymous function")
}
k()


// arrow function
let b = () => {
    console.log("hie iam arroy function")
}
b()


// arrow function
let z = (t, r) => {
    k = t / r
    console.log(k)
}
z(9, 3)


// call back function

function sub(c,d){console.log(c-d)

}
function mult(c,d){
    console.log(c*d)
}
function name(c,d) {console.log(c/d);
    
}
function a(c, d,funn) {
    addiction(c, d)
    funn(c,d)
}

function addiction(k, l) {
    console.log("addiction", k + l)
}
a(9, 8,addiction)
a(8, 5,mult)
a(9,5,sub)