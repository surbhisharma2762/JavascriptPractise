const quote = document.getElementById("quote");
const author = document.getElementById("author");
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = "https://zenquotes.io/api/random";

async function getQuote(url) {
    try {
        const response = await fetch(proxyUrl + url);
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data[0].q; // Accessing the quote text
        author.innerHTML = `- ${data[0].a}`; // Accessing the author
    } catch (error) {
        console.error("Error fetching the quote:", error);
    }
}

getQuote(apiUrl);
function tweet(){
    window.open("https://www.threads.net/intent/post?text=https%3A%2F%2Fengineering.fb.com%2F2023%2F11%2F06%2Fandroid%2Fhow-meta-built-threads-in-5-months")
}
