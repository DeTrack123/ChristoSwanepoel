const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let index = 0;

function updateQuestion() {
  const currentDay = index === 0 ? "Sunday" : days[index - 1];
  $('#question').text("What comes after " + currentDay + "?");
  $('#answerInput').val('').focus();
  $('#feedback').text('');
}

$('#checkBtn').click(function () {
  const userAnswer = $('#answerInput').val().trim();
  const correctAnswer = days[index];

  if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
    $('#feedback').html("✅ Correct! Well done! 🎉");
    index++;
    if (index < days.length) {
      setTimeout(updateQuestion, 1500);
    } else {
      $('#question').text("You did it, Janco! 🏆");
      $('#answerInput').hide();
      $('#checkBtn').hide();
    }
  } else {
    $('#feedback').html("❌ Try again, buddy!");
  }
});

updateQuestion();