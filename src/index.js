function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The Poem",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  poemElement.innerHTML = "the Poem";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
