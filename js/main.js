/*
        !TODO: 

           // 1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

           // 2. L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

           // 3. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

            // 4. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

            // 5. Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

            // 6. Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

            7. Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

            // 8.Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.
           
            //    9.Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga

            // 10. Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
*/

/*  
    ========================================================================================================
                                                        DEBUG
    ========================================================================================================
    
*/

//maxNum();
//maxWord();
//fiveAddition();
//fiveAdditionWhile();
//isOdd();
//isEven();
//countdown(8);
//countdownDOM(802);

// let word1 = prompt(`Inserisci la prima parola`);
// let word2 = prompt(`Inserisci la seconda parola`);

// (sameLengthWord(word1,word2)) ? console.log(`Le parole: ${word1} e ${word2} hanno la stessa lunghezza`) : console.log(`Le parole: ${word1} e ${word2} hanno una diversa lunghezza`);  

let numbers = randomNum(60);
createTempleate();
numbers.forEach( function(number) {
    (isEven(number)) ? document.getElementById("red").innerHTML += number + `<br>`: document.getElementById("green").innerHTML += number + `<br>`; 
})
console.log(numbers);





/*  
    ========================================================================================================
        1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
    ========================================================================================================
    
*/

function maxNum() {
    var firstNum = prompt((`Inserisci il primo numero`));
    var secondNum = prompt(`Inserisci il primo numero`);
    console.log(`Il numero maggiore è: ` + Math.max(parseInt(firstNum), parseInt(secondNum)));
}

/*  
    ========================================================================================================
        2. L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la 
            parola più corta, poi la parola più lunga.
    ========================================================================================================
    
*/

function maxWord() {
    var firstWord = prompt((`Inserisci la prima parola`));
    var secondWord = prompt(`Inserisci la seconda parola`);
    if (firstWord.length > secondWord.length) {
        console.log(`La parola più lunga è la prima: ` + firstWord);
    } else if (firstWord.length < secondWord.length) {
        console.log(`La parola più lunga è la seconda: ` + secondtWord);
    } else {
        console.log(`Le due parole hanno la stessa lunghezza`);
    }

}

/*  
    ========================================================================================================
        3. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa
         la somma di tutti i numeri inseriti.
    ========================================================================================================
    
*/

function fiveAddition(){
    var sum = 0;
    for (let index = 0; index < 5; index++) {
        var num = prompt((`Inserisci il numero da sommare`));
        console.log(`Numeri inseriti:` + index);
        sum = parseInt(num) + sum;
        
    }
    console.log(`La somma dei cinque numeri è: ` + sum);
}

/*  

    ========================================================================================================
        4. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa 
        la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con 
        il while
    ========================================================================================================
    
*/

function fiveAdditionWhile(){
    var index = 0;
    var sum = 0;
    do {
        index = index + 1;
        var num = prompt((`Inserisci il numero da sommare`));
        console.log(`Numeri inseriti:` + (index));
        sum = parseInt(num) + sum;
      } while (index < 5);
}

/*  
    ========================================================================================================
        5. Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari 
            inseriscilo nell’array
    ========================================================================================================
    
*/

function isOdd(){
    oddNumber = [];
    for (let index = 0; index < 6; index++) {
        var num = prompt((`Inserisci un numero, se disparo sarà inserito nell'array`));
        if (num % 2 != 0){
            oddNumber.push(num);
        }
    console.log(oddNumber);
    }
}

/*  
    ========================================================================================================
        6. Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
    ========================================================================================================
    
*/

function isEven(num){
    // var num = prompt((`Inserisci un numero, se è pari sarà stampato nella console`));
    // if (num % 2 == 0){
    //     console.log(`Il numero: ` + num + ` è pari`);
    // }
    return (num % 2 == 0) ? true : false;
    
}

/*  
    ========================================================================================================
        7. Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.
    ========================================================================================================
    
*/

function fakeInvite(){
    user_name = ["Linus", "Richard", "John", "Tom"];
    user_lastName = ["Linus", "Richard", "John", "Tom"];
}

/*  
    ========================================================================================================
        7. Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal 
            numero passato.
    ========================================================================================================
    
*/

function countdown(num){
        while (num != 0) {
            num--;
            console.log(num);
        }
}

/*  
    ========================================================================================================
        8. Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal 
            numero passato e stampa il risultato nel DOM
    ========================================================================================================
    
*/

function countdownDOM(num){
    while (num != 0) {
        var div = document.createElement('div');
        div.innerHTML = num--;
        document.body.appendChild(div);
    }
}



/*  
    =================================================================================================================
        9. Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la 
            stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga
    =================================================================================================================
    
*/

function sameLengthWord(word1,word2){
    return (word1 == word2) ? true : false; 
   
}

/*  
    =================================================================================================================
        10. Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. 
            Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
    =================================================================================================================
    
*/

function createTempleate(){
    let box = `
       <div id="red" style="color:red"></div>
       <div id="green" style="color:green"></div>
       `;
        let templateBox = document.createElement('div');
        templateBox.innerHTML = box;
        document.getElementById('board').appendChild(templateBox);
}

function randomNum(length){
    let randomNum = [];
    while (randomNum.length < length) {
        let num = Math.floor(Math.random() * 999) + 1;
        if (!(randomNum.includes(num))) {
            randomNum.push(num);
        }
    }
    return randomNum;
}



