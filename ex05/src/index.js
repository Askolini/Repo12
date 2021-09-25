myPetsArray = [
    {
        "animalType": "Dog",
        "name": "Pujdo"
    },
    {
        "animalType": "Cat",
        "name": "Maca"
    },
    {
        "animalType": "Bird",
        "name": "Tweety"
    }
];

function myPetsFunction(pets) {
    var myPets = pets.name;
    return myPets;
}

console.log(myPetsFunction(myPetsArray[1]));

module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;