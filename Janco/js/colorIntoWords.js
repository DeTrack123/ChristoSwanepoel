const randomColor = "#" + (Math.random().toString(16) + "00000").slice(2, 8);
$("body").css("background-color", randomColor);
$("#intro h1").css("color", randomColor); // List of color names
const colorWords = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
];

let currentIndex = 0;

$(document).ready(function () {
  function showColor(index) {
    const color = colorWords[index];
    $("#colorDisplay").css({
      "background-color": color,
      background: `radial-gradient(closest-side, ${color} 60%, transparent 100%)`,
    });
    $("#user-input").val("");
    $("#message").text("");
    $("#user-input").focus();
    $("#user-input").attr("placeholder", color);
  }

  // Show the first color
  showColor(currentIndex);

  $("#user-input").keydown(function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      $("#check-btn").click();
    }
  });

  $("#check-btn").click(function () {
    const userInput = $("#user-input").val().toLowerCase().trim();
    const correctColor = colorWords[currentIndex];

    if (userInput === correctColor) {
      $("#message").text("Well done, superstar! 👏🏽").css({ color: "green" });
      currentIndex++;

      if (currentIndex >= colorWords.length) {
        $("#message")
          .text("Yippee! You did an AMAZING job Janco! 😄🎉")
          .css("color", "blue");
        $("#color-display").css("background-color", "white");
      } else {
        setTimeout(() => {
          showColor(currentIndex);
        }, 1000);
      }
    } else {
      $("#message").text("Try again 😊").css("color", "red");
    }
  });
});
