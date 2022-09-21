let text = document.querySelector(".highscore");
let score = 10;
const secretNumber = Math.trunc(Math.random() * 20 + 1);


document.querySelector(".again").addEventListener("click", function(){
    window.location.reload();
});
document.querySelector(".check").addEventListener("click", function () {
  const guss = Number(document.querySelector(".guess").value);

  if (!guss) {
    document.querySelector(".message").innerHTML = "⛔ No guess";
  } else if (guss === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").innerHTML = "🎉 correct Number";
    document.body.style.backgroundColor = "green";
  } else if (guss > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").innerHTML = "📈 Too High";
      score--;
      document.querySelector(".score").innerHTML = score;
    } else {
      document.querySelector(".message").innerHTML = " You Lost The Game";
      document.querySelector(".score").innerHTML = 0;
    }
  } else if (guss < secretNumber) {
    if (score > 1) {
        document.querySelector(".message").innerHTML = "📉 Too low";
        score--;
        document.querySelector(".score").innerHTML = score;
      } else {
        document.querySelector(".message").innerHTML = " You Lost The Game";
        document.querySelector(".score").innerHTML = 0;
        document.body.style.backgroundColor = "#c9184a";
        setTimeout(function() { 
            window.location.reload();
        },2000)
      }
  }
});
