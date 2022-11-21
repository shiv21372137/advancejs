/*11. A cloth showroom has announced the following festival discounts on 
the purchase of items, based on the total cost of the items purchased */

function main() {

    let tc, discount, ap;
    console.log("enter the total cost");
    tc = prompt("enter cost");
    if (tc <= 2000) {
        discount = (5 / 100) * tc
    }
    else if (tc => 2001 && tc <= 5000) {


        discount = (25 / 100) * tc
    }
    else if (tc => 5001 && tc <= 10000) {
        discount = (35 / 100) * tc
    }
    else {
        d = (50 / 100) * tc
    }

    ap = tc - discount
    document.write("amount payable" + ap)
}
main();

/*12.An electronics shop has announced the following seasonal discounts on 
the purchase of certain items*/

/*let name,adress,amount
function purchase() {

name=prompt("enter your name")
adress=("enter your adress")
amount=(number("enter amount"))
type=prompt["laptop","destop"]

    if(type==[0]&& amount>0 && amount<2500){

    }
}
purchase();*/


/*14.Write a program to input an integer and find its factorial. Factorial of a 
number is the product of all natural numbers till that number. For 
example, factorial of 5 is 120 since 1×2×3×4×5=120

*/

function fact() {
    let i, k, f = 1
    k = 6
    //n=prompt("enter an integer")
    for (i = 1; i <= k; i++)

        f = f * i;
    console.log("factorial:" + f)

}
fact()


//15.Write a program to input an integer and check whether it is a prime 
//number or not

function prime() {

    let i, n, c = 0;
    console.log("enter an integer")

    for (i = 1; i <= n; i++) {
        if (n % i == 0)
            c++

    }
    if (c == 2)
        console.log("prime Number")
    else
        console.log("not a prime number")

}
prime();


//16.Write a program to find the sum of all 3-digit even natural numbers.

function addiction() {
    let i, s = 0;
    for (i = 100; i <= 998; i += 2) {
        s += i;
        console.log("addiction" + s)
    }
}
addiction()

//17.Write a program to find the sum of all 3 digit odd natural numbers, 
//which are multiples of 5.

function mult() {
    let m, n = 0
    for (m = 101; m <= 999; m += 2) {
        if (m % 5 == 0)
            n += m;
        console.log("mult" + n)
    }


} mult();

/*18.Write a program to input an integer and find its factorial. Factorial of a 
number is the product of all natural numbers till that number. For 
example factorial of 5 is 120 since 1×2×3×4×5=120.*/

function fact() {
    let i, n, f = 1
    n = 5
    //n=prompt("enter an integer")
    for (i = 1; i <= n; i++)

        f = f * i;
    console.log("factorial:" + f)

}
fact()



number = 19
//number=prompt(" enter a number")
if (number == 1) {
    console.log("is not a prime no")
} else if (number < 1) {
    console.log("is not a prime number")

}
else {
    for (i = 2; i < number; i++) {
        if (number % i == 0) {
            result = "number is not a primr number"
            break;
        }
        else {
            result = "number is prime number"
        }

    }

}
console.log(result)










/* que 19)Write a program to find the sum of 1st 10 numbers of Lucas series i.e. 
2,1,3,4,7,11,18,…. Lucas series is such a series which starting from 2 and 
1, and subsequent numbers are the sum of the previous two numbers. */



    function lucas(n)
    {
   
        
        if (n == 0)
            return 2;
        if (n == 1)
            return 1;
   
        
        return lucas(n - 1) +
               lucas(n - 2);
    }
 

 
        let n = 10;
        console.log(lucas(n));