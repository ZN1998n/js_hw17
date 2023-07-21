
function arabic(num) { // easy
    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }   

    let prev = ""
    let result = ""

    for(let i = 0; i < num.length; i++) {
        let curr = map[num[i]]

        if(curr > prev) {
            result += curr
        } else {
            result -= curr
        }

        prev = curr
    }

    return result
}

console.log(arabic(5))