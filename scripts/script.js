async function setRandomSentence() {
  const quotes = await fetch("../data/sentences.json").then((res) => res.json());
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const quoteEL = document.querySelector("#quote");
  quoteEL.innerText = randomQuote.body;

  const authorEL = document.querySelector("#quote-author");
  authorEL.innerText = randomQuote.author;
}

/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */

function showMessage(message, type) {
  const messageEl = document.querySelector("#msg");
  messageEl.innerText = message;
  messageEl.classList.add(`text-${type}`);
}

function calculateBmi(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(1);
}

function validatorBmi(event) {
  event.preventDefault();

  const weight = document.querySelector("form input[name='weight']").value;
  const height = document.querySelector("form input[name='height']").value;

  if (!weight || !height) return showMessage("", "danger");
  if (weight < 10 || weight > 200 || height < 70 || height > 200)
    return showMessage("اطلاعات وارد شده صحیح نمی‌باشد.", "danger");
  return showMessage(`شاخص توده بدنی شما ${calculateBmi()} می‌باشد.`, "success");
}

setRandomSentence();
getTime();
document.querySelector("form").addEventListener("submit", validatorBmi);
