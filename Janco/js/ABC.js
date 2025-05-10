const abcWords = [
  { letter: "A", word: "apple", image: "../Media/apple.png" },
  { letter: "B", word: "ball", image: "../Media/ball.png" },
  { letter: "C", word: "cat", image: "../Media/cat.png" },
  { letter: "D", word: "dog", image: "../Media/dog.webp" },
  { letter: "E", word: "egg", image: "../Media/egg.webp" },
  { letter: "F", word: "fish", image: "../Media/fish.webp" },
  { letter: "G", word: "daddy", image: "../Media/daddy.jpg" },
  { letter: "H", word: "mommy", image: "../Media/mommy.jpg" },
  { letter: "I", word: "brother", image: "../Media/brother.jpg" },
  { letter: "J", word: "sister", image: "../Media/sister.jpg" },
  { letter: "K", word: "baby", image: "../Media/janco.jpg" },
];

let currentIndex = 0;

$(document).ready(function () {
  function showImage(index) {
    const item = abcWords[index];
    $("#number-display").attr("src", item.image);
    $("#abc-input").val("").focus().attr("placeholder", item.word);
    $("#message").text("");
  }

  showImage(currentIndex);

  $("#abc-input").keydown(function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#buttonAlign").click();
    }
  });

  $("#buttonAlign").click(function () {
    const userInput = $("#abc-input").val().toLowerCase().trim();
    const correctWord = abcWords[currentIndex].word;

    if (userInput === correctWord) {
      $("#message").text("Good job Janco! ✅").css("color", "green");
      setTimeout(() => {
        userInput(currentIndex);
      }, 1000);
      currentIndex++;

      if (currentIndex >= abcWords.length) {
        $("#message").text("You finished the game! 🎉").css("color", "blue");
        $("#number-display").attr("🎉");
      } else {
        setTimeout(() => {
          showImage(currentIndex);
        }, 1000);
      }
    } else {
      $("#message").text("Try again 😊").css("color", "red");
    }
  });
  const randomColor = "#" + (Math.random().toString(16) + "00000").slice(2, 8);
  $("body").css("background-color", randomColor);
  $("#intro h1").css("color", randomColor);
});
