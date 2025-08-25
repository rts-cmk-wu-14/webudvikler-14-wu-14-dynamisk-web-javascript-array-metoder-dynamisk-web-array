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
}) 

