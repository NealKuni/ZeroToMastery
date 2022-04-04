// Given 2 arrays, create a function that let’s a user know (true/false) whether these two arrays contain any common items


// for example:

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8]
// should return false

// what are the inputs?
// input 2 parameters - will always be arrays - no size limit
// outputs is boolean.
const array1 = ['a','b','c','x']
const array2 = ['z','y', 'x']

const containsCommonItem= (arr1,arr2) =>{
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem(array1,array2))