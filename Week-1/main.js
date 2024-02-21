let firstname = "chndrsh"
let age = 20
let lastname = "Patel"

console.log("My name is " + firstname + " " + lastname + ". My age is "+ age)

let gender = "male"

if(gender == "male"){
    console.log("This person is male")
}else{
    console.log("This person is female")
}
let ans = 0
console.log("ans(before) = "+ans)

for(let i = 0; i <= 10000; i++){
    ans = ans + i
}
console.log("ans(after) = "+ans)


const user1 = {
    firstname: "Chandresh",
    age: "20"
}

console.log(user1.firstname)
console.log(user1.age)

let sum = 0
for(let i = 0; i < 10000000; i++){
    sum = sum  + i
}
console.log(sum)


function Calci(a,b,Calcifinal){
    const ans = Calcifinal(a,b)
    return ans;
}

function sum(a,b){
    return a+b;
}
const value = Calci(1,2,sum)
console.log(value)

function greet(){
    console.log("Hello world")
}

setInterval(greet, 1*1000)