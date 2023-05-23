function submitTest() {
  var answers = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
    q4: document.querySelector('input[name="q4"]:checked').value,
    q5: document.querySelector('input[name="q5"]:checked').value
  };

  var correctAnswers = {
    q1: "b",
    q2: "a",
    q3: "c",
    q4: "b",
    q5: "a"
  };

  var score = 0;

  for (var question in answers) {
    if (answers[question] === correctAnswers[question]) {
      score++;
    }
  }

  var result = "Ваш результат: " + score + " з 5";
  var resultElement = document.createElement("p");
  resultElement.textContent = result;

  document.body.appendChild(resultElement);
}
