const startGame = document.getElementById("startButton");
const container = document.getElementById("container");
const startpage = document.getElementById("startPage");


function StartGameFunc() {
 startpage.style.display = "none";
 container.style.display = "block";
 
};


let result = document.getElementById("result");
let computer_score = 0;
let user_score = 0;
let movesleft = 12;




let choiceObject = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose',
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw',
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },

}

function winner(input){

let computerChoices = ["rock" , "paper", "scissor"];
let computerChoose = Math.floor(Math.random()*3);


document.getElementById("computerchoice").textContent =
`Computer Choose: "${computerChoices[computerChoose].toUpperCase()}"`;



document.getElementById("playerchoice").textContent =
`You Choose: "${input.toUpperCase()}"`;

let computer = computerChoices[computerChoose];

switch(choiceObject[input][computer]){

    case 'win' :
        result.innerHTML = "You Gained Point";
        user_score++;
        movesleft--;
        break;
    
    case 'lose':
        result.innerHTML = "You Lose the point";
        computer_score++;
        movesleft--;
        break;

    default :
        result.innerHTML = "Draw ! No Points"; 
        movesleft--;
        break;
    }

document.getElementById("computer_score").innerHTML = computer_score;
document.getElementById("user_score").innerHTML = user_score;
document.getElementById("remainingMoves").innerHTML = movesleft

if(movesleft === 0){
    document.getElementById("movesleft").textContent = "GAME OVER"
    document.querySelector(".btn1").disabled = true;
    document.querySelector(".btn2").disabled = true;
    document.querySelector(".btn3").disabled = true;

    
    if(computer_score < user_score){
        result.textContent = "YOU ARE THE WINNER"
        result.style.cssText = "background-color: #cefdce; color: #689f38";
        
    }
    else if(computer_score > user_score){
        result.textContent = "SORRY YOU LOSE. TRY AGAIN"
        result.style.cssText = "background-color: #ffdde0; color: #d32f2f";
    }
    else{
        result.textContent = "MATCH DRAW"
        result.style.cssText = "background-color: #e5e5e5; color: #808080";
    }

    document.getElementById("playerchoice").style.display = "none";
    document.getElementById("computerchoice").style.display = "none";

}
}






