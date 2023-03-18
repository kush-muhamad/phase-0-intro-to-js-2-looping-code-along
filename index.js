// Code your solutions in this file

//for (let age = 30; age < 40; age++) {
  //console.log(`I'm ${age} years old. Happy birthday to me!`);
  // we run this code of block if the statment is true
  // my age is 30 if age is < 40 print the statment and again go through but this time add 1

  //debugger;
//}
//Using for with Arrays
//The for loop is often used to iterate over every element in an array. Let's rewrite our gift-wrapping action above as a for loop

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }
  return gifts;
}
wrapGifts(gifts);

function writeCards(array, eventName ) {
    const newArray = [];
    for (let index = 0; index < array.length; index++) {
         newArray[index] = `Thank you, ${array[index]}, for the wonderful surprise gift!`;        
    }

    return newArray;
}

function countDown(n) {
    while(n >= 0){
        console.log(n);
        n--;
    }

}

