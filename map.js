
 // using map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled); 


//filter
console.log("filter")
const evens = numbers.filter(item => item % 2 === 0);
console.log(evens); 
 

//reduce
console.log("reduce")
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum); 

// for each
console.log("forEach")
const arr =numbers.forEach(element => {
    console.log(element)

});
console.log(arr)