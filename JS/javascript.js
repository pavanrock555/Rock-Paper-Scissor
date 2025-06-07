let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#Comp-score");

const genCompChoice = ()=>{
    const options=["rock","paper","scissors"];
    //Math.floor(Math.random()*3);
    const randomid=Math.floor(Math.random()*3);
    return options[randomid];

}
const drawGame=()=>
{
    console.log("game was draw");
}

const playGame= (userChoice) =>{
    console.log("user choice is ",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice is ",compChoice);
     if(userChoice=="paper" && compChoice=="scissors")
        {
            console.log("winner is computer");
            msg.innerText="You Lose! Scissors beats paper";
            msg.style.backgroundColor="red";
           compScore++;
           compScorePara.innerText=compScore;
        }
        else if(userChoice=="rock" && compChoice=="paper")
        {
            console.log("winner is computer");
            msg.innerText='You Lose! Paper beats rock' ;
            msg.style.backgroundColor="red";
            compScore++;
            compScorePara.innerText=compScore;
        }
        else if(userChoice=="scissors"&& compChoice=="rock")
        {
            console.log("winner is computer ");
            msg.innerText="You Lose! Rock beats scissors";
            msg.style.backgroundColor="red";
            compScore++;
            compScorePara.innerText=compScore;
        }
        else if(userChoice==compChoice)
        {
            drawGame();
            msg.innerText="It's a Draw Play Again ";
            msg.style.backgroundColor="#081b31";
        }
        else{
            if(userChoice=="rock"&& compChoice=="scissors")
                {
                    console.log("winner is user");
                    msg.innerText="You Win! Rock beat scissors";
                    msg.style.backgroundColor="green";
                    userScore++;
                    userScorePara.innerText=userScore;  
                }
                else if(userChoice=="paper" && compChoice=="rock")
                {
                    console.log("winner is user");
            msg.innerText="You Win!Paper beats rock ";
            msg.style.backgroundColor="green";
            userScore++;
            userScorePara.innerText=userScore;
                }
                else{
            
            console.log("winner is user");
            msg.innerText="You Win! Scissors beats paper";
            msg.style.backgroundColor="green";
            userScore++;
            userScorePara.innerText=userScore;
                }  
              }

}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
    //console.log("choice was clicked",userChoice);
    playGame(userChoice);

    })
})
