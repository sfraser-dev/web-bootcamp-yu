window.addEventListener("load", () => {
  for (let i of document.querySelectorAll(".gallery-sloths img")) {
    i.onclick = () => i.classList.toggle("full");
  }
});