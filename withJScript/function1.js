let num1 = 5;
let num2 = 3;

function calProduct(num1, num2) {
    let answer = num1 * num2;
    console.log("Product:", answer);
}
calProduct(num1, num2);

function calDive(num1, num2) {
    let answerDiv = num1 / num2;
    calProduct(num1, num2);  // also show product
    console.log("Division:", answerDiv);
}
calDive(num1, num2);

function rem(num1, num2) {
    let remainder = num1 % num2;
    console.log("Remainder:", remainder);
}
rem(num1, num2);

function calSum(num1, num2) {
    let sum = num1 + num2;
    console.log("Sum:", sum);
}
calSum(num1, num2);

function calSub(num1, num2) {
    let sub = num1 - num2;
    console.log("Subtraction:", sub);
}
calSub(num1, num2);

function square(num1) {
    let squa = num1 ** 2;
    console.log("Square:", squa);
}
square(num1);
