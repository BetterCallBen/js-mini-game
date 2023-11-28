const button = document.querySelector("button");
const title = document.querySelector("h1");

button.addEventListener("click", () => {
  title.classList.add("green");
});
