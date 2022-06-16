const OPERATOR = prompt("Enter operator: +,-,/,*");
const OPERANDA = Number(prompt("Enter operand A"));
const OPERANDB = Number(prompt("Enter operand B"));
let result;

if (OPERATOR=="+") {
    result = OPERANDA + OPERANDB;
} else if (OPERATOR=="-") {
result = OPERANDA - OPERANDB;
} else if (OPERATOR=="/") {
    result = OPERANDA / OPERANDB;
} else if(OPERATOR=="*") {
    result = OPERANDA * OPERANDB;
}


