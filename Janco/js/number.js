// Map of numbers to words
const numberWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  21: "twentyone",
  22: "twentytwo",
  23: "twentythree",
  24: "twentyfour",
  25: "twentyfive",
  26: "twentysix",
  27: "twentyseven",
  28: "twentyeight",
  29: "twentynine",
  30: "thirty",
  31: "thirtyone",
  32: "thirtytwo",
  33: "thirtythree",
  34: "thirtyfour",
  35: "thirtyfive",
  36: "thirtysix",
  37: "thirtyseven",
  38: "thirtyeight",
  39: "thirtynine",
  40: "forty",
};

let currentNumber = 0;

$(document).ready(function () {
  $("#user-input").keydown(function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#check-btn").click();
    }
  });

  // Show the digit, but check against the word
  $("#number-display").text(currentNumber);
  $("#user-input").focus();

  $("#check-btn").click(function () {
    const userInput = $("#user-input").val().toLowerCase().trim();
    const correctWord = numberWords[currentNumber];

    if (userInput === correctWord) {
      $("#user-input").focus();
      $("#message").text("Good work, Janco! ✅").css({
        fontSize: "30px",
        color: "green",
      });

      currentNumber++;

      if (currentNumber > 40) {
        $("#number-display").text("🎉");
        $("#message")
          .text("You finished! Well done Janco!")
          .css("color", "blue");
        //$("#check-btn").
      } else {
        if (currentNumber > 10) {
          $("#user-input").attr("placeholder", numberWords[currentNumber]);
        }

        setTimeout(() => {
          $("#number-display").text(currentNumber);
          $("#user-input").val("");
          $("#message").text("");
        }, 1000);
      }
    } else {
      $("#message").text("Try again, Janco! ❌").css({
        fontSize: "30px",
        color: "red",
      });
      setTimeout(() => {
        $("#number-display").text(currentNumber);
        $("#user-input").val("");
        $("#message").text("");
      }, 1000);
    }
  });
  const randomColor = "#" + (Math.random().toString(16) + "00000").slice(2, 8);
  $("body").css("background-color", randomColor);
  $("#intro h1").css("color", randomColor);
});
