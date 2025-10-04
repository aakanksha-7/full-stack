// Level 1: Basics of for loop

// Print numbers from 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);

}
// Print even numbers between 1 and 20.
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)

    } else {

    }

}

// Print odd numbers between 1 and 15.
for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i)

    } else {

    }

}

// Print numbers from 10 down to 1 (reverse order).

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Print the multiplication table of 5.

let num = 5;

for (let i = 1; i <= 10; i++) {
    let mul = num * i
    console.log(`${num} * ${i} = ${mul}`);

}

