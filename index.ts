#! /usr/bin/env node

import inquirer from "inquirer"

console.log("Hi,Welcome to y4c5-word-counter App.")

let condition = true;
while(condition){
const answer: {
    Sentence: string
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter the sentence to count the words: "
    }
]);

    const words: string[] = answer.Sentence.trim().split(" ");

    const validWords: string[] = words.filter(word => isNaN(Number(word)));

    const wordCount: number = validWords.length;

    if (wordCount === 0) {
        console.log("No valid words found,Please enter a sentence with words.");
    } 
    else {
        console.log("Valid Words in the sentence:", validWords);
        console.log("Word count of your sentence is "+ wordCount +".");
        console.log("Thanks for using y4c5-word-counter App.");
        break;
    }
}