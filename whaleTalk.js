/*
      Whale Talk
    --------------

Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

1.) There are no consonants. Only vowels excluding “y”.

2.) The u‘s and e‘s are extra long, so we must double them in our program.

*/


var input = "I love my beautiful family";
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];



for(let i=0; i<input.length; i++){
  for(let j=0; j<vowels.length; j++) {
    if(input[i] === vowels[j]){
      resultArray.push(vowels[j]);
      if(input[i] == 'e' || input[i] == 'u'){
        resultArray.push(vowels[j]);
      }
    }
  }
}
console.log(resultArray.join('').toUpperCase())
