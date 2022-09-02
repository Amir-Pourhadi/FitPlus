async function setRandomSentence() {
  const quotes = await fetch("../data/sentences.json").then((res) => res.json());
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteEL = document.querySelector("#quote");
  const authorEL = document.querySelector("#quote-author");
  quoteEL.innerText = randomQuote.body;
  authorEL.innerText = randomQuote.author;
}

setRandomSentence();
