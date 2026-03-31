const moodSelect = document.getElementById("moodSelect");
const moodNextBtn = document.getElementById("moodNextBtn");

moodNextBtn.addEventListener("click", () => {
    console.log("Mood dropdown value is:", moodSelect.value);
    const selectedMood = moodSelect.value;

    if (!selectedMood) {
        alert("Please select your current mood.");
        return;
    }

    localStorage.setItem("selectedMood", selectedMood);
    window.location.href = "energy.html";
});

async function loadAdvice() {
     try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        
        const adviceElement = document.getElementById("advice");
        adviceElement.textContent = data.slip.advice;

     } catch (error) {
        console.log("Error loading advice", error);
     }
}
loadAdvice();