let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#computer-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
    //rock,paper,scissor
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game Draw!";
}

const showWinner = (user_win,userchoiceId,computerchoice) => {
    if(user_win)
    {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You Win! your ${userchoiceId} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
    }else
    {
        computerscore++;
        compscorepara.innerText = computerscore;
        msg.innerText = `You Lose! computer ${computerchoice} beats ${userchoiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoiceId) => {
    console.log("user choice = ", userchoiceId);
    // Generate computer choice
    const computerchoice = gencompchoice();
    console.log("comp choice = ", computerchoice);

    if(userchoiceId === computerchoice){
        drawGame();
}else{
    let user_win = true;
    if(userchoiceId === "rock")
    {
        user_win = computerchoice === "paper" ? false : true ;
    }else if(userchoiceId === "paper")
    {
        user_win = computerchoice === "scissor" ? false : true;
    }else{
       user_win = computerchoice === "rock" ? false : true;
    }
    showWinner(user_win,userchoiceId,computerchoice);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoiceId = choice.getAttribute("id");
        playgame(userchoiceId);
    });
});
