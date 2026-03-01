const moodSelect = document.getElementById("moodSelect");
const moodNextBtn = document.getElementById("moodNextBtn");

moodNextBtn.addEventListener("click", () => {
    console.log("Mood dropdown value is:", moodSelect.value);

    const selectMood = moodSelect.value;

    if (!selectMood) {
        alert("Please select your current mood.");
        return;
    }
    localStorage.setItem("selectMood", selectMood);
    window.location.href = "energy.html";
});
