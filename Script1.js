let sale = "999";

if (sale < "1000") {
    console.log("No discount");
} else if (sale >= "1000" && sale < "2000") {
    sale = sale * 0.95;
    console.log(sale, "Discount 5%");
} else if (sale >= "2000" && sale < "3000") {
    sale = sale * 0.9;
    console.log(sale, "Discount 10%");
} else if (sale >= "3000") {
    sale = sale * 0.9;
    console.log(sale, "Discount 10% + present");
}

let month = 'May';
switch (month) {
    case 'December':
    case 'January':
    case 'February':
        console.log("Winter");
        break; 
    case 'March':
    case 'April':
    case 'May':
        console.log("Spring");
        break;
    case 'June':
    case 'July':
    case 'August':
        console.log("Summer");
        break;
    case 'September':
    case 'October':
    case 'November':
        console.log("Autumn");
        break;
    default: 
        console.log("Wrong Month");
}

let min = 1;
let max = 7;
let random = Math.random() * (+max - +min) + +min;
let num = 1;
if (num === random && num != 0) {
    console.log("Correct!");
} else if (num > random && num != 0) {
    console.log("Number is less");
} else if (num < random && num != 0) {
    console.log("Number is bigger");
} else if (num === 0) {
    console.log("Exit");
}

let numbs = [1, 2, 3, 4, 5, 6, 7];
let sum = "";
for (let i = 0; i < numbs.length; i++);
{
    for (let j = 0; j < numbs.length; j++) {
        do {
            (numbs[i] + numbs[j]);
        } while (numbs[i] !== numbs[j]);
        console.log()
    }
} 
