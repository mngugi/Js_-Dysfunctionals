    let num1 = 5;

    let num2 = 3;

    function calProduct(num1 , num2) {
        let answer = num1 * num2;
        
        console.log(answer);
        
    }

    calProduct(num1, num2);

    function calDive(num2, num1) {
        let answerDiv = num1 / num2;

        calProduct(num1, num2)
        
        console.log(answerDiv);
    }

    calDive(num2, num1);

    function rem(num1, num2){
        let remainder = num1 % num2;
        console.log(remainder);
    }

    rem(num1, num2);

    function calSum(num1, num2) {
        let sum = num1 + num2;
        console.log(sum);
    }   