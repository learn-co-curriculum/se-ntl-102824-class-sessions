// function hasTargetSum(array, target) {
//   // Start one iteration of the array, looking the first number
//   //   Move to next number, repeat to end of array
//   for (let i = 0; i < array.length; i++) {
//     //   Start another iteration of the array looking at the next number
//     // Move to next number and repeat to end of array
//     for (let j = i + 1; j < array.length; j++) {
//       //     If those 2 numbers sum to the the target value return true
//       if (array[i] + array[j] == target) {
//         return true
//       }
//     }
//   }
//   // If both iteration complete without returning true, return false
//   return false
// }

function hasTargetSum(array, target) {
  // Create an object to keep track of seen numbers
  const seenNumbers = {} // 1

  // Start iterating through the array
  for (const number of array) { // n
    //   take a current number, calculate the complement by subtracting it from the target
    const complement = target - number // 1
    //   look for the complement in the "seen" object
    if (complement in seenNumbers) { // 1
      //   return true if complement seen
      return true  // 1
    }
    seenNumbers[number] = true // 1
  }
  // return false if complement not seen
  return false // 1
}

/* 
  Write the Big O time complexity of your function here
  time: O(n^2) exponential
  space: O(1) constant

  time: O(n) linear
  space: O(n) linear
*/

/* 
  Add your pseudocode here

  Start one iteration of the array, looking the first number
    Start another iteration of the array looking at the next number
      If those 2 numbers sum to the the target value return true
    Move to next number, repeat to end of array
  Move to next number and repeat to end of array
  If both iteration complete without returning true, return false

  Create an object to keep track of seen numbers
  Start iterating through the array
    take a current number, calculate the complement by subtracting it from the target
    look for the complement in the "seen" object
    return true if complement seen
  return false if complement not seen

*/

/*
  Add written rephrasing of problem

  Write a function that will search a given array for any two numbers with add up to the given target number.  Return true or false whether those two numbers can be found.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
