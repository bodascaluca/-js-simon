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
//Visualizzare i 5 numeri in html
//Prelevo la classe 
let visualNumbers = document.getElementById("numbers");

//Scrivo dentro la classe selezionarta
visualNumbers.innerHTML = `<h1>Ricordati questi numeri</h1><h4>${ultimateRandomArray}</h4>`;

//Faccio aspettare/chiedo i numeri e li registro
setTimeout(theNumbers ,3000);






//FAcciamo aspettare 3 secondi prima di chiedere i numeri
function theNumbers(){
    
    const writeArray = writeNumbersArray();
    console.log(writeArray);
    let numbersWin =[];
    for( let i = 0; i < writeArray.length;i++){
        let currentNumber = writeArray[i];
        if(ultimateRandomArray.includes(currentNumber)){
            numbersWin.push(currentNumber);
        }
    }
    const result = document.getElementById("result");
    result.innerHTML = `I numeri sono ${numbersWin}`;
    console.log(numbersWin);
}

//Chiediamo i numeri che doveva ricordare


//Si chiede 5 volte di inserire un numero
function writeNumbersArray(){
    const takeTheNumbersArray = [];
    for (let i = 0; i < 5; i++){
        const takeNumbers = parseInt(prompt(`Via! Scrivi i 5 numeri.`));
        takeTheNumbersArray.push(takeNumbers);
        // console.log(takeTheNumbersArray);
    }
    return takeTheNumbersArray;
}



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
        } else {
            i--;
            console.log('numero già estratto ' + randomNumber);
        }
    }
    return randomArray;
}

// Creazione di un numero random tra i 1 100 
function seeTheNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}