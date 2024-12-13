// just for simple cases for demo propose
const f1 = (num)=> {
    console.log("--------testing " + num + " --------")
    if (num <= 0) return 0; // ignore special cases for now
    if (num <= 10) return num; // ignore special cases for now

    let n = num
    let inOrder = true
    let d1 = 0
    let d2 = n%10
    n = Math.floor(num/10)

    // check if the digits in order or not
    do {
        d1 = n%10
        n = Math.floor(n/10)
        if (d2 < d1) { 
            inOrder = false
            break
        } else {
            d2 = d1
        }
            
    } while(n > 0)

    // 358 -> 358
    if (inOrder) return num

    // if not in order, convert 538 -> 489
    n = Math.floor(num/10)
    let answer = 9
    let firstDigitFactor = 10

    while (n > 10) {
        answer += (answer-1)*10 
        n = Math.floor(n/10)
        firstDigitFactor *= 10
    }

    return (answer + (n-1)*firstDigitFactor)
}





let t1 = f1(358);
console.log(t1)

t1 = f1(385);
console.log(t1)

t1 = f1(538);
console.log(t1)


t1 = f1(583);
console.log(t1)

t1 = f1(835);
console.log(t1)

t1 = f1(853);
console.log(t1)
