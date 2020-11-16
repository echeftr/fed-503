/* Maak 1 file waarin je de volgende opdrachten maakt. Het snelste is om deze file elke keer op je computer te runnen met node mijnfilename.js

Je hebt voor elke opdracht de testdata nodig. Klap deze dus altijd open. Bekijk op het laatst pas het antwoord, als je het eerst zelf hebt geprobeerd. Bij elke nieuwe opdracht nemen we je iets minder mee aan de hand in de TestData.

A Schrijf een JavaScript functie om het woord "cool" aan een array met strings toe te voegen. Gebruik de .push method.

Test Data (nu nog uitgebreid, later beknopter)


  const addTheWordCool = function(array){
        // add your code
  }
  console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
 / resultaat: ["nice", "awesome", "tof", "cool"] */

// Mijn antwoord deel A
const addTheWordCool = function(array){
    array.push("cool");
    return array;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
// resultaat: ["nice", "awesome", "tof", "cool"]

// deel B
/* Schrijf een JavaScript functie die het aantal elementen in een array retourneert.

Test Data

  console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  / 3 */

// Mijn antwoord deel B
let amountOfElementsInArray = function(array) {
    
    return array.length;

}
  console.log(["appels", "peren", "citroenen"]);
  
// deel C
  /* C Schrijf een JavaScript functie om het éérste element uit een array te retourneren. PS: Bij welk cijfer begint een array ook alweer met tellen?

Test Data

  console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
  // resultaat: "Belgie" 
 */

// Mijn antwoord deel C
 let selectBelgiumFromBenelux = function(array) {
     return array[0];
 }
 console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"]));


//  deel D
/* D Schrijf een JavaScript functie om het laatste element uit een array te retourneren.

Test Data

  console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
  / resultaat: "Schildpad" */

// Mijn antwoord deel D
  let lastElementInArray = function(array) {
      return array[array.length -1];
  }
  console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

//   deel E
/* E Schrijf een JavaScript functie om het eerste element uit een array te halen en het restant te retourneren . Gebruik .slice én de alternatieve optie .splice. Wat is het verschil tussen deze functies? Hint: mutability.

Test Data

  const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
  (...)
  }
  const impeachTrumpSplice = function(array) {
        (...)
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"] */

//  .slice = De slice() method geeft een oppervlakkige kopie van een gedeelte van een array terug in een nieuwe array.

//  .splice = De splice()-methode past de inhoud van een array aan door bestaande elementen te verwijderen en/of nieuwe elementen toe te voegen.

// Mijn antwoord deel E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
  newPresidents = array.slice(1, 4);
  
  return newPresidents;
  };
  const impeachTrumpSplice = function(array) {
    removedPresidents = array.splice(0, 1);
    
    return array
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


//   deel F
/* F Write a simple JavaScript program to join all elements of the following array into a string (with spaces). ps: deze opdracht hebben we in het Engels gelaten omdat er een dikke tip in zit over welke array method je gaat gebruiken.

Test data

  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  /resultaat: "Winc Academy is leuk ;-}" */


// Mijn antwoord deel F
  let stringsTogether = function (array) {
        return array.join(' ')
  }

  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 

//   deel G
/* G Schrijf een functie die 2 arrays ['array 1'] ['array2'] combineert tot 1 array ['array1', 'array2']

Test Data

  combineArrays([1,2,3], [4,5,6]) 
  / resultaat: [1,2,3,4,5,6] */

// Mijn antwoord deel G

  let combineArrays = function(array1, array2) {
      return array1.concat(array2);
  }
 
  console.log(combineArrays([1,2,3], [4,5,6])); 
  // resultaat: [1,2,3,4,5,6]
