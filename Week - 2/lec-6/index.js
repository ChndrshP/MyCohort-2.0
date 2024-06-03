//arrow function

/*
function sum(a, b){
    return a + b;
}

const sum = (a, b) => {
    return a + b;
}

const ans = sum(2, 3);
console.log(ans);
*/

/* Problem Statement */ 

// given an array in ehich every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const arr = [1,2,3,4,5];
//transform
function transform(i){
    return i * 2;
}

const ans1 = arr.map(transform)
console.log(ans1);

//filter
function FilterLogic(n){
    if(n % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}
const ans2 = arr.filter(FilterLogic);
console.log(ans2);


//Filter with Arrow function
const ans3 = arr.filter((n) => {
    if(n % 3 == 0){
        return true;
    }
    else{
        return false;
    }
});


console.log(ans3);
