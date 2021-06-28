// let age = 25;
// const checkAge =age => 
// age >= 16? 'you can drive' 
// : 'If you are under 16, you cannot do much outside of going to school' ;

// const checkAge1 =age => 
// age>= 62 ? 
// ' you collect social security '
// : age >=35? 
// 'you can run to president'
// : 'you need keep working  ';

// const checkAge2 = age => 
// age>=18 && age>=21 ||age>= 25 ? 
// 'you can vote, drink alcohol and rent a car'
// :false

// const age = 18
// switch(age){
//     case 16:
//         console.log('If you are 16 or older, you can drive');
//         break;
//     case 18 :
//         console.log('If you 18 or older, you can vote')  
//         break ; 
//         case 21 :
//         console.log('If you are 21 or older, you can drink alcohol')  
//         break ;
//         case 25 :
//         console.log('If you are 25 or older, you can rent a car')  
//         break ;
//         case 35 :
//         console.log('If you are 35 or older, you can run for president')  
//         break ;
//         case 62 :
//         console.log('If you are 62 or older, you collect social security ')  
//         break ;
//         default:
//             console.log('If you are under 16, you cannot do much outside of going to school')
// }

// for (let i=0; i <=15; i ++) {
//  i%3? console.log(i,'fizz')
//  :i%5? console.log(i,'buzz')
//  :i%3 && i%5 ? console.log(i,'fizzbuzz')
//  :console.log(i)

// }

// let countad = 0 
//  while(countad <15){
//    countad++
//   switch(countad){
//       case countad%3:
//           console.log(countad,'fizz');
//           break;
//       case  countad%5 :
//           console.log(countad,'buzz');
//           break;
//           case countad%3 && countad%5 :
//               console.log('flizzbuzz');
//               break;
          
//           default:
//               console.log(countad)

//   }
 
  
// // }
// let numsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 2]


// Nested FOR Loop

// const twoSum = (arr, target) => {
//   for (i=0;i<arr.length;i++) {
//     for (j=i+1;j<arr.length;j++) {
//       if (arr[i] + arr[j] === target) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// console.log(twoSum(numsArr, 9));

// FOR loop, .indexOf

// const twoSum2 = (arr, target) => {
//   for (i=0;i<arr.length;i++) {
//     let temp = arr.indexOf(target-arr[i])
//     if (temp !== -1) {
//       return [arr[i], arr[temp]];a
//     }
//   }
//   return "no matches found";
// }

// console.log(twoSum2(numsArr, 9))

// .forEach & .includes

// const twoSum3 = (arr, target) => {
//   arr.forEach((num, index) => {
//     let difference = target - num;
//     let temp = arr.includes(difference)
//     if (temp) {
//       console.log(num, difference)
//       return difference;
//     }
//   })
//   // return [];
// }

// console.log(twoSum3(numsArr, 9))

// console.log('hello')

// const dnaString = (str) => {
// const  change = str.split('')
// return change;
  
  
  



// }

// console.log(dnaString('ATCG'))


// db.students.insert({
//   "name": "pepe",
//   "address" : {
//       "street" : "207 V Street NW",
//       "zipcode" : 20101
//   },
//   "cuisine": "italian",
//   "name": "nik",
//   "address" : {
//       "street" : "207 V Street NW",
//       "zipcode" : 20103
//   },
//   "cuisine": "american",
//   "name": "bend",
//   "address" : {
//       "street" : "207 V Street NW",
//       "zipcode" : 20105
//   },
//   "cuisine": "cuban",
//   "name": "medad",
//   "address" : {
//       "street" : "207 V Street NW",
//       "zipcode" : 20101
//   },
//   "cuisine": "tropical"


// })


// let s = "LLRR??"
// let left = 0
// let right =0
// const all = (str) => {
//   for(let i = 0; i < str.length; i++){
//   if
//   }
// }
 
// console.log(all(s))

//   const palindrome= (str) => {
//   if(!str)return 'should be a string'
//   const re = str.split('')
//   .filter(letter => letter===letter.toLowerCase())
//     .reverse()
//     .join('')
  
//   return re 
// }

// console.log(palindrome('raWceXcarB'))


// const valite = (str) => {
//  const contain = str.split('').filter(letter => letter.includes(letter.toLowerCase()) )
//  return contain
// }
// console.log(valite("4Ulshio"))

// const addUp = (n) =>{
//     let total = 0;
//     for (let i = 0; i <=n ; i++){
//  total += i
//     }

//     return total;
// }

const upt2 = n => n *(n + 1) /2

console.log(upt2(6))