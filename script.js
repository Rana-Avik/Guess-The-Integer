  let num = Math.floor(Math.random() * 50) + 1; // random integer between 1 and 50
  let attempts = 0;
  let score = 0;

  function updateDisplay() {
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("score").textContent = score;
  }

  function check() {
    const input = document.getElementById("number");
    const val = parseInt(input.value, 10);

    if (isNaN(val)) {
      alert("Please enter a valid integer.");
      input.value = "";
      return;
    }
    if (val < 1 || val > 50) {
      alert("Please enter a number between 1 and 50. Attempts reset to 0.");
      attempts = 0;
      updateDisplay();
      input.value = "";
      return;
    }

    attempts++;
    updateDisplay();

    if (val === num) {
      alert("You have got it correct. CONGRATS!!");
      score++;
      updateDisplay();
      num = Math.floor(Math.random() * 50) + 1;
      attempts = 0;
      updateDisplay();
      input.value = "";
      return;
    } else if (val > num) {
      alert("Your guess is too high!");
    } else {
      alert("Your guess is too low!");
    }

    // Hints
    if (attempts === 3 && val !== num) {
      if (num % 2 === 0) {
        alert("Hint: The Number is Divisible by 2");
      } else if (num % 3 === 0) {
        alert("Hint: The Number is Divisible by 3");
      } else if (num % 5 === 0) {
        alert("Hint: The Number is Divisible by 5");
      } else {
        alert("Hint: The Number is not Divisible by 2, 3, or 5");
      }
    }
    if (attempts === 4 && val !== num) {
      if (num % 6 === 0) {
        alert("Hint: The Number is Divisible by 6");
      } else if (num % 10 === 0) {
        alert("Hint: The Number is Divisible by 10");
      } else if (num % 13 === 0) {
        alert("Hint: The Number is Divisible by 13");
      } else {
        alert("Hint: The Number is not Divisible by 6, 10, or 13");
      }
    }

    if (attempts === 10 && val !== num) {
      alert("Out of attempts! The correct number was: " + num);
      num = Math.floor(Math.random() * 50) + 1;
      attempts = 0;
      updateDisplay();
    }

    input.value = "";
  }

  function revealNumber() {
    const input = document.getElementById("number");
    if (attempts >= 6) {
      alert("The correct number was: " + num);
      num = Math.floor(Math.random() * 50) + 1;
      attempts = 0;
      updateDisplay();
      input.value = "";
    } else {
      alert("First try then..");
      input.value = "";
    }
  }

 
  window.onload = function() {
    updateDisplay();
  }
    
 