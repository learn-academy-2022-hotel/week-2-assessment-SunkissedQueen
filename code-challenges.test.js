// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// TEST
describe("comboArray", () => {
  it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
    const numbersArray1 = [6, 7, 8, 9, 10]
    // Expected output: [18, 21, 24, 27, 30]
    const numbersArray2 = [24, 27, 30, 33, 36]
    // Expected output: [72, 81, 90, 99, 108]
    expect(comboArray(numbersArray1)).toEqual([18, 21, 24, 27, 30])
    expect(comboArray(numbersArray2)).toEqual([72, 81, 90, 99, 108])
  })
})

// Good failure
// FAIL  ./code-challenges.test.js
// comboArray
//   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3

// ● comboArray › takes in an array of numbers and returns an array with all the numbers multiplied by 3

//   ReferenceError: comboArray is not defined

// b) Create the function that makes the test pass.

// PSEUDOCODE:
  // declare a function called comboArray
  // input: array of numbers, parameter called array
  // output: an array with all the numbers multiplied by 3, same length as the original
  // Process
    // iterate across the values and multiply each value by 3 using the high order function map()
    // return the array created by the high order function

// FUNCTION
// const comboArray = ( array ) => {
//   return array.map((value) => {
//     return value * 3
//   })
// }

// REFACTOR
const comboArray = ( array ) => {
  return array.map(value =>value * 3)
}

// PASS
  // PASS  ./code-challenges.test.js
  // comboArray
  //   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (2 ms)

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// From Developer James
// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisibleByThree", () => {
  it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
      expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
      expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
      expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
  })
})

// b) Create the function that makes the test pass.
// PSEUDOCODE
// input: and object containing a number
// output: a string stating if the number within the object is divisible by three or not

// Declare a function called divisibleByThree
// Add a parameter to accept an object
// Extract the number from the object
// Check to see if the extracted number is divisible by three or not
// Return a string saying the extracted number is divisible by three if it is, or that it is not if not

// Good failure
// divisibleByThree
//     ✕ takes an object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)

//   ● divisibleByThree › takes an object as an argument and decides if the number inside it is evenly divisible by three or not

//     ReferenceError: divisibleByThree is not defined

// FUNCTION
const divisibleByThree = (object) => {
  if (object.number % 3 === 0) {
      return `${object.number} is divisible by three`
  } else {
      return `${object.number} is not divisible by three`
  }
}

// PASS
// divisibleByThree
// ✓ takes an object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// From Developer Monica
// a) Create a test with expect statements for each of the variables provided.

describe("firstCaps", () => {
  it("returns an array with all the words capitalized", () => {
      const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
      // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
      const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
      // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
      expect(firstCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(firstCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
  })
})

// b) Create the function that makes the test pass.
//PSEUDOCODE: 
  // declare a function called firstCaps
  // input: an array of strings
  // output: return a new array with the original length that makes the strings first letter capitalized
  // Process:
    // declare a function that takes in a array
    // return a higher order function that takes in each element in the array
    // return the strings with the first letter capitalized, by chaining built-in methods. To access each element use .charAt(0), this uses the index to locate the first letter. Then .toUpperCase() to capitalize each element.
    //output:["STREETLAMP", "POTATO", "TEETH", "CONCLUSION", "NEPHEW"]
    // Since each letter in the element is capitalize use the .slice() method and .toLowerCase() together to lowercase each character after the 0 index

// FUNCTION
// const firstCaps = (array) => {
//       return array.map(string => {
//           return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
//       })
//   }

// REFACTOR
const firstCaps = (array) => {
  return array.map((string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// From Developer Octavio
// a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// PSEUDO
// create a test for a function called firstVowelIndex which takes in a string as a parameter
// it should take in the string and return a number
// test each of the 3 inputs given
describe("firstVowelIndex", () => {
  it("returns the index of the first vowel in the input string", () => {
    expect(firstVowelIndex(vowelTester1)).toEqual(1)
    expect(firstVowelIndex(vowelTester2)).toEqual(0)
    expect(firstVowelIndex(vowelTester3)).toEqual(2)
  })
})

// Good Failure
//   firstVowelIndex
//   ✕ returns the index of the first vowel in the input string

// ● firstVowelIndex › returns the index of the first vowel in the input string

//   ReferenceError: firstVowelIndex is not defined

// b) Create the function that makes the test pass.
// create a fxn that takes in an array
  // loop through the string
    // if the current letter is a vowel
      // return the current index

const firstVowelIndex = (str) => {
  let vowels = ["a", "e", "i", "o", "u"]    
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i
    }
  }
}
// PASS
// firstVowelIndex
// ✓ returns the index of the first vowel in the input string