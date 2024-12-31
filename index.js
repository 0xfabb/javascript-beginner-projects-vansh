const screen = document.querySelector(".scn");
const otp = document.querySelector("h1");

const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  otp.innerHTML = Math.floor(Math.random() * 10000);
});
