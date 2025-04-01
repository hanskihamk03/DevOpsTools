const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Opportunities don't happen, you create them.", author: "Chris Grosser" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const copyQuoteBtn = document.getElementById("copy-quote");

// Function to generate a new quote
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteText.textContent = `"${quote.text}"`;
    authorText.textContent = `- ${quote.author}`;
}

// Function to copy the current quote to clipboard
function copyQuote() {
    const textToCopy = `${quoteText.textContent} ${authorText.textContent}`;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Quote copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    });
}

// Event Listeners
newQuoteBtn.addEventListener("click", generateQuote);
copyQuoteBtn.addEventListener("click", copyQuote);

// Generate an initial quote when the page loads
generateQuote();
