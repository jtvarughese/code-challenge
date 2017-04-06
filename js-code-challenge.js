// Write a function named stringy that takes a size and returns a string of alternating '1s' and '0s'.

var stringLength = prompt("Type a number that will return the length of the number in 1s and 0s")

function stringy(stringLength) {
  var string = ""
  for(var i = 0; i < stringLength; i++) {
    string += i%2 === 0? "1" : "0"
  }
  return string
}

console.log(stringy(stringLength))

// Given a non-negative integer, return an array containing a list of independent digits in reverse order.

var number = prompt("Enter a multi-digit number and it will be returned in reverse in an array")

function reverseIt (number) {
   return number.toString().split("").map(Number).reverse()
}

console.log(reverseIt(number))


//Build a function to illustrate how to get the Fibonacci sequence to output.

var fibNumber = prompt("Enter a number and the fibonacci number will be returned")

function fibonacci(fibNumber) {
    if(fibNumber <= 1) {
        return fibNumber
    } else {
        return fibonacci(fibNumber - 1) + fibonacci(fibNumber - 2)
    }
}

console.log(fibonacci(fibNumber))


// Write a function called checkCoupon to verify that a coupon is valid and not expire. If the coupon is good, return true. Otherwise, return false. A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"...Using current date instead

// var enteredCode = prompt("Enter the coupon code")
var currentDate = new Date()


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
var currDate=new Date(currentDate)
var expDate=new Date(expirationDate)
  if(enteredCode === correctCode && currDate<expDate){return true}else{return false}
}
console.log(checkCoupon(12, 12, currentDate, "April 5 2017"))
