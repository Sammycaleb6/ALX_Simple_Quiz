<script>
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // If no option is selected, optionally handle that case
    if (!selectedOption) 
      {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
      }

    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Attach the event listener to the submit button
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-answer");
    submitButton.addEventListener("click", checkAnswer);
});
</script>
