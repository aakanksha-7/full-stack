// let a = "string tutorial";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);


// let name="aakanksha";
// let another_name="himansu";
// console.log(`first person name is ${name} and another persons name is ${another_name}`);


// Write a program to print the marks of a student in an object using for loop.
// obj = {harry: 98, rohan: 70, aakash: 7}
let obj = {harry: 98, rohan: 70, aakash: 7};

let keys = Object.keys(obj); // ["harry", "rohan", "aakash"]

for (let i = 0; i < keys.length; i++) {
    let key = keys[i];         // one name at a time
    console.log(key + obj[key]);
}


// Write the program in Q1 using for in loop.

// Write a program to print "try again" until the user enters the correct number.


