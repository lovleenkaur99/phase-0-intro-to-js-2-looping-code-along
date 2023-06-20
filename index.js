// Code your solutions in this file

function writeCards(nameArray, event){
    let thankYourCard = [];
    for (let i = 0; i < nameArray.length; i++) { 
        thankYourCard.push(`Thank you, ${nameArray[i]}, for the wonderful surprise gift!`)
    }
    return thankYourCard
}

function countDown(startingNumber){ 
    while(startingNumber > 0) { 
        console.log(startingNumber); 
        startingNumber -=1;
    }
    console.log(startingNumber)
}
