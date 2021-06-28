// function counterUpAndDow (n){
// console.log('Going Up')
// for(let i = 0 ; i < n ; i++){
//     console.log(i)
// }
// console.log('Going Down')
// for(let j = n -1 ; j >= 0 ; j--){
//   console.log(j)
// }



// }
// counterUpAndDow(10)

// function printAllPairs (n){
// for (let i = 0 ; i < n ; i++){
//     for (let j = 0 ; j < n ; j++){
//         console.log(i,j)
//     }
// }
// }
// printAllPairs(2)

function logAtLeast (n) {
for (let i = 1 ; i <= Math.max(5,n) ; i++){
    console.log(i)
}
}

function logAtMost (n) {
    for (let i = 1 ; i <= Math.min(5,n) ; i++){
        console.log(i)
    }
    }
    

//     function sum(arr){
//         let total = 0 ;
//         for(let i= 0 ; i < arr.length; i++){
//          total += arr[i]
//         }
//         return total;
//     }

// console.log(sum([2,3,4,5,5]))

function double (arr){
const newArr = [];
 for(let i = 0 ; i <arr.length ; i++){
   newArr.push(2 * arr[i])
 }
 return newArr
}
console.log(double([2,3,4,5]))