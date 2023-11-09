// Iteration 1: Names and Input
//1.1
let hacker1 = "John";
//1.2
console.log("The driver's name is " + hacker1);
//1.3
let hacker2 = "Jane";
//1.4
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
//2.1
let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

 console.log("Wow, you both have equally long names, " + hacker1Length + " characters John" + " and "  + hacker2Length + " characters Jane!");

// Iteration 3: Loops
//3.1
//without LOOP
console.log(hacker1[0].toUpperCase() + " " + hacker1[1].toUpperCase() + " " + hacker1[2].toUpperCase() + " " + hacker1[3].toUpperCase());

//With LOOP
let upperCaseHacker1Name = " ";

 for(i = 0; i < hacker1Length; i++)
   {
     upperCaseHacker1Name += hacker1[i].toUpperCase() + " ";
  }  
  

console.log(upperCaseHacker1Name);

//3.2
let reverseHacker2Name = " ";

 for(i = hacker2Length - 1; i >= 0; i--)
   {
     reverseHacker2Name += hacker2[i];
  }  
  

console.log(reverseHacker2Name);

//3.3

console.log(`Yo, ${hacker2},the navigator goes first, definitely.`);

/*Iteration 1: Names and Input
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
//----------------------------------------------------------------------------------------------------------------------------
Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
//----------------------------------------------------------------------------------------------------------------------------
Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?
//----------------------------------------------------------------------------------------------------------------------------
Bonus Time!
Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
//----------------------------------------------------------------------------------------------------------------------------
Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue*/