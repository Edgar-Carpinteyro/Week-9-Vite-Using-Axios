import axios from "axios";

async function fetchRandomCatImage() {
  try {
    const response = await axios.get("https://cataas.com/cat?json=true");
    if (response.status !== 200) {
      throw new Error("Network response was not ok!");
    }
    const catData = response.data;
    if (catData._id) {
        const catImage = document.createElement("img");
        catImage.src = `https://cataas.com/cat/${catData._id}`;
        catImage.alt = "Random Cat";
        catImageContainer.appendChild(catImage);
      }
    return catData;
  } catch (error) {
    console.error("Axios error:", error);
    throw error;
  }
}

export { fetchRandomCatImage };
