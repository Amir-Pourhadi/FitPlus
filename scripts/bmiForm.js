/* ----------------------------------- BMI ---------------------------------- */
function loadForm() {
  const heightEl = document.querySelector("form input[name='height']");
  const height = localStorage.getItem("height");
  heightEl.value = height;

  const weightEl = document.querySelector("form input[name='weight']");
  const weight = localStorage.getItem("weight");
  weightEl.value = weight;

  calculateBmi(height, weight);
}

function showMessage(message, type) {
  const messageEl = document.querySelector("#msg");
  messageEl.classList.value = "text-center fs-4 mt-3";
  messageEl.innerText = message;
  messageEl.classList.add(`text-${type}`);
}

function calculateBmi(height, weight) {
  localStorage.setItem("height", height);
  localStorage.setItem("weight", weight);

  const bmiVal = (weight / (height / 100) ** 2).toFixed(1);
  showHelpFile(bmiVal);

  return bmiVal;
}

function showHelpFile(bmi) {
  const buttonsEl = document.querySelector("#buttons");

  const helpFileEl = document.createElement("a");
  helpFileEl.setAttribute("id", "helpFile");
  helpFileEl.innerHTML = "<i class='bi bi-cloud-arrow-down fs-5 ms-2'></i>دانلود فایل راهنما";
  helpFileEl.download = true;
  helpFileEl.classList.value = "btn btn-lg btn-primary align-items-center";

  let pdfFile;

  if (bmi < 18.5) pdfFile = "../data/bmi/Underweight.pdf";
  else if (bmi >= 18.5 && bmi <= 24.9) pdfFile = "../data/bmi/Normal.pdf";
  else if (bmi > 24.9 && bmi < 29.9) pdfFile = "../data/bmi/Overweight.pdf";
  else pdfFile = "../data/bmi/Obese.pdf";

  helpFileEl.setAttribute("href", pdfFile);

  buttonsEl.appendChild(helpFileEl);
}

function validateBmi(event) {
  event.preventDefault();

  const helpFileEl = document.querySelector("#helpFile");
  if (helpFileEl) helpFileEl.remove();

  const height = document.querySelector("form input[name='height']").value;
  const weight = document.querySelector("form input[name='weight']").value;

  if (!weight || !height) return showMessage("لطفاً قد و وزن خود را وارد نمایید.", "danger");
  if (weight < 10 || weight > 200 || height < 70 || height > 200)
    return showMessage("اطلاعات وارد شده صحیح نمی‌باشد.", "danger");
  return showMessage(`شاخص توده بدنی شما ${calculateBmi(height, weight)} می‌باشد.`, "success");
}

loadForm();
document.querySelector("form").addEventListener("submit", validateBmi);
