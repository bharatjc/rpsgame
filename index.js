let userScore = 0;
 let compScore = 0;

 const choices = document.querySelectorAll(".gameIcon");
 let msg = document.querySelector(".msg");
 let userScoreHead = document.querySelector(".userScore");
 let compScoreHead = document.querySelector(".compScore");

 let drawGame = ()=>{
  msg.innerText = "Game was draw. Play Again!";
  msg.style.backgroundColor = "#303333";
 }

 let genCompChoice = ()=>{
  const options = ["rock","paper","scissors"]
  let rand = Math.floor(Math.random() * 3);
  return options[rand];
 }

 const showWinner = (userWin, userChoice, compChoice)=>{
  if(userWin){
    userScore++;
    userScoreHead.innerText = userScore;
    msg.innerText = `You won! Your ${userChoice} beats ${compChoice} 👏🎉🌟`;
    msg.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScoreHead.innerText = compScore;
    msg.innerText = `You lost! ${compChoice} beats your ${userChoice} 😭😭`;
    msg.style.backgroundColor = "red";
  }
 }

const playGame = (userChoice)=>{
   const compChoice = genCompChoice();

   if(userChoice === compChoice){
     drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === 'rock'){
      userWin = compChoice === 'paper'? false:true;
    }
    else if(userChoice === 'paper'){
      userWin = compChoice === 'scissors'?false:true;
    }
    else{
      userWin = compChoice === 'rock'?false:true;
    }
    showWinner(userWin, userChoice, compChoice);
   }
 }

 choices.forEach((gameIcon) => {
      gameIcon.addEventListener("click", ()=>{
       let userChoice = gameIcon.getAttribute("id");
       playGame(userChoice);
      });
 });
