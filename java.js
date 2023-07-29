
// // DOUBLE VALUES
// function double(arr){
//     const arra = [];
//     for (let loop of arr){
//         arra.push(loop * 2);
//     }
//     return arra;
// }

// // ONLY EVEN VALUES
// function even(arrTwo){
//     const numArr = [];
//     for (let itera of arrTwo){
//         if (itera % 2 === 0){
//             numArr.push(itera);
//         }
//     }
//     return numArr;
// }

// // SHOW FIRST AND LAST
// function firstAndLast(str){
//     loopedArr = [];
//     if (str.length > 0){
//         loopedArr.push(str[0]);
//     }
//     if (str.length > 1){
//         loopedArr.push(str[str.length - 1]);
//     }
//     return loopedArr;
// }

// // VOWEL COUNT
// function vowelCount(str){
//     const vowels = ["a", "e", "i", "o", "u"];
//     let counter = 0;

//     for (let vowelChecker of str.toLowerCase()){
//         if (vowels.includes(vowelChecker)){
//             counter++;
//         }
//     }
//     return counter;
// }

// ADD KEY AND VALUE

// function addKeyAndValue(arr, key, value){
//     for (let val of arr){
//         val[key] = value;
//     }
//     return arr;
// }

// VAL TIMES INDEX MAP

// function valTimesIndex(arr) {
//     return arr.map((value, index) => value * index);
// }

// DOUBLE VALUES WITH MAP
// const numbers = [1, 2, 3, 4, 5];

// let newNumbers = numbers.map(function(child){
//     return child * 2;
// });
// console.log(newNumbers);

// EXTRACT KEY MAP

// const extractThis = [
//     {name: "Christian"},
//     {name: "Chris"},
//     {name: "Chr"}
// ]

// let extraction = extractThis.map(function(item){
//     return `${item.name}`
// })
// console.log(extraction);

// FULL EXTRACT MAP

// const fullExtractThis = [
//     {firstName: "Dominique", lastName: "Jones"},
//     {firstName: "Noah", lastName: "McCray"},
//     {firstName: "Pilar", lastName: "Gamiz"}
// ]

// let fullExtraction = fullExtractThis.map(function(elements){
//     return `${elements.firstName} ${elements.lastName}`
// })
// console.log(fullExtraction)


// REMOVE VOWELS WITH FILTER
// const vowels = ['a', 'e', 'i', 'o', 'u']
// function isVowel(char){
//     return vowels.includes(char.toLowerCase());
// }
// function removeVowels(str){
//     let tempStr = str.split('').filter(char => !isVowel(char)).join('');
//     return tempStr;
// }

// DOUBLE ODD NUMBERS WITH FILTER AND MAP
// function doubleOddNumbers(arr) {
//     const doubledOddNumbers = arr
//     .filter(num => num % 2 !== 0)
//     .map(num => num * 2);
//     return doubledOddNumbers;
// }

// FILTER BY VALUE WITH FILTER
// function filterByVal(arr, key){
//     return arr.filter(function(val){
//         return val[key] !== undefined;
//     });
// }

// FIND FUNCTION WITH FILTER
// function find(arr, value) {
//     return arr.filter(function(array) {
//         return array === value;
//     });
// }

// FINDINOBJ WITH FILTER
// function findInObj(arr, key, searchValue) {
//     return arr.filter(function(val) {
//       return val[key] === searchValue;
//     })[0];
// }