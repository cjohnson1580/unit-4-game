$(document).ready(() => {

  //program generates a random number between 19 and 120
  let randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  $('#randNum').html(randNumber);

  //each crystal has a hidden value i.e. random number between1 and 12
  let yellow = Math.floor(Math.random() * 12) + 1;
  let green = Math.floor(Math.random() * 12) + 1;
  let red = Math.floor(Math.random() * 12) + 1;
  let blue = Math.floor(Math.random() * 12) + 1;

  //player clicks the crystals to display value to totScore
  let wins = 0; //#wins
  let losses = 0;  //#losses

  let totScore = 0;
  $('#totScore').text(totScore);

  function win() {
      wins = wins + 1;
      $('#wins').text(wins);
      resetTwo();
      reset();
  }

  function lose() {
      losses = losses + 1;
      $('#losses').text(losses);
      resetTwo();
      reset();
  }

  $('#yellow').click(() => {
      totScore = totScore + yellow
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
          resetTwo();
      } else if (totScore > randNumber) {
          lose();
          reset();
          resetTwo();
      }
  });

  $('#green').click(() => {
      totScore = totScore + green;
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
          resetTwo();
      } else if (totScore > randNumber) {
          lose();
          reset();
          resetTwo();
      }
  });

  $('#red').click(() => {
      totScore = totScore + red;
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
          resetTwo();
      } else if (totScore > randNumber) {
          lose();
          reset();
          resetTwo();
      }
  });

  $('#blue').click(() => {
      totScore = totScore + blue;
      $('#totScore').text(totScore);
      if (totScore === randNumber) {
          win();
          reset();
          resetTwo();
      } else if (totScore > randNumber) {
          lose();
          reset();
          resetTwo();
      }
  });

  //random numbers (jewels) get added together: look above
  //script determines if player wins or loses and outcome recorded in winsLosses
  //game restarst, page does NOT reload
  function reset() {
      totScore = 0;
      $('#totScore').text(totScore);
  }

  function resetTwo() {
      randNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
      $('#randNum').html(randNumber);
      yellow = Math.floor(Math.random() * 12) + 1;
      green = Math.floor(Math.random() * 12) + 1;
      red = Math.floor(Math.random() * 12) + 1;
      blue = Math.floor(Math.random() * 12) + 1;
  }
});