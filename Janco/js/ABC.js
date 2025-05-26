const abcWords = [
  { letter: "A", word: "apple", image: "../Media/apple.png" },
  { letter: "B", word: "brother", image: "../Media/brother.jpg" },
  { letter: "C", word: "cat", image: "../Media/cat.png" },
  { letter: "D", word: "daddy", image: "../Media/daddy.jpg" },
  { letter: "E", word: "egg", image: "../Media/egg.webp" },
  { letter: "F", word: "fish", image: "../Media/fish.webp" },
  { letter: "G", word: "goat", image: "../Media/goat.jpg" },
  { letter: "H", word: "horse", image: "../Media/horse.jpg" },
  { letter: "I", word: "igloo", image: "../Media/igloo.jpg" },
  { letter: "J", word: "juice", image: "../Media/juice.jpg" },
  { letter: "K", word: "king", image: "../Media/king.jpg" },
  { letter: "L", word: "lion", image: "../Media/lion.png" },
  { letter: "M", word: "mommy", image: "../Media/mommy.jpg" },
  { letter: "N", word: "nest", image: "../Media/nest.jpg" },
  { letter: "O", word: "owl", image: "../Media/owl.jpg" },
  { letter: "P", word: "panda", image: "../Media/panda.webp" },
  { letter: "Q", word: "queen", image: "../Media/queen.webp" },
  { letter: "R", word: "rabbit", image: "../Media/rabbit.jpg" },
  { letter: "S", word: "sister", image: "../Media/sister.jpg" },
  { letter: "T", word: "tiger", image: "../Media/tiger.jpg" },
  { letter: "U", word: "up", image: "../Media/up.jpg" },
  { letter: "V", word: "vase", image: "../Media/vase.jpg" },
  { letter: "W", word: "whale", image: "../Media/whale.jpg" },
  { letter: "X", word: "x-ray", image: "../Media/xray.webp" },
  { letter: "Y", word: "yak", image: "../Media/yak.jpg" },
  { letter: "Z", word: "zebra", image: "../Media/zebra.jpg" },
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
        $("#number-display").text("🎉");
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
