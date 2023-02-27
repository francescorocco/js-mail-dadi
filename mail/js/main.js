// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

const mailUser = prompt('Inserisci la tua mail;');
console.log (mailUser);

const mailSheet = ['francesco.rocco@gmail.com', 'simone.giusti@gmail.com', 'daniele.martini@gmail.com', 'paolo.mistretta@gmail.com'];
console.log (mailSheet);


for(let i = 0; i < mailSheet.length; i++){

    if(mailUser == mailSheet[i]){

        console.log('Mail verificata');
        i = mailSheet.length;

    }else if(i == (mailSheet.length - 1)){

        console.log('La sua mail non corrisponde');
    }
}