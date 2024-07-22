function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "62fb8e28a4eab4a583ea42bf3ofat058";
  let prompt = `User Instructions: Generate a Harry Potter poem about ${instructionsInput.value}`;
  let context =
    "You are a fantasy book reader, generate a 4 line poem, please make sure to follow user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a poem for you about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPoem);

  //poemElement.innerHTML = "the Poem";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
