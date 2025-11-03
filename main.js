
const prompt = require("prompt-sync")({ sigint: true });




let taxisList = [
    {
        id: 1, position: 5, available: true, timeRemaining: 0, totalRides:
            0
    },
    {
        id: 2, position: 12, available: true, timeRemaining: 0,
        totalRides: 0
    },
    {
        id: 3, position: 20, available: true, timeRemaining: 0,
        totalRides: 0
    }
]

let requestList = [];

let taxiStatisticList = [];

let requestQueue = [];

start();


function start() {
    do {
        let operationNumber;
        operationNumber = ChoisirUneOption(menu());

        ChoisirUneOperationAFaire(operationNumber);

        exit = isExist(operationNumber);
    } while (!exit);
}

function ajouterUneRequest() {
    // { reqId: 1, position: 10, duration: 3, time: 0 },
    let requestObjet;
    position = prompt("Entrez la position de la request : ");
    duration = prompt("Entrez la duration de la request : ");
    // increment the req id.
    reqId++;
    // fill out the object.
    tacheObjet = {
        reqId: reqId,
        position: position,
        duration: duration,
        time: '1:40', // i'll modify time to a real one to be realistic
    };
    // add the current object to the list .
    requestList.push(requestObjet);
    console.log("<----- Request été ajoutée avec succès", "S'l vous plait rappl bien ton request id :", reqId, "! ----->");
    console.log("<----- Tape sur (3) pour envoyer ta demende a le taxieur ! ----->");
}
function afficherLesStatistiques() {

}

function getRequestPositionById(reqId) {
    for (const element of requestList) {
        if (element.reqId == reqId) {
            return element.position;
        }
    }
    console.log('OUPS!!!Ton request ID ', reqId, ' est introuvable');
}

function searchForAvailableAndClosestTaxi(reqId) {
     let position = getRequestPositionById(reqId);
    for (let index = 0; index < taxisList.length; index++) {
        const element = array[index];
        

    }
}

function prenderUnTaxi() {
    let reqId = +prompt("S'il vous plait entrer ton request ID : ");
    // Search for taxi by (Nearst position to the request position) & by availablity.
    searchForAvailableAndClosestTaxi(reqId);
    /*
    - If was available => 
        { 
    request will take the taxi, then add it in history:
    taxi id,
    request position,
    total rides
    }
    */


    // - If was'nt available =>{ Add the request in queue, and show to the use the time when the taxi become available}
}

// i'm gonna call that fun for make the user wainting until the taxi become available.
function timer(countdownSeconds, waitingTime) {
    if (countdownSeconds >= 0) {
        countdownSeconds--; // Decrement the time
        console.log('-------- Tu dois attendre le taxi Numéro :', 1, ' ce temp là : ', waitaingTaxiTimer(timer, waitingTime), '--------');
    } else {
        clearInterval(waitaingTaxiTimer(timer, waitingTime)); // Stop the timer when it reaches 0
        console.log("Taper sur le Numero (3) pour prend le Taxi ");
        return;
    }
}

function waitaingTaxiTimer(callback, waitingTime) {
    return timerInterval = setInterval(callback(countdownSeconds), waitingTime);
}




// Functions for the menu.
function menu() {
    let menuInfo =
        " === Smart Taxi Dispatcher === \n 1. Ajouter les requests\n 2. Prend un taxi \n 3. Afficher les Statistique d' [Taxi & Demande] \n 0. Quitter";
    console.log(menuInfo);
    return +prompt("Choisissez une option : ");
}
function ChoisirUneOption(operationNumber) {
    if (isNaN(operationNumber) == true) {
        console.log("S'il te plait entre a nomber\n ");
        operationNumber = +prompt("Choisissez une option : ");
    } else if (operationNumber > 3) {
        console.log("S'il te plait entre inferieur a ", operationNumber, "\n");
        operationNumber = +prompt("Choisissez une option : ");
    } else if (operationNumber < 0) {
        console.log("S'il te plait entre superieur a ", operationNumber, "\n");
        operationNumber = +prompt("Choisissez une option : ");
    }
    return operationNumber;
}

function ChoisirUneOperationAFaire(operationNumber) {
    if (operationNumber == 1) ajouterUneRequest();
    if (operationNumber == 2) prenderUnTaxi();
    if (operationNumber == 3) afficherLesStatistiques();
}

function isExist(nomber) { return nomber == 0 ? true : false; }


