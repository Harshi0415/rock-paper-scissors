/*const score = {
        wins :0,
        losses :0,
        ties :0
        };*/



        let score = JSON.parse(localStorage.getItem('score')); //JSON.parse() function converts back to the original object

        if(score === null){ //for condition in shortcut we can also use !score
            score ={
                wins :0,
                losses :0,
                ties :0
            }; 
        }

        updateScoreElement();
    function playGame(playerMove)
    {
        const computerMove = pickCompMove();
        let result ='';
    if(playerMove === 'scissors')
    {
        if(computerMove === 'rock')
    {
        result = 'You lose';
    }
    else if(computerMove === 'paper')
    {
        result = 'You win';
    }
    else if(computerMove === 'scissors')
    {
        result = 'Tie';
    }}
    //paper
    else if(playerMove === 'paper')
    {
        if(computerMove === 'rock')
    {
        result = 'You win';
    }
    else if(computerMove === 'paper')
    {
        result = 'Tie';
    }
    else if(computerMove === 'scissors')
    {
        result = 'You lose';
    }
    }

    //Rock
    else if(playerMove === 'rock')
    {
        let result ='';
    if(computerMove === 'rock')
    {
        result = 'Tie';
    }
    else if(computerMove === 'paper')
    {
        result = 'You lose';
    }
    else if(computerMove === 'scissors')
    {
        result = 'You win';
    }
    }
    if(result === 'You win')
    {
        score.wins+=1;
    }
    else if(result === 'You lose')
    {
        score.losses+=1;
    }
    else if(result ==='Tie')
    {
        score.ties+=1;
    }
    //to store the score permenently in the browser ,even after refressh we use local storage
     localStorage.setItem('score',JSON.stringify(score)); //
//JSON.stringify() function converts the object into a string so that it can be stored in local storage
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML  = `You 
    <img src="${playerMove}-emoji.png" class="move-icon">
        <img src="${computerMove}-emoji.png" class="move-icon">Computer`;

    
    
   // alert(`You picked ${playerMove}.Computer picked ${computerMove}. ${result}
   // wins:${score.wins},lossses:${score.losses},ties:${score.ties}`);
 }

    function updateScoreElement(){
        document.querySelector('.js-score')
    .innerHTML = ` Wins:${score.wins}, Lossses:${score.losses}, Ties:${score.ties}`;
    
    }

    function pickCompMove()
    {
    const randomNumber = Math.random();
    let computerMove = '';
    
    if(randomNumber >= 0 && randomNumber < 1/3)
    {
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3)
    {
        computerMove = 'paper';
    }
    else if(randomNumber >=2/3 && randomNumber < 1)
    {
        computerMove ='scissors';
    }
    return computerMove;
    }
