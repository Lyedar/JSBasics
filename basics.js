// This is a general practice file for JavaScript Basics. Please follow the instructions thoughout the sheet. Do not uncomment the commented out spaces.
var arr, findTwo, pusher, upFront, remover, copyCat, chopIt, sumIt, evenOdd, timesTen, animal, findAge, getKeys, changeName, speechMaker, addKey, keyLoop, cars, findModels

// Arrays

// 1. Create the variable arr and assign it an array with the following list of numbers 12, 42, 36, 51, 96

<<<<<<< HEAD
var arr = [12, 42, 36, 51, 96];
=======
// 2. Create a function called findTwo that takes in the arr array and returns the value at index 2.

// 3. Create a function called pusher that takes in an array and a number and positions the number at the end of the array. Return the new array.
>>>>>>> upstream/master

// 4. Create a function called upFront that takes in an array and a number and positions the number in beginning of the array. Return the new array.

<<<<<<< HEAD
function findTwo(a){
	return a[2];
}
=======
// 5. Create a function called remover that takes in an array and removes the value at the end of the array. Return the new array.
>>>>>>> upstream/master

// 6. Create a function called copyCat that takes in an array, copies, and returns the second and third index values.

// 7. Create a function called chopIt that takes in an array and two numbers, then inserts the two numbers into the array after the second index value and deletes the original third index value.

<<<<<<< HEAD
function pusher(a, x){
	 a.push(x);
	 return a;
}
=======
// 8. Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.

// 9. Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values.
// Hint: Use the modulus operator
>>>>>>> upstream/master

// 10. Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
// Hint: Use the map method

<<<<<<< HEAD
function upfront(a, x){
  a.unshift(x);
  return a;
}
=======
// Objects

// 1. Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.
>>>>>>> upstream/master

// 2. Create a function called findAge that takes in an object and returns the age key value.

<<<<<<< HEAD
function remover(a){
	a.pop();
	return a;
}
=======
// 3. Create a function called getKeys that takes in an object and returns all of the key names (not values!).

// 4. Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.
>>>>>>> upstream/master

// 5. Create a function called speechMaker that takes in an object and returns the response from calling the speech method.

<<<<<<< HEAD
function noMore(a, x){
	a.unshift(x)l
	return a;
}
=======
// 6. Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.

// 7. Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".
>>>>>>> upstream/master

// Intermediate Arrays and Objects

<<<<<<< HEAD
function copyCat(a){
	var slice = a.slice(1,3);
	return slice;
}

//8. Create a function called chopIt that takes in an array and two numbers, then inserts the two numbers into the array after the second index value and deletes the original third index value.

function chopIt(a, x, y){
	a.splice(2, x, y);
	return arr;
}

//9. Create a function called sumIt that takes in the array and returns the sum of each of the values in the array.

function sumIt(a){
	 var sum = a.reduce( (prev, curr) => prev + curr );
  	 return sum;
}

//10. Create a function called evenOdd that takes in the array and pushes into a new array "even" or "odd" for every value in the array, depending upon whether they are even or odd number values.
//Hint: Use the modulus operator

function evenOdd(a) {
  for (var i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
      a[i] = "even";
    } else {
      a[i] = "odd";
    }   //end if/else
  }   //end for
  return a;
}   //end funtion

//11. Create a function called timesTen that takes in an array and multiplies each value by 10 and returns the new array.
//Hint: Use the map method

function timesTen(a){
	var multi = a.map(function(num){
		return num*10;
	})
	return multi;
} //end function

//Objects

//1. Create an object called animal. Make sure the animal has the following keys. (species, name, age, gender, favoriteFood) Also, give the animal a method of speech that returns a string that displays what the animal says.

var animal = {species: "Dog", name: "Blitz", age: 74, gender: "male", favoriteFood: "anything on the table", say: "Bark" }; 

//2. Create a function called findAge that takes in an object and returns the age key value.

function findAge(o){
	return o.age;
}

//3. Create a function called getKeys that takes in an object and returns all of the key names (not values!).

function getKeys(o){
	return Object.keys(o);
}

//4. Create a function called changeName that takes in an object and a name value and replaces the object name with the given name value. Return the new object.

function changeName(o, n){
  var newName = o;
  newName.name = n;
  	return newName;
}

//5. Create a function called speechMaker that takes in an object and returns the response from calling the speech method.

	function speechMaker(o){
	return o.say;
}

//6. Create a function called addKey that takes in an object and adds a new key name bedtime and assigns it a value. Return the object.

function addKey(o){
  o.bedtime = "6:30";
  return o;
}

//7. Create a function called keyLoop that takes in an object and loops through each of the key values. If any of the key values are equal to "monkey", then return "There's a monkey!", otherwise return "There's no monkey here!".

function keyLoop(ob){
  var x;
for(x in ob){
  if(ob[x] == "monkey"){
    return "There be a monkey!";
  }
}
return "No Monkeys here.";
}


//Intermediate Arrays and Objects

//1. Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.

var cars = [car1 = {make: "Ford", model: "Explorer", year: 2016}, car2 = {make: "Blaze", model: "Navigator", year: 2005}, car3 = {make: "Traveler", model: "Road", year: 2000}]

//2. Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.

function findModels(ar){
  var carmodals = ar.map(function(obj){
    return obj.model;
  })
  return carmodals;
=======
// 1. Create an array called cars of 3 objects of 3 different cars with the key names of make, model, year.

// 2. Create a function called findModels that takes in an array, loops through the array and returns an array of all of the model values of each object.

module.exports = {
  arr: arr,
  findTwo: findTwo,
  pusher: pusher,
  upFront: upFront,
  remover: remover,
  copyCat: copyCat,
  chopIt: chopIt,
  sumIt: sumIt,
  evenOdd: evenOdd,
  timesTen: timesTen,
  animal: animal,
  findAge: findAge,
  getKeys: getKeys,
  changeName: changeName,
  speechMaker: speechMaker,
  addKey: addKey,
  keyLoop: keyLoop,
  cars: cars,
  findModels: findModels
>>>>>>> upstream/master
}
