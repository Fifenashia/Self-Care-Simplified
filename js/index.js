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
