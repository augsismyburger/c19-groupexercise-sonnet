/*Paste the code below into your HTML file.
Take the contents of the sonnet div and place it in a variable.
Find and output the starting position of the word "orphans".
Output the number of characters in the sonnet.
Replace the first occurance of the string "winter" with "yuletide".
Replace all occurances of the string "the" with "a large".
Set the content of the sonnet div with the new string.*/

var sonnet = document.getElementById("sonnet").innerHTML;

var index = sonnet.indexOf('orphans');
console.log("orphans index is ", index);

var length = sonnet.length;
console.log("sonnet length is ", length);

sonnet = sonnet.replace("winter", "yuletide");
console.log("sonnet with yuletide", sonnet);

sonnet = sonnet.replace(/the /gi, 'a large ');
console.log("replacing the with a large", sonnet);


document.getElementById("sonnet").innerHTML = sonnet;
