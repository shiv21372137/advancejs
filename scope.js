//scope
//lexical scope
 let a = 10
function fun() {
    let b = 20

    function fun2() {
        let c = 30

        function fun3() {
            let d = 40
            function fun4() {
                let e = 50
                console.log(a * b * c * d * e)
            }fun4()
        }fun3()
    }fun2()
}
fun();

let s;
function add(){
    s=20;
    console.log(s)
}
add();

console.log("function execution " + s );



function division (a)

{
return function(b)
{
return a/b
}
}

let store=division(6)(2)
console.log(store)

// curring

function emp(obj)
{
   return function(key){
    return obj[key]

   } 
}
 let empi={
    name:"shivam",
    age:24,
    edu:"engineer"
 }
 let hie=emp(empi)("edu")

console.log(hie)