/* ---------------------------------- Quote --------------------------------- */
async function setRandomSentence() {
  const quotes = await fetch("../data/sentences.json").then((res) => res.json());
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteEL = document.querySelector("#quote");
  quoteEL.innerText = randomQuote.body;

  const authorEL = document.querySelector("#quote-author");
  authorEL.innerText = randomQuote.author;
}

/* ---------------------------------- Time ---------------------------------- */
function getTime() {
  function formatTime(num) {
    return num.toString().padStart(2, "0");
  }

  setInterval(() => {
    const now = new Date();
    const time = `${formatTime(now.getHours())}:${formatTime(now.getMinutes())}:${formatTime(now.getSeconds())}`;

    const timeEl = document.querySelector("#time");
    timeEl.innerText = time;
    timeEl.style.fontFamily = "Nazanin, sans-serif";
  }, 1000);
}

setRandomSentence();
getTime();
