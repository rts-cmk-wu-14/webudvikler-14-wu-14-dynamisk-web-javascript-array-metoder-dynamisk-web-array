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
}) 

