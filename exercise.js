// Task 2

function areArraysSame(a, b) {
    if (a.length !== b.length) {
        alert("Arrays have different length")
        return false
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            console.log(a)
            console.log(b)
            alert("Arrays are different")
            return false
        }
    }
    alert("Arrays " + a + " and " + b + " are the same")
    console.log(a)
    console.log(b)
    return true

}

console.log(areArraysSame([1, 2, 3], [4, 5, 6]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3]))
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]))