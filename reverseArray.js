// Write your code here:
function reverseArray(array) {
  const length = array.length;
  const newArray = [];
  for (let i = length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

// Test

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 

// Should print ['This', 'will', 'all', 'make', 'sense.'];
