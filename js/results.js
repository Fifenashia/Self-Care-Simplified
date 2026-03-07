//goals include loading the self care data json and converting to an object

async function loadSelfCareData () {

//try and catch blocks help catch errors!
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

    //once we have the json file as an object- we need to grab the stored mood and energy stored locally (check the html pages to ensure correct)

    const mood =localStorage.getItem("selectedMood");
    const energy = localStorage.getItem("selectedEnergy");

    //once you load self care data and and get the selected mood and energy- we will want to filter data for matching tasks
    //remember that filter creates a new array with all elements that pass the test
    //review ternary and equality operators 
    //if no tasks match, log message and stop


    const matchingTasks = selfCareData.filter (item => item.mood === mood && item.energy === energy);
    if (matchingTasks.length === 0) {
        console.log("No matches found.");
    return;
    }

//randomization needed since we are using multiple tasks for each combo review and the log for suggestion. so pick a random task

    const randomIndex = Math.floor(Math.random() * matchingTasks.length);
    const suggestion = matchingTasks[randomIndex];

    console.log("Selected suggestion:", suggestion);

//now we need to get the HTML elements where the chosen suggestion will be displayed. 
// The array contains title, description, instruction,task suggestion, and tags- it needs to match the html elements

const title = document.getElementById("title");
const description = document.getElementById("description");
const instruction = document.getElementById("instruction");
const task = document.getElementById("task");

//finish by putting the chosen task data into those DOM elements
//review textContent

title.textContent = suggestion.title;
description.textContent = suggestion.description;
instruction.textContent = suggestion.instruction;
task.textContent = suggestion.task;
}

//display the results (outside the function)

displaySelfCareData();


