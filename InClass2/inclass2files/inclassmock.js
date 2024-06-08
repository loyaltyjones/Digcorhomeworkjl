// Check if a given expression has properly opening and closing parentheses. For example:
// console.log(isProper("{[()]}"));  // Output: true
// 10:23
// For example: isProper("This is a correct array, days[]") should return true
// 10:23
// isProper("This is an incorrect object {") Should return false

let object = object.includes({})

console.log(object)

function isProper(check){
// result = check.includes("[]")
if(check.includes("[]") === true){
console.log("this is an array")
}else{
    console.log("this not an array")
}
console.log(check)
}

// isProper({})
