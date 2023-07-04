
const filterOutOdds = (...nums) => { 
    return nums.filter(num => num % 2 === 0);
};

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => {
    const newArr = args.map(val => val * 2);
    return [...arr,...newArr ];
};


/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = items => {
  const randomIdx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, randomIdx),...items.slice(randomIdx+1)];
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => [...array1, ...array2];


/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addkeyVal = (obj, key, value) => {
  const newObj = {...obj};
  newObj[key] = value;
  return newObj;
};


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
  const objCopy = {...obj};
  delete objCopy[key];
  return objCopy
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const modObj = {...obj};
  modObj[key] = val;
  return modObj;
};