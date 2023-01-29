
export default async function (codePrompt: string) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      method: "POST",
      body: JSON.stringify({
        model: "code-davinci-002",
        prompt: codePrompt,
        temperature: 0.6,
        n: 1,
        // size: '1024x1024'
      })
    });
    const { choices } = await response.json();
    const { text } = choices[0];
    const rawData = text.trimStart().replace(/^Output: /, "");
    console.log(rawData);
    return rawData;
  } catch (error) {
    // Consider adjusting the error handling logic for your use case
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}
