// Write function below
function factorial (num){
  let result = 1;
  for (let i = num; i > 0; i--){
    result = result * i;
  }
  return result;
}
//Test
console.log(factorial(6));
