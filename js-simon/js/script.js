// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.


// Creare un array dove vengono contenuti i numeri random da indovinare 
        // creare una function con i numeri da creare
            // c he vanno da 1 a 100
// Creare un timer in cui vengono messi dentro
// Visuakizzare su html i numeri



// Crazione effetiva di 5 numeri Random diversi tra loro
const ultimateRandomArray =randomArrayFunction();
// console.log(ultimateRandomArray);
//Visualizzare i 5 numeri in html per 30 secondi 

    let visualNumbers = document.getElementById("numbers");
    
    visualNumbers = document.createElement("h4")

    visualNumbers.innerHTML = `<span>${ultimateRandomArray}</span>`
    
    visualNumbers.classListy.add("adessova");
    console.log(visualNumbers);


// //Visualizzare i 5 numeri in html per 30 secondi 
// const visualEffectiveNumbers =setTimeout (visualFiveNumbers(ultimateRandomArray), 30 * 1000);


// console.log(visualEffectiveNumbers);

// function visualFiveNumbers(ultimateRandomArray){
//     let visualNumbers = document.getElementById("numbers");
    
//     visualNumbers = document.createElement("h4");

//     visualNumbers.innerHTML = `<span>${ultimateRandomArray}</span>`
//     console.log(visualNumbers);
//     return visualNumbers;
     
// }




/**
 * Description Creazione di 5 numeri random 
 * @returns {any} --> Numeri 
 */
function randomArrayFunction(){

    const randomArray =[];
    
    //Creazione di 5 numeri random
    for (let i = 1; i <= 5; i++){
        
        //Visializzazione di un numero random
        const randomNumber = seeTheNumber(1, 100);
    
        //Controllo che siano tutti diversi e non ci sia una ripetizione
        if (!randomArray.includes(randomNumber)){
            randomArray.push(randomNumber);
        }
    }
    return randomArray;
}

// Creazione di un numero random tra i 1 100 
function seeTheNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}