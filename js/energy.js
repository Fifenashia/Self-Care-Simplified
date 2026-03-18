//Grab your html elements from index.html
const energySelect = document.getElementById("energySelect");
const energySubmitBtn = document.getElementById("energySubmitBtn");

//Add an event listener
energySubmitBtn.addEventListener("click", () => {
  const selectedEnergy = energySelect.value;


//catch any errors
  if (selectedEnergy === "") {
    alert("Please select your current capacity.");
    return;
  }
//Store energy in local storage and direct to results page
  localStorage.setItem("selectedEnergy", selectedEnergy);
  window.location.href = "results.html";
});