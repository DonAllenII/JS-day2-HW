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
        console.log(type);
        console.log(typeof Object.values(person)[i]);
        if (typeof Object.values(person)[i] == 'string') {
            console.log(Object.values(person)[i]);
        }
        if (Array.isArray(Object.values(person)[i])) {
            Object.values(person)[i].forEach((element) => console.log(element + " " + type));
        }
        if (typeof Object.values(person)[i] == 'object') {
            console.log(Object.values(person)[i]);
            console.log(Object.values(Object.values(person)[i][0]));
            console.log(Object.keys(Object.values(person)[i][0]));
            let values = Object.values(Object.values(person)[i][0]);
            let keys = Object.keys(Object.values(person)[i][0]);
            console.log(keys);
            console.log(values);
            for (let x = 0; x < keys.length; x++ ){
                console.log(values[x] + " " + type + " from" + " " + keys[x]);
            }
        };
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


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/