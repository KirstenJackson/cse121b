let person = {
    name: "Kirsten Jackson",
    age: 22,
    profession: "Student",
    hobbies: ["drawing", "playing drums", "cooking"],
    address: {
        street: "859 Pine Lake Drive",
        city: "Greenwood",
        state: "IN",
        country: "USA"
    },
    isEmployed: false,
    greet: function () {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

console.log(person.hobbies[1]);

// drugs
let lactatedRingers = {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'}
let levothyroxine = {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'}
let rosuvastatin = {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'}
let albuterol = {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'}
let esomeprazole = { 'id': 'mnb78932', 'amount': 23145, 'amountType': 'ct', 'expDate': '10/01/2021' }

// access value associated with key, use name of variable and the key
let anAmount = rosuvastatin['amount']; // anAmount = 1500

// change value with key
rosuvastatin['amount'] = 1455;

// nested objects solution
let medications = {
	'Lactated Ringers' : {'id':'13ab7','amount':100,'amountType':'L','expDate':'12/30/2029'},
	'Levothyroxine' : {'id':'at342','amount':2000,'amountType':'ct','expDate':'03/18/2021'},
	'Rosuvastatin' : {'id':'gr5423','amount':1500,'amountType':'ct','expDate':'09/01/2020'},
	'Albuterol' : {'id':'iuy6532','amount':1325,'amountType':'ct','expDate':'01/01/2023'},
	'Esomeprazole' : {'id':'mnb78932','amount':23145,'amountType':'ct','expDate':'10/01/2021'}
} // medication is used as key

// get all data for Lactated Ringers
let aMedication = medications['Lactated Ringers'];

// use defined objects to get albuterol expiration
let aBestByDate = medications['Albuterol']['expDate'];
// dot notation
aBestByDate = medications.Albuterol.expDate;

// change amount of rosuvastatin
medications['Rosuvastatin']['amount'] = 1432;
// dot notation
medications.Rosuvastatin.amount = 1432;


// can also use dot notation to access and change defined objects
// dot notation only works when you know what the keys are when your writing the code

// UI where used selects name of med to display expDate
// selectedMedication is the variable for what used selected
aBestByDate = medications.selectedMedication.expDate; //doesn't work
aBestByDate = medications[selectedMedication]['expDate']; //does work
aBestByDate = medications[selectedMedication].expDate; //works and is cleanest












