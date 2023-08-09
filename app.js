

// display current date and time in your browser


// function dateTime(){

//   return new Date();

// };

// console.log(dateTime());

// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = dateTime();


// take first and last name then greet the user

// var firstName;

// var lastName;

// function user(){
//      firstName = prompt("enter your first name");
//      lastName = prompt("enter your last name");
   
//     return "hello "+ firstName+ " " + lastName;

// }



// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = user();




// add two numbers input by user

// function addition(input1, input2){

//     input1 = +prompt("type number");

//     input2 = +prompt("type number");

//     return input1 + input2;

// };


// var h1 = document.querySelectorAll("h1")[0];

// h1.innerHTML = addition();



// take start and end numbers and show counting 

// var starNumber = +prompt("type start number");
// var endNumber = +prompt("type end number");

// var h1 = document.querySelectorAll("h1")[0];
// var count = 0;

// function counting(){

//     for(var i = starNumber; i < endNumber; i++){
     
//       h1.innerHTML = i ;
      
    
//     }

// //     return i++ ;
// };



// var a = prompt("first");
// var b = prompt("second");

// for(var i = a; i <= b; i++ ){
//   console.log(i)

// }





// show variable length in function


// var myName = "Majid Hussain";

// function length(){
//   return myName.length;

// }

// console.log(length());



// find largest of the Number


// var num1 = +prompt("first num");
// var num2 = +prompt("second num");

// function largestNum(num1, num2){

//     var maxNum = Math.max(num1 , num2);

//     return maxNum;
// }

// console.log(largestNum(num1, num2));



// calculate the area of rectangle in function

// var hieght = prompt("enter hieght");
// var weidth = prompt("enter weidth");

// function calculate(hieght, weidth){

//  var squareFoot = hieght * weidth;

//  return squareFoot;


// }

// console.log(calculate(hieght, weidth));



// var fruits = ["mango", "apple", "kiwi", "orange", "banana"];

// function sorted(fruits){
 
//     var friutSort = fruits.sort();

//     return friutSort;
    
// }

// console.log(sorted(fruits));




// write a function that take numbers Array, sum and retun sum 

// var a = +prompt("enter number");
// var b = +prompt("enter number");
// var c = +prompt("enter number");
// var d = +prompt("enter number");

// var arr1 = [a, b, c, d];


// var sum =arr1.reduce((accumulate, currentValue) => {
   
//     return accumulate + currentValue;

// } );

// document.write(sum);



// write a function to chek type of

// var user = prompt()

// function type(){

//     return typeof(user);
// };

// console.log(type())



// write a function for random dice value


// function dice(){

//   return Math.ceil(Math.random() * 5);


// }

// console.log(dice() );



// write a function that reverse a number


// var num1 = [11, 12, 13, 14];

// function reverse(){

//   return num1.reverse();

// };

// console.log(reverse());



// write a function that chek string is palandrom or not 



// function palandrom(){
    
    
// //     let user = prompt('type here to chek a palandrom or not');
    
// //     let palandromChek = [user];
    
// //     let reverse = palandromChek.reverse();

// // switch (palandromChek) {
// //   case reverse :
// //         return "it is palandrom";
        

// // default :
// //   return "it is not palandrom";
        
// // }



  

// // };

// // let h1 = document.querySelectorAll("h1")[0];

// // h1.innerHTML = palandrom();

// not working properly







// let h1 = document.querySelectorAll("h1")[0];
    
//     let user = prompt('type here to chek a palandrom or not');
    
//     let palandromChek = [user];
    
//     let reverse = palandromChek.reverse();

// switch (palandromChek) {
//   case reverse :
//      h1.innerHTML =  "it is palandrom";
//         break;
        

// default :
//    h1.innerHTML =  "it is not palandrom";
        
// }




// let capitalize =  function (sentence){

// let str = sentence.split(" ")
// for(let i = 0; i < str.length; i++){
//     str[i] = str[i][0].toUpperCase() + str[i].substring(1); 
// }

// return str.join();

 

// };

// console.log(capitalize("the quick brown fox"));




// let capitalize = function(sentence) {

//  let str = sentence.split(" ");
 
//  for(let i = 0; i < str.length; i++){
//   str[i] = str[i][0].toUpperCase() + str[i].substring(1); 

//  }

//  return str.join(' ');


// }




// let h1 = document.querySelectorAll("h1")[0];
// h1.innerHTML = capitalize("the quick brown fox jump on the lazy dog");





// let capitalize = function(sentence){

//  let str = sentence.split(" ")
 
//  for(let i = 0; i < str.length; i++){
//   str[i] = str[i][0].toUpperCase() + str[i].slice(1);


//  };

//  return str.join(" ");

// }



// let h1 = document.querySelectorAll("h1")[0];
// h1.innerHTML = capitalize("the quick brown fox jump on the lazy dog");




// let h1 = document.querySelectorAll("h1")[0];

// function capitalize(sentence){

    
//     let str = sentence.split(" ");
//     console.log(str);

//     for(let i = 0; i < str.length; i++){
        
        
//         str[i] = str[i][0].toUpperCase() + str[i].slice(1);

//     }

//     return str.join(" ");
// }

// h1.innerHTML =  capitalize("the brown fox");






