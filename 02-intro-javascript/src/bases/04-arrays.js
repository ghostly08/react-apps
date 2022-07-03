
// ::::::: Arrays :::::::::::

const array = [1,2,3,4];
// array.push(5);

console.log(array);

let array2 = [...array, 5]; //Evitamos usar push para agregar values
// array2.push(5)
console.log(array2);

const array3 = array2.map(function(number) {
  return number * 2;
});

console.log(array3);
