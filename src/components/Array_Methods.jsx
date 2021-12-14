// Array Methods
const myArray = [1, 2, 3, 4, 5];

/**** map()  ****/
console.log(myArray.map((ele) => ele + 1));
console.log(myArray.map((ele) => ele));
console.log(myArray.map(() => "b"));
// console.log(myArray.map(() => return "b")); // unexpected token return
console.log(myArray.map(() => false));
console.log(myArray.map(() => true));
console.log(myArray);

/**** filter()  ****/
const myArray1 = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(myArray1.filter((element) => element > 5));
console.log(myArray1.filter((element) => element < 5));
console.log(myArray1.filter((element) => element == 5));
console.log(myArray1.filter((element) => element != 13));
console.log(myArray1.filter((element) => true));
console.log(myArray1.filter((element) => false));
console.log(myArray1);

/**** reduce()  ****/

/**** find() ****/

/**** includes() ****/
const myArray2 = [10, 20, 30, 40, 50, 60];
console.log(myArray2.includes(30));
console.log(myArray2.includes(100));
// arr.includes(valueToFind, fromIndex)
console.log(myArray2.includes(30, 2));
console.log(myArray2.includes(30, 4));
console.log(myArray2.includes(100, 4));

// The object gets its own unique reference in memory.
const newArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
console.log(newArray.includes({ id: 2 }));

// primitive type
var a = 3;
var b = 3;
c = b;
console.log(a);
console.log(b);
console.log(c);
b = 5;
// we didn't resign as c = b'. That's why i give same result
console.log(c);

// Non-primitive type
const obj1 = { id: 1 }; // a new reference
const obj2 = { id: 1 }; // a new different reference

console.log(obj1 == obj2); // only value
console.log(obj1 === obj2); // value and Datatype

// Obj2, Obj3 are pointing to the same object in memory.
const obj3 = obj2;
console.log(obj3);

console.log(obj3 == obj2);
console.log(obj3 === obj2);

// we add, modify the value, it points the same object reference in memory.
obj2.id = 17;
console.log(obj2);
console.log(obj3);

const x1 = { id: 1 };
const x2 = { id: 2 };
const x3 = { id: 3 };
const newestArray = [x1, x2, x3];
console.log(newestArray);
console.log(newestArray.includes(x1));

// Promises
/*
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 1000);                                       // 1000ms or 1sec
});
// promise holds the value, if we pass to the resolve after 1sec 
myPromise.then(value => console.log(value));
*/

/*
const myPromise = new Promise((resolve, reject) => {
    if (false) {
        setTimeout(() => {
            resolve('I have succeeded');
        }, 3000);
    } else {
        reject('I have failed')
    }
})

myPromise
    .then(value => console.log(value))
    .catch(rejectValue => console.log(rejectValue));
*/

/*
const myPromise = new Promise((resolve, reject) => {
    if (true) {
        setTimeout(() => {
            resolve('I have succeeded a lot');
        }, 3000)
    } else {
        reject('I have failed a lot')
    }
})

myPromise
    .then(value => value + '!!!!')
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(rejectValue));
    */


    /*
let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
  {
    "color": "blue",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "rose",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": "5"
  }
]


let result = cars.filter((car) => car.capacity == 5 ).map(car => car.color);
console.log(result);
*/

