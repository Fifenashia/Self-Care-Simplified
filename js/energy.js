const energySelect = document.getElementById("energySelect");
const energySubmitBtn = document.getElementById("energySubmitBtn");

energySubmitBtn.addEventListener("click", () => {
  const selectedEnergy = energySelect.value;

  if (selectedEnergy === "") {
    alert("Please select your current capacity.");
    return;
  }

  localStorage.setItem("selectedEnergy", selectedEnergy);
  window.location.href = "results.html";
});