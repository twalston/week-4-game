$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    // Selects a random number to be shown at the start of the game

    $('#randomNumber').text(Random);
    // Appending random number to the randomNumber 
  
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    // Random number has to be between 1 - 12
    
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;

  //  Decaring variables 
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);

  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#finalTotal').text(userTotal);
        } 

  //adds the wins to the userTotal
  function win(){
  alert("Game Blouses!");
    wins++; 
    $('#numberWins').text(wins);
    reset();
  }

  //adds the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numberLosses').text(losses);
    reset()
  }

  //sets up click for characters
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
            //sets win/lose conditions
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }   
    })  

    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
          if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  

    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal);

  //sets win/lose conditions
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  
    
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
        
            if (userTotal == Random){
            win();
          }
          else if ( userTotal > Random){
            loser();
          }
    });   
  }); 
  
