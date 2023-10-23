//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const parse = function(person){
    for (let i = 0; i < Object.keys(person).length ;i++) {
        let type = Object.keys(person)[i];
        //console.log(type);
        //console.log(typeof Object.values(person)[i]);
        //console.log(typeof Object.keys(person));

        if (typeof Object.values(person)[i] == 'string') {
            console.log(Object.values(person)[i]);
        } else if (Array.isArray(Object.values(person)[i])) {
            //console.log(Object.values(person)[i][0])
            //console.log(typeof Object.values(person)[i][0])
            if (typeof Object.values(person)[i][0] != 'string') {
                let values = Object.values(Object.values(person)[i][0]);
                let keys = Object.keys(Object.values(person)[i][0]);
                //console.log(keys);
                //console.log(values);
                //console.log('right here');
                for (let x = 0; x < keys.length; x++ ){
                    //console.log(typeof keys[x]);
                    console.log(values[x] + " " + type + " from" + " " + keys[x]);
                }
            } else if (type.includes('_')){
                type = type.split('');
                type.splice(3,1,' ');
                type = type.join('');
                Object.values(person)[i].forEach((element) => console.log(element + " " + type));
            } else {
                Object.values(person)[i].forEach((element) => console.log(element + " " + type));
            }
            //Object.values(person)[i].forEach((element) => console.log(element + " " + type));
        }
    }
}
    

parse(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

function Person(name, age) {
    this.name = name; 
    this.age = age;

    this.addAge = () => {
        this.age += 1;
     }

    this.printInfo =() => {
        console.log(`This is ${this.name}. ${this.age}years old.`);
    }
}


// Use an arrow to create the printInfo method


// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 




let randy = new Person('Randy Moss', 38);
randy.printInfo();
randy.addAge();
randy.addAge();
randy.printInfo();

const terrell = new Person('Terrell Owens', 38);
terrell.printInfo();








// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

    function counter(string) {
        return new Promise(async (resolve, reject) => {
            if (string.length > 10) {
                resolve(true);
            } else {
                reject(false);
            }
        });
    }
counter('alexanderhgjkhkjh')
counter('alexander')

.then((result) => {
    console.log(`Big word ${result}`)
})
.catch((error) => {
    console.log(`Small Number ${error}`)
})


// Code Wars Original JS Exercise//
//Digital root is the recursive sum of all the digits in a number.//

//Given n, take the sum of the digits of n. If that value has more than one digit, //
//continue reducing in this way until a single-digit number is produced. The input //
//will be a non-negative integer.//



function digitalRoot(n) {
    //turn n to a string
    var n = n.toString();
    //check if n is longer than one digit
    while (n.toString().length > 1) {
      let count = 0;
      //turn n into a list of strings
      let number = n.toString().split('');
      //iterate thru list, summing digits 
      for (let digit of number) {
        count += parseInt(digit);
      }
      //assign new number to n
      n = count;
    }
    return parseInt(n);
  }


  // Code Wars Refactor//
  //Create a function taking a positive integer between 1 and 3999 (both included)//
  //as its parameter and returning a string containing the Roman Numeral representation of that integer.//

  //Modern Roman numerals are written by expressing each digit separately starting with the left most //
  //digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: //
  //1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 //
  //uses each Roman symbol in descending order: MDCLXVI.//

  const solution = (n) => {
    let roman = "";
    while (n >= 1000) {
        roman += "M";
        n -= 1000;
    }
    while (n >= 500) {
        if (n >= 900) {
            roman += "CM";
            n -= 900;
        } else {
            roman += "D";
            n -= 500;
        }
    }
    while (n >= 100){
        if (n >= 400) {
            roman += "CD";
            n -= 400;
        } else {
            roman += "C";
            n -= 100;
        }
    }
    while (n >= 50){
        if (n >= 90) {
            roman += "XC";
            n -= 90;
        } else {
            roman += "L";
            n -= 50;
        }
    }
    while (n >= 10) {
        if (n >= 40) {
            roman += "XL";
            n -= 40;
        } else {
            roman += "X";
            n -= 10;
        }
    }
    while (n >= 5) {
        if (n == 9) {
            roman += "IX";
            n -= 9;
        } else {
            roman+= "V";
            n -= 5;
        }
    }
    while (n >= 1) {
        if (n == 4) {
            roman += "IV";
            n -= 4;
        } else {
            roman += "I";
            n -= 1;
        }
    }
        
    return roman;
  }