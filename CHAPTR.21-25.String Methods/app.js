//Q. 01. write a program that takes tow user imput for first and lrst name using prompt and marg them in a new varible
// title fullname. Greet the user using his full nane.

// let userFirstName = prompt("enter your first name");
// let userLastName = prompt("enter your last name");
// var concat = userFirstName +" " + userLastName;
// document.write("hellow  ',concat," nice to meet you <br><br>;

// Q.02. write a program to tack a user input about his favorite
// mobile phone model. find and display the langht of user input in your browser.

// let userMobile = prompt("enter your favorite mobile phone model");
// document.write("your favorite phone is :",userMobile,"<br>");
// document.write("langht of your input is :",userMobile.length, "<br><br>");

// Q.03. write a program to find the index of letter "n" in the word "pakistan" and
// display the result in your brouser .

// let string = 'pakistan';
// document.write("pakistani <br>")
// document.write("index of 'n' is : ",string.indexOf("n"),"<br><br>");


//Q. 04. write a program to find the last index rpof letter "1" in the word 
// "Hello World" and display the Result in your browser.

// let value = "Hello World";
// document.write(value,"<br>");
// document.write('index of last 1 is :`,value.lastIndex of("1"),"<br><br>"');


// Q.05. write a program to find the character at index in the world "pakistan"
// and dispiay the result in your browser.


// let valuee = 'pakistani';
// document.write(valuee,"<br>");
// document.write("char at 3rd index is : ",valuee.charAt(3),"<br><br>");


// Q.06. Repeat Q1 using string concat() method .


// var userFirstName = prompt("enter your first name");
// var userLastName = prompt("enter your last name");
// document.write('Hello' ,userFirstName.concat(" ",userLastName)," nice to meet you <br><br>");


// // Q.07. Write a program to replace tha "Hyder" to "Islam" in the word "Hyderabad" and display the result in your browser.

// var word = "Hedrabad";
// var replace = word.replace("Hyder","Islam");
// document.write("befor replacement original value : ",word,"<br>");
// document.write("After replacemeint :",replace,"<br><br>");

// // Q.08 Write a program to replace all occurrences of "and" in the string with "&" and 
// // display the result in your browser.
// var message ="Ali and sami are best friends. The play crickit and football together.";


// var message =" "Ali and sami are best friends. The play cricket and football together."";
// document.write("befor replacment "and" in the string with "&"  is: ",message,"<br>");
// document.write("After replacement :",message.replaceAll("and","&"),"<br><br>");


// // Q.09 Write a program tha converts a string "472" to a number
// // 472. dispiay the values & types in your browser.

// let numberValue = '472';
// document.write("Value : ",numberValue,"<br>")

// Q.10 Write a program that tack user input .convert and show the input.in capital leters.

// var userInput = prompt("enter any word");
// let capital = userInput.toUpperCase();
// document.write("user input : " , userInput , "<br>");
// document.write("Upper Case : " , capital , "<br><br>");


// // Q .11 Write a program that takes user input. Convert and show the input in title case.

// var userInput = prompt("enter any word");
// var firstLetter =userInput.slice(0,1);
// var remaining = userInput.slice(1);
// var titalCase = firstLetter,toUpperCase() + remaining.toLowerCase();
// document.write("user input : " ,userInput,"<br>");
// document.wrrite("tital case : " , titalCase, "<br>,br>");

// // Q .12 Write a prpgram that converts the varible num to string.
// var num = 35.36 ;
// Remove the dot to display "3536" display in your browser.

// var number = 35.36;
// document.write("NUMBER :", number,"<br>");
// let dotRemove = number .splice(2,1,0);
// var numToStr = dotRemove.toString();
// document.write("Resule : ", numToString,"<br>");//////////////////////////////////


// Q .13 Write a program to take user input and store username in a varible.If the username contains any
// special symbol among [@ . , !], prompt the user to enter a valid username.for character codes of [@].

// Note:
// ASILL code of ! is 33
// ASCII code of . is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var input = prompt("enter your name:")
// var chareValue ;
// var flage= false
// for(var i = 0;i<input.length;i++){
//     chareValue = input[i].charCodeAt(0);
// if(chareValue === 33 ||chareValue ===44 ||chareValue===46 ||chareValue===64){
//     alert("please enter valid usernume")
//     flag = true
//      }

// }
// if(flag===false){
//     alert("hello "+input)
// }

// Q .14 you have an array
// A = ["cake", "apple pie", "cookice", "chips", "patties"]
// write a program to enable "search by user input" in an Array. After searching,prompt the user whether the given item is fount in the List or Not 
// Note: perform case insensitive search.whether the user enters cookice, cookie, COOIE or cooie,program should inform about its availability.Example:

// var items = ["cake","apple","cookie","chips","patties"];
// var userInput = prompt("welcom to ABC bakery what do you want to oder?");
// var flag = false;
// var caseSensitive =userInput.toLowerCase();
// for(var i = 0;i<items.length;i++){
//     if(caseSensitive===items[i]){
//         alert(items[i] + " is avalable at index " + i + " in our backry");
//         flag=true;
//     }
// }
// if(flag===false){
//     alert("we are sorry. " + caseSensitive + " is not available in our backry");
// }
// Q .15 Write a program to take password as an input from user. the password must qualify these requiements:
// a . It should contain alphabets and numbers 
// b . It should not start with a numbers
// c . It must at least 6 characters long if the 
// if the password dose not meet above requirments,
// prompt the user to enter a valid password.
// for character codes of a-z, A-Z & 0-9, refer to ASCII table at the and of this decoment.

// var input =prompt("enter your password");
// document.write("Entered password :" ,import);

// Q. 16 Write a program to convert the following string to an array using string split method.
// var university = "University of karachi";
// display the elements of array in your browser.array

// var university = "University of  karachi";
// document.write (university,"<br><br>")
// var array = university.split("");
// for (var i=0; i<array,length; i++){
//     document.write(array[i],"<br>")
// }

// Q .17 Write a program to display the lats character of a user input.

// var userinput =("enter anyword:")
// document.write("user input : ",userinput,"<br>");
// document.write("last character of yper input is : " ,userinput.charAt(userinput,length-1));

// Q .18 you have a string "The quick brown fox jumps over the lazy dog". Write a program to count number of
// occurrsnces of word "the" in given String. 


// var stringValue = "The quick brown fox jumps the lazy dog";
// var match = stringValue.match(/the/gi).length;
// document.write("occurrences of word  in given string is : ",match)

 