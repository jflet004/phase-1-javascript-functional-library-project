// COLLECTION FUNCTIONS


// myEach
function alert(value) {
  return alert(value);
}

function myEach(collection, callback) {
  Object.values(collection).forEach(callback);
  return collection;
}
// myEach(objCollection, alert);


// myMap
function transformation(value) {
  return value * 3;
}

function myMap(collection, callback) {
  const newArr = Object.values(collection).map(callback);
  return newArr;
}
// myMap(arrCollection, transformation);


// myReduce
function reducer(acc, val, collection) {
  return acc + val;
}

function myReduce(collection, callback, acc) {
  if (typeof acc !== "undefined") {
    const sum = Object.values(collection).reduce(callback, acc);
    return sum;
  } else {
    const sum = Object.values(collection).reduce(callback);
    return sum;
  }
}
// myReduce(arrCollection, reducer, 10);


// myFind
function predicate(value) {
  return value % 4 === 0;
}

function myFind(collection, callback) {
  const firstTruthyValue = Object.values(collection).find(callback);
  return firstTruthyValue;
}

// console.log(myFind(arrCollection, predicate));


// myFilter
function predicate(value) {
  return value % 2 === 0;
}

function myFilter(collection, callback) {
  const truthyValues = Object.values(collection).filter(callback);
  return truthyValues;
}

// console.log(myFilter(objCollection, predicate));


// mySize
function mySize(collection) {
  const numberOfValues = Object.values(collection).length;
  return numberOfValues
}

// console.log(mySize(objCollection));


// ARRAY FUNCTIONS

// myFirst
function myFirst(array, integer) {
  if(typeof integer !== 'undefined') {
    const newArray = array.splice(0, integer);
    console.log('firstpass');
    return newArray;
  } else {
    const firstElement = array.shift();
    return firstElement;
  }
}
console.log(myFirst(arrCollection, 3));

const objCollection = { one: 1, three: 3, five: 5 };
const arrCollection = [5, 4, 3, 2, 1];

// myLast
function myLast(array, integer) {
  if(typeof integer === 'undefined') {
    const newArr = array.splice(integer -1, integer);
    return newArr;
  } else {
    const lastElement = array.pop();
    return lastElement;
  }
}
console.log(myLast(arrCollection, 3))

