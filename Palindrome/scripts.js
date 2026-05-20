const user_input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")
}
function check(){
    const value = user_input.value
    const reversed = reverseString(value)
    if(reversed === value){
        alert(`"${value}" is a Palindrome`)
    } else{
        alert(`"${value}" is not a Palindrome`)
    }
    user_input.value = ""
}