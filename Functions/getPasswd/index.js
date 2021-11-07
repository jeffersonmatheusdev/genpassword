function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPassword(lengthSize, uppercase, lowercase, number, symbol) {
    let password = '';
    const typesCount = uppercase + lowercase + number + symbol;
    const typesArr = [{
        type: 'lower',
        func: getRandomLower,
        checked: lowercase
    }, {
        type: 'upper',
        func: getRandomUpper,
        checked: uppercase
    }, {
        type: 'number',
        func: getRandomNumber,
        checked: number
    }, {
        type: 'symbol',
        func: getRandomSymbol,
        checked: symbol
    }];

    if (typesCount === 0) {
        return '';
    }

    for (let i = 0; i < lengthSize; i++) {
        const types = typesArr.filter(item => item.checked);
        const type = types[Math.floor(Math.random() * types.length)];
        password += type.func();
    }

    const finalPassword = password.split('').sort(() => Math.random() - 0.5).join('');

    return finalPassword;
}

export default getPassword;