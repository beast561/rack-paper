let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
    //dramgame condition
    const dramgame=()=>{
        console.log("game was draw");
        msg.innerText="Game was Draw.Play again.";
        msg.computedStyleMap.background="#081b31"
    }
    //wingame condition
    const showWinner =(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText='you Win!';
            msg.style.background="green";
        }
        else{
            compScore++;
            compScorePara.innerText = compScore;
            msg.innerText='you lost.';
            msg.style.background="red";
        }
    }
    const playgame=(userChoice)=>{
        console.log("user choice = ",userChoice);
        //generate computer choice
        const compChoice=gencompChoice();
        console.log("comp choice = ",compChoice);
        if(userChoice === compChoice){
            //dramgame
            dramgame();
        }else{
            let userWin =true; 
            if(userChoice ==="rock"){
                //scissors ,paper
                userWin = compChoice ==="paper"?false : true;
            }else if(userChoice ==="paper"){
                //rock,secissprs
                userWin = compChoice ==="scissors"?false : true;
            }else{
                //rock,paper
                userWin =compChoice ==="rock"? false:true;

            }
            showWinner(userWin,userChoice,compChoice);

        }

    }
    
choices. forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userScore=choice.getAttribute("id");
    playgame(userScore);
    })
})