document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

     //opgave 1: 
     //  et nyt array, som indeholder alle de tal som er større end 20.
    let res1 = numbersArray.filter((elm) => elm > 20)
    console.log(res1);
    

     // Opgave 2
    // Tilføj katten "Sniffles" til catsArray.
    catsArray.push("Sniffles")
    console.log(catsArray)

    

    // Opgave 3a
    // Check om der i dogsArray er en hund som hedder "Trixie".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    console.log(dogsArray.filter((dog) => dog === "Trixie").length > 0)

    // Opgave 3b
    // Check om der i dogsArray er en hund som hedder "Baxter".
    console.log(dogsArray.filter((dog) => dog === "Baxter").length > 0)

    

    //Opgave 4a
    // Check om der i catsArray er en kat som hedder "Bagheera".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    console.log(catsArray.includes("Bagheera") ? "Bagheera" : undefined)

    // Opgave 4b
    // Check om der i catsArray er en kat som hedder "Salem".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    console.log(catsArray.includes("Salem") ? "Salem" : undefined)


    // Opgave 5
    // Oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    const arrayR = numbersArray.map(num => num * 3)
    console.log(arrayR)

    // Opgave 6
    // Udskriv alle hundene i dogsArray i én lang streng.
    // (Sådan her: BarneyMollyBaxter...)
   let HA = dogsArray.join(" ")
   console.log(HA)
   




}) 

