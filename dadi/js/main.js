const dadoUser = Math.floor((Math.random() * 6) + 1);
console.log(dadoUser);

const dadoPc = Math.floor((Math.random() * 6) + 1);
console.log(dadoPc);

if(dadoUser > dadoPc){

    console.log("Ha vinto l'utente");

}else if(dadoPc > dadoUser){

    console.log("Ha vinto il PC")

}else{

    console.log('Pareggio');
}