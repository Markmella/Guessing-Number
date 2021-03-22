
let randomNumber;
let playerName
let playerAmount;

const btnPlay = document.getElementById("play");
const btnGuess = document.getElementById("guess");
const btnPlayAgain = document.getElementById("play-again");
const btnQuit = document.getElementById("quit");

const playContainer = document.getElementById("playContainer");
const guessContainer = document.getElementById("guessContainer");

btnPlay.addEventListener("click", function(e){
    e.preventDefault();
    
    playerName = document.getElementById("playerName").value;
    playerAmount = document.getElementById("amountInput").value;

    if(playerName == ""){
        Swal.fire({
            icon: 'info',
            width: '350',
            text: 'Please Enter your Player Name'
        })
    }else if(playerAmount == ""){
        Swal.fire({
            icon: 'info',
            width: '350',
            text: 'Please Enter Amount'
        })
    }else {
        randomNumber = Math.floor(Math.random() * 50) + 1;
        console.log("Random Number: " + randomNumber);

        let player = document.getElementById("player");
        let balance = document.getElementById("balance");

        player.innerHTML = playerName;
        balance.innerHTML = playerAmount;
        
        playContainer.style.display = "none";
        guessContainer.style.display = "block";
    }
});

let amountBet = document.getElementById("amountBet");
let bet;
let payout;

amountBet.addEventListener("keyup", function(){
    let amount = document.getElementById("amountBet").value;
    bet = document.getElementById("bet").innerHTML = amount * 1;
    payout = document.getElementById("payout").innerHTML = amount * 2;
});


btnGuess.addEventListener("click", function(e){
    e.preventDefault();

    let guessNumber = document.getElementById("guessNumber").value;
    let playerBet = document.getElementById("amountBet").value;
    
    if(guessNumber == ""){
        Swal.fire({
            icon: 'info',
            width: '350',
            text: 'Please Enter your Guess Number'
        })
    }else if(playerBet == ""){
        Swal.fire({
            icon: 'info',
            width: '350',
            text: 'Please Enter your Amount Bet'
        })
    }else {
        if(playerAmount >= playerBet){
            if(guessNumber < randomNumber){
                playerAmount = playerAmount - playerBet;
                balance.innerHTML = playerAmount;
                console.log("Updated Balance: " + playerAmount);
        
                Swal.fire({
                    icon: 'info',
                    width: '350',
                    title: 'Your Guess is too Low',
                    text: 'Updated Balance: ' + playerAmount
                })
            }else if(guessNumber > randomNumber){
                playerAmount = playerAmount - playerBet
                balance.innerHTML = playerAmount;
                console.log("Updated Balance: " + playerAmount);
        
                Swal.fire({
                    icon: 'info',
                    width: '350',
                    title: 'Your Guess is too High',
                    text: 'Updated Balance: ' + playerAmount
                })
            }else if(guessNumber == randomNumber){
                playerAmount = playerAmount - playerBet;
                let payout = playerBet * 2;
                playerAmount = playerAmount + payout; 
                balance.innerHTML = playerAmount;
                console.log("Updated Balance: " + playerAmount);
    
                Swal.fire({
                    icon: 'success',
                    width: '350',
                    title: 'You Guessed it. You Win!!!',
                    text: 'Updated Balance: ' + playerAmount
                })
                btnPlayAgain.style.display = "block";
                btnGuess.style.display = "none";
            }
        }else if(playerAmount == 0){
            Swal.fire({
                icon: 'error',
                width: '350',
                title: 'You have not enough Balance',
                text: 'Balance: ' + playerAmount
            })
        }else if(playerAmount < playerBet){
            Swal.fire({
                icon: 'error',
                width: '350',
                title: 'Your Balance is too low',
                text: 'Balance: ' + playerAmount
            })
        }
    }


    document.getElementById("playerName").value = "";
    document.getElementById("amountInput").value = "";
});

btnPlayAgain.addEventListener("click", function(e){
    e.preventDefault();
    randomNumber = Math.floor(Math.random() * 50) + 1;
    console.log("Random Number: " + randomNumber);

    document.getElementById("guessNumber").value = "";
    document.getElementById("amountBet").value = "";
    btnGuess.style.display = "block";
    btnPlayAgain.style.display = "none";
});

btnQuit.addEventListener("click", function(e){
    e.preventDefault();
    guessContainer.style.display = "none";
    playContainer.style.display = "block";
    playerName = document.getElementById("playerName").value = "";
    playerAmount = document.getElementById("amountInput").value = "";
    document.getElementById("guessNumber").value = "";
    document.getElementById("amountBet").value = "";
});



