// Working Quotes API
const apiURL = "https://dummyjson.com/quotes/random";

// Function to fetch quote
async function getQuote() {

try {

const response = await fetch(apiURL);
const data = await response.json();

// Show quote
document.getElementById("quote").innerText =
'"' + data.quote + '"';

// Show author
document.getElementById("author").innerText =
"- " + data.author;

}

catch(error) {

document.getElementById("quote").innerText =
"Failed to load quote.";

document.getElementById("author").innerText = "";

}

}

// Load quote automatically
getQuote();