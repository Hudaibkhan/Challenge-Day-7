"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DAY-7-CHALLENGE
// QUESTION 19
const app_1 = require("../Day 5 challenge/app");
console.log(`\nPrint invited guest List`);
console.log(`We had Finally invited ${app_1.guestList1.length} People\nThanks`);
// QUESTION 20
let river = ['Nile River', 'Amazon River', 'Yangtze River',];
console.log('List of River:');
for (let top of river) {
    console.log(top);
}
// // QUESTION 21
let book = {
    title: "How to Win at College",
    author: "Cal Newport",
    yearPublished: 2005
};
console.log(`Book Information: "${book.title}" by ${book.author}, 
published in ${book.yearPublished}`);
