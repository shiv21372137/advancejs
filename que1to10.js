// que 1)What is the value of y after evaluating the expression given below?
// y+=++y + y-- + --y; when let y=8 */

let y = 8
y += ++y + y-- + --y
console.log(y)


/*que 2) Give the output of the following expression:
o a+=a++ + ++a + --a + a--; when a=7*/
let a = 7
a += a++ +
    (++a + --a + a)
console.log(a)


/*que 3) If let y=10 then find:
o z=(++y * (y++ +5));*/
let x = 10
z = (++x * (x++ + 5))
console.log(z)


// que 4)What are the values of x and y when the following statements are
//executed?
let l = 63; q = 36
let m = (l < q) ? true : false;
let k = (l > q) ? l : q;
console.log(m);
console.log(k);


// que 5)Name the operators listed below:
//< =comparisional operator  ++ uniary operator(incriment)
 // && condictional operator


//que 6) Write a program to average of 36, 45 and 53 using variables
let d, b, c, average
function avg() {
    d = 36;
    b = 45;
    c = 53;
    average = (d + b + c) / 3;
    console.log("average:-" + average)
}
avg();

//que )7. Write a program to input the Principal, Rate and Time and calculate the 
//Simple Interest.
let p, n, r, si
function simpleItrest() {
    p = prompt("enter principle")
    n = prompt("enter the duration")
    r = prompt("enter the rate")
    si = (p * n * r) / 100
    document.write("simpleintrest:-" + si)
}
simpleItrest()

/*que 8). State the difference between = =and ===
== :- allows implict converction
like it will convert string to Number
===:- it does not allow implict converction
both are use to check equality */

// 9. Convert the following if else if construct into switch case
let = 2
if (let == 1) { console.log("good") }
else if (let == 2) { console.log("better") }
else if (let == 3) { console.log("best") }
else {
    console.log("invalid")
}



switch (let = 3) {
    case 1: console.log("good")

        break;
    case 2: console.log("better")
        break
    case 3: console.log("best")
        break
    default: console.log("invalid")
        break;
}

/*10.Write a program to accept a mark obtained by a student in computer 
science and print the grades accordingly:*/

function main() {
    let scimark = 5;

    if (scimark >= 90) {
        console.log("grade=a")

    }
    else if (scimark >= 70 && scimark < 90) { console.log("grade=b") }

    else if (scimark >= 50 && scimark < 70) { console.log("grade=c") }
    else { console.log("grade d") }
}
main(); 

