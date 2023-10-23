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