// Add event listeners to all the buttons
document.querySelector('#btn1').addEventListener('click', btnClick.bind(null, '1'));
document.querySelector('#btn0').addEventListener('click', () => { btnClick('0')});
document.querySelector('#btnSum').addEventListener('click', () => { btnClick('+')});
document.querySelector('#btnSub').addEventListener('click', () => { btnClick('-')});
document.querySelector('#btnMul').addEventListener('click', () => { btnClick('*')});
document.querySelector('#btnDiv').addEventListener('click', () => { btnClick('/')});

document.querySelector('#btnClr').addEventListener('click', btnClrClick);
document.querySelector('#btnEql').addEventListener('click', btnEqlClick);

let expression = '';
let result = document.querySelector('#res');

function btnClick(exp) {
    expression += exp;
    result.innerHTML = expression;
}

function btnClrClick() {
    expression = '';
    result.innerHTML = expression;
}

function btnEqlClick() {
    convertReplaceCompute();
    result.innerHTML = expression;
}

function convertReplaceCompute() {
    let operands = expression.match(/\d+/g);
    let decimals = convertBinaryToDecimal(operands);

    for(let i=0; i<2; i++)
        expression = expression.replace(operands[i], decimals[i]);

    expression = eval(expression).toString(2);
}

function convertBinaryToDecimal(binary) {
    return [parseInt(binary[0], 2), parseInt(binary[1],2)];
}

