function isArmstrong(num) {
    let sum = 0;
    const digits = num.toString().split('');
    const power = digits.length;

    for (let digit of digits) {
        sum += Math.pow(parseInt(digit), power);
    }

    return sum === num;
}

const number = 153;

if (isArmstrong(number)) {
    console.log(number + " is an Armstrong number");
} else {
    console.log(number + " is NOT an Armstrong number");
}

