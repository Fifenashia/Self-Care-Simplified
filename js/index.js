//Grab your elements from index.html
const moodSelect = document.getElementById("moodSelect");
const moodNextBtn = document.getElementById("moodNextBtn");

//Add an event listener
moodNextBtn.addEventListener("click", () => {
    console.log("Mood dropdown value is:", moodSelect.value);
    const selectedMood = moodSelect.value;

//catch any errors
    if (!selectedMood) {
        alert("Please select your current mood.");
        return;
    }
//save the mood selection in local storage
    localStorage.setItem("selectedMood", selectedMood);
    window.location.href = "energy.html";
});

//External API - start by fetching the url where the api is and convert to json 
async function loadAdvice() {
     try {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();

//grab the HTML element that matches (advice)
        const adviceElement = document.getElementById("advice");

//display on the page (textcontent)
         adviceElement.textContent = data.slip.advice;

//if there is an error use catch(error)
     } catch (error) {
        console.log("Error loading advice", error);
     }
}
loadAdvice();