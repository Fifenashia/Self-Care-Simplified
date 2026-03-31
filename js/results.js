async function loadSelfCareData () {
    try {
        const response = await fetch ("./data/selfcare.json")
        const json = await response.json(); 
        return json;
    } catch (error) {
        console.log("Error loading selfcare data", error);
    }
}
async function displaySelfCareData () {
    const selfCareData = await loadSelfCareData();

    const mood =localStorage.getItem("selectedMood");
    const energy = localStorage.getItem("selectedEnergy");

    const matchingTasks = selfCareData.filter (item => item.mood === mood && item.energy === energy);
    if (matchingTasks.length === 0) {
        console.log("No matches found.");
    return;
    }

    const randomIndex = Math.floor(Math.random() * matchingTasks.length);
    const suggestion = matchingTasks[randomIndex];
    console.log("Selected suggestion:", suggestion);


const title = document.getElementById("title");
const description = document.getElementById("description");
const instruction = document.getElementById("instruction");
const task = document.getElementById("task");

title.textContent = suggestion.title;
description.textContent = suggestion.description;
instruction.textContent = suggestion.instruction;
task.textContent = suggestion.task;
}

displaySelfCareData();


