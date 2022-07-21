const adviceBtn = document.querySelector("#get-advice");

adviceBtn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const adviceNumber = document.querySelector("#number");
      const advice = document.querySelector("#advice");
      adviceNumber.innerText = data.slip.id;
      advice.innerText = data.slip.advice;
    });
});
