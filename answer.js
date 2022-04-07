//1
function factor(num) {
    let result = 1
    for (let i = num; i > 0; i--) {
        result = i * result
    }
    console.log(result)
}

factor(4)

//2
function maxPrint(num1, num2) {
    console.log(num1 > num2 ? num1 : num2)
}

maxPrint(9, 5)

//3
function backNumber(num) {
    let result = 0
    for (let i = num; i > 0; i--) {
        result += i
    }
    console.log(result)
}

backNumber(4)

//4
function samavar(num) {
    if (num > 100) {
        console.log('Steam')
    } else if (num > 0) {
        console.log('Water')
    } else {
        console.log('Ice')
    }
}

samavar(102)

//5
function primeNum(num) {
    let check = 0
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            check = 1
        }
    }
    console.log(check ? 'NotPrime' : 'Prime')
}

primeNum(11)

//6
function printNumString(str) {
    console.log(str.length)
}

printNumString('alireza')

//7

function printNumBetween(num1, num2) {
    const max = Math.max(num1, num2)
    const min = Math.min(num1, num2)
    for (let i = min + 1; i < max; i++) {
        console.log(i)
    }
}

printNumBetween(2, 5)

//8

function knowNumber(num) {
    console.log(num % 2 ? 'Fard' : 'Zoj')
}

knowNumber(3)

//9

function sumNumber(num) {
    const number = String(num)
    let result = 0
    for (let i = 0; i < number.length; i++) {
        result += Number(number[i])
    }
    console.log(result)
}

sumNumber(789)

//10

function zojUnder(num) {
    let result = []
    for (let i = 2; i < num; i++) {
        if (i % 2 === 0) {
            result.push(i)
        }
    }
    console.log(result)
}

zojUnder(23)

//11

function reverseStr(str) {
    let result = ''
    for (let i = str.length - 1; 0 <= i; i--) {
        result += str[i]
    }
    console.log(result)
}

reverseStr('ali')

//12

function primeBetween(num1, num2) {
    let check = 0
    let result = []
    for (let i = num1 + 1; i < num2; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                check = 1
            }
        }
        if (check === 0){
            result.push(i)
        }
        check = 0
    }
    console.log(result)
}

primeBetween(3, 12)

//13

function copy(num) {
    let result = ''
    const number = String(num)
    for (let i = 0; i < 3; i++){
        result += `${number[i]}: `
        for (let j = 0; j < number[i] ;j++){
            result += `${number[i]}`
        }
        result += `\n`
    }
    console.log(result)
}

copy(345)

//14

function powMaster(num) {
    let result = 2
    while (result < num){
        result = result*2
    }
    console.log(result)
}

powMaster(23)

//15

function star(num){
    let result = ''
    for (let i = 0; num > i; i++){
        for (let j = 0; num > j ;j++){
            result += '*'
        }
        result +=`\n`
    }
    console.log(result)
}

star(4)




