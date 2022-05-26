 function factorial(n) {
     const fact = 1; 
    if(n==0) return fact;
    for(let i=1; i<=n; i++) {
        fact*=i;
    }
    return fact;
}
const number=prompt("Введите число:");
const result=factorial(number);
alert("Факториал числа " + number +" равен " +result);