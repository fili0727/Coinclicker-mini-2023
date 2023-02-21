window.addEventListener("load", start);

function start() {
  console.log("start");
  document
    .querySelector("#coin1_container")
    .addEventListener("click", clickCoin);
  document.querySelector("#coin1_container").classList.add("falling");
  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);
}

function clickCoin() {
  console.log("clickcoin");
  document.querySelector("#coin1_container").classList.add("paused");
  document.querySelector("#coin1_sprite").classList.add("zoom_out");
  document
    .querySelector("#coin1_container")
    .addEventListener("animationend", coinGone);
}

function coinGone() {
  console.log("hej");
  document
    .querySelector("#coin1_container")
    .removeEventListener("animationend", coinGone);
  document.querySelector("#coin1_sprite").classList.remove("zoom_out");
  document.querySelector("#coin1_container").classList.remove("paused");
  document.querySelector("#coin1_container").classList.remove("falling");
  document.querySelector("#coin1_container").offsetWidth;
  document.querySelector("#coin1_container").classList.add("falling");
  document
    .querySelector("#coin1_container")
    .addEventListener("click", clickCoin);
}

function clickBomb() {
  console.log("bomb");
  document
    .querySelector("#bomb_container")
    .addEventListener("click", clickBomb);
  document.querySelector("#bomb_container").classList.add("paused");
  document.querySelector("#bomb_sprite").classList.add("zoom_out");
  document
    .querySelector("#bomb_container")
    .addEventListener.add("animationend", bombGone);
}

function bombGone() {
  document.querySelector("#bomb_sprite");
}
