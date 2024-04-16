function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9faada74e0td93b882032b77odf27ad4";
  let context = `You are a ketogenic food expert and write clear, quick recipes for the user. 
  Please write the recipe as if it was in a cookbook.  Make sure to follow the user instructions.`;
  let prompt = `User instructions: Generate a step-by-step ketogenic recipe with ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = `<span class="blink">🍳</span>Generating ketogenic recipe with ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
