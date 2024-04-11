const button = document.getElementById("calculateButton");

button.addEventListener("click", function () {
  const day = parseInt(document.getElementById("dayInput").value);
  const month = parseInt(document.getElementById("monthInput").value);
  const year = parseInt(document.getElementById("yearInput").value);
  const dayInput = document.getElementById("dayInput");
  const monthInput = document.getElementById("monthInput");
  const yearInput = document.getElementById("yearInput");
  const dayErrorMessage = document.getElementById("dayErrorMessage");
  const monthErrorMessage = document.getElementById("monthErrorMessage");
  const yearErrorMessage = document.getElementById("yearErrorMessage");
  const day1 = document.querySelector("#day");
  const month1 = document.querySelector("#month");
  const year1 = document.querySelector("#year");
  const yearsOutput = document.getElementById("years");
  const monthsOutput = document.getElementById("months");
  const daysOutput = document.getElementById("days");

  function playMusic() {
    const audio = new Audio("./sound.mp3");
    audio.play();
  }

  const maxDays = new Date(year, month, 0).getDate();
  const isValidDate =
    day >= 1 &&
    day <= maxDays &&
    month >= 1 &&
    month <= 12 &&
    year >= 1 &&
    year <= 2024;

  if (!isValidDate) {
    if (day < 1 || day > maxDays) {
      dayInput.style.borderColor = "red";
      dayErrorMessage.textContent = "Must be a valid day";
      dayErrorMessage.style.color = "red";
      day1.style.color = "red";
    } else {
      dayInput.style.borderColor = "";
      dayErrorMessage.textContent = "";
    }

    if (month < 1 || month > 12) {
      monthInput.style.borderColor = "red";
      monthErrorMessage.textContent = "Must be a valid month";
      monthErrorMessage.style.color = "red";
      month1.style.color = "red";
    } else {
      monthInput.style.borderColor = "";
      monthErrorMessage.textContent = "";
    }

    if (year < 1 || year > 2024) {
      yearInput.style.borderColor = "red";
      yearErrorMessage.textContent = "Must be a valid year";
      yearErrorMessage.style.color = "red";
      year1.style.color = "red";
    } else {
      yearInput.style.borderColor = "";
      yearErrorMessage.textContent = "";
    }

    yearsOutput.textContent = "--";
    monthsOutput.textContent = "--";
    daysOutput.textContent = "--";
  } else {
    dayInput.style.borderColor = "";
    monthInput.style.borderColor = "";
    yearInput.style.borderColor = "";

    const currentDate = new Date();
    const selectedDate = new Date(year, month - 1, day);
    const diff = Math.floor(
      (currentDate - selectedDate) / (1000 * 60 * 60 * 24)
    );

    const years = Math.floor(diff / 365);
    const months = Math.floor((diff % 365) / 30);
    const days = Math.floor((diff % 365) % 30);

    yearsOutput.textContent = years < 10 ? "0" + years : years;
    monthsOutput.textContent = months < 10 ? "0" + months : months;
    daysOutput.textContent = days < 10 ? "0" + days : days;

    playMusic();
  }
});
