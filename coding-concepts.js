// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
// console.log(cohort.split(""))

// a) Your answer: From Developer Aileen, This will convert this string to an array with each of the letters separated and one value is a space.

// b) Verify and explain: The following was the output, as expected. The string was split between characters because the argument "" (without a space) was input. This indicated the array should be split between characters.
[
  'H', 'o', 't', 'e',
  'l', ' ', '2', '0',
  '2', '2'
]; 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: From Developer Fred, I would expect the output on the screen to be "Hello, LEARN student!"  This is based on the function greeter adding the argument "LEARN student" to the end of the function call. Running the code as written will return an "undefined" to the screen as a response.  Similar to the above concept, it is because you cannot redefine the original constant of "greeter".  In order to actually have the code output what is expected, you have to add in a variable to the function, which contains the `Hello, ${name}!` result. After having the variable named, you would call that information.

// b) Verify and explain: undefined, because of no return in the code block

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: From Developer Lea, [8, 10, 12, 14, 16]
// b) Verify and explain: My answer was correct because the method .map() returns an array of the same length however transforms the values based on how they're being manipulated. In this case, the number data type is being multiplies and displays the variables multiplied by two. 
[ 8, 10, 12, 14, 16 ]

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: From Developer Natally, [ 11, 13, 15 ]
// b) Verify and explain: [ 11, 13, 15 ] The output for this code was as answered above. This would be because the filter method iterated the onlyOdss array and returned a new array with only odd number elements, which satisfied the stated condition.By using the filter method,we can see that the array returned was a subset of the original.


// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: From Developer Oscar, "Javascript"
// b) Verify and explain: With myCodingSkills being the object, the .language lets javascript know you're going to be pulling the zeroeth index in that key value. Thus it would return Javascript. 


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: From Developer Moss, {student: "George", cohort: "Hotel", year: 2022}
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2022 }, When dealing with classes, the keyword 'new' will log an instance of the class. This instance will be comprised of everything within that class, including values assigned to variables if called upon. For this code, "George" was assigned to the variable 'name', which allowed it to be logged within the class. If you were to go further and return a string using string interpolation, you could include these values outside of the class format.

