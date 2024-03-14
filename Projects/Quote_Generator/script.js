console.log("Random Quote Generator");

// const category = "knowledge";
// const API_KEY = "sy0w3/aEsHYjaFy1yBMb/w==VZUB5uS2GJmVn5TB"; // Replace "your_api_key" with your actual API key
// const QUOTE_API = `https://api.api-ninjas.com/v1/quotes?category=${category}&api_key=${API_KEY}`;

// async function generateQuote() {
//   const url =
//     "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "72866ffd16mshc5161b9b3261e08p1963e7jsn8ce921d7f0ec",
//       "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }

const API_URL =
  "https://numbersapi.p.rapidapi.com/6/21/date?fragment=true&json=true";
const quoteText = document.querySelector("#quoteText");
async function generateQuote() {
  const option = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "72866ffd16mshc5161b9b3261e08p1963e7jsn8ce921d7f0ec",
      "X-RapidAPI-Host": "numbersapi.p.rapidapi.com",
    },
  };

  try {
    const res = await fetch(API_URL, option);
    const data = await res.json();
    console.log(data);

    quoteText.innerHTML = data.text;
  } catch (error) {
    console.log(error);
  }
}
