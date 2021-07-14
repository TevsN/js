const number1 = +prompt('number 1')
const number2 = +prompt('number 2')
const calc = prompt('Enter operator')

switch(calc) {
    case '+': {
        const result = number1 + number2;
        alert(result);
        break;
    }
    case '-': {
        const result = number1 - number2;
        alert(result);
        break;
    }
    case '*': {
        const result = number1 * number2;
        alert(result);
        break;
    }
    case '/': {
        const result = number1 / number2;
        alert(result);
        break;
    }
    default: {
        alert('Unknow operator');
    }
}

