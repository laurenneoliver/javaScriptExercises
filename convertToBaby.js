// Write your code here:
function convertToBaby(array){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
      newArray.push(`baby ${array[i]}`);
  }
  return newArray;
}

// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)) 

/*
note: the built in function map would be more efficient 
