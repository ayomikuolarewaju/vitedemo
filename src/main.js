const button = document.querySelector("#btn");
button.style.padding = "10px";
button.addEventListener("click", () => {
  const head = document.querySelector("#head");
  head.innerHTML = "dont giveup";
  head.style.padding = "15px";
});
