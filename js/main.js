/*
        !TODO: 

           // 1. L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

           // 2. L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

            3. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

            4. Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while

            5. Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array

            6. Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

            7. Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di invitati.

*/

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
                                                        DEBUG
    ========================================================================================================
    
*/

//maxNum();
maxWord();