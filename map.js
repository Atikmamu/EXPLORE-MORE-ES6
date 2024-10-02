// map ==> loops through each element of the array and do the 
//operation that you passed in the call back function and hold the 
//result from each operation in an array and finally returns you the array 


// map holo akta array ar prottak ta upadan ar opor jai and jai kaj ta and ja kaj ta dawa thake 
// prottek ta upadan ar jonno kora result takhe akta array ar moddhe rhake .. ar array ta return kora dei


// const doubled = [];
// for(const num of numbers){
    //     const double = num * 2;
    //     doubled.push(double)
    // }
    
    // console.log(doubled);
    
    
    
    const numbers = [3, 45, 65, 5, 57];
//map...> 
function doubleIt (num) {
    // console.log('num now', num)
    return num * 2;
}

const double2 = n => n * 2;

const result = numbers.map(doubleIt)
// console.log(result)

const output = numbers.map(double2)
// console.log(output);
const output2 = numbers.map(n => n * 2);



