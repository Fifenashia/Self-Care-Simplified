## Self-Care Simplified

## Overview
Many wellness tools present long lists of activities that can feel overwhelming when someone is already stressed. This project explores a simpler approach by narrowing the user experience to three steps:

Select mood
Select energy level
Receive one suggested self-care activity

The application also includes a mental health resources page with crisis support information and helpful links.

## Description
Self-Care Simplified was created for moments when everything feels like too much. The app helps reduce overwhelm by guiding users toward one manageable next step instead of giving them a long list of options. Users choose their current mood and energy level, and the app responds with a simple self-care suggestion based on those choices. It also includes a small life advice feature from an external API on the homepage, along with a mental health and crisis resources page for additional support.

## Project Organization
| Page | Description |
|-----|-------------|
| Home Page | Introduces the app, displays life advice from the external API, and allows the user to select their current mood |
| Energy Page | User selects energy level |
| Results Page | Displays suggested self-care task |
| Resources Page | Lists mental health support resources |

## Capstone Requirements Fulfilled
| Requirement | Implementation |
|-------------|---------------|
| Analyze data stored in arrays or objects | Self-care activities are stored in a custom JSON dataset. JavaScript loads this data and analyzes it to find tasks that match the user’s selected mood and energy level. |
| Retrieve data using JavaScript | The application loads the JSON dataset using the Fetch API and converts it into a JavaScript object for processing. |
| Use conditional logic | JavaScript checks the user’s selected mood and energy values and filters the dataset to return matching suggestions. |
| Use multiple input parameters | Mood and energy selections are used together to determine which self-care tasks are appropriate for the user. |
| Persist data using local storage | The user’s selected mood and energy values are saved in localStorage so they can be accessed on the results page. |
| Use an external API | The application retrieves life advice from an external API and displays them alongside the suggested self-care activity. |
| Responsive design | The interface is designed using Flexbox and media queries to support both mobile screens and larger browser displays. |

# How to Download and Run the Project
Follow the steps below to run the application locally.

### 1. Install Git (if needed)
Download Git from:
https://git-scm.com/downloads

Git allows you to download repositories from GitHub.

### 2. Clone the Repository
Open a terminal or command prompt and run:
git clone https://github.com/Fifenashia/Self-Care-Simplified.git
This will download the project files to your computer.

### 3. Navigate to the Project Folder
Move into the project directory:
cd Self-Care-Simplified

### 4. Open the Project in a Code Editor
You can open the folder in any code editor.
Example using Visual Studio Code:
code .

### 5. Run the Application
Because the project loads JSON data using the Fetch API, it should be run through a local server instead of opening the HTML file directly.

### Option 1: Use VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code
2. Open the project folder
3. Right-click `index.html`
4. Select **Open with Live Server**
The application will automatically open in your browser.

### Option 2: Run from the Terminal with npx
This option works without the Live Server extension, as long as Node.js is installed.
You can install Node.js here if needed: https://nodejs.org/
1. Open a terminal in the project folder
2. Run: npx http-server
3. Open the local URL shown in the terminal in your browser

## Usage
1. Start on the landing page.
2. Select your current **mood**. Click Continue button
3. Select your **energy level**. Click Get Suggestion button
4. The app will display a personalized self-care suggestion.
5. A life advice affirmation will also be displayed from an external API.
6. Users can navigate to the **Resources page** for mental health support links.

### Troubleshooting
If the JSON data or API content does not appear, make sure the project is being run through Live Server and not opened directly as a file in the browser.

## Features
Mood + energy selection system to personalize suggestions
JSON-based self-care dataset that separates content from the interface
JavaScript filtering logic to match user input with appropriate tasks
Randomized task selection within each mood/energy category
Life Advice pulled from an external API
Crisis and mental health resources page

## Technologies Used
HTML
CSS (Flexbox, Media Queries)
JavaScript
Fetch API
LocalStorage
Life Advice API

## API Integration
This project uses the Advice Slip API to show a short piece of life advice on the homepage. When the page loads, JavaScript uses `fetch()` to request data from the API, converts the response from JSON into a JavaScript object, and then displays the advice on the page.
I chose this API because it added a small supportive feature to the app without making the project more complicated than it needed to be. It also helped me meet the capstone requirement of using an external API.

## Research and AI Assistance
I researched emotional regulation techniques commonly used in mental health resources, including grounding exercises, behavioral activation, calming sensory strategies, and savoring positive experiences.

AI tools were used in two specific parts of this project:

1. **Self-care dataset creation**  
   I used AI assistance to help brainstorm and generate self-care activity ideas for the JSON dataset. Because the project includes a large number of mood and energy combinations, AI helped me organize and draft possible task suggestions that matched those categories. I reviewed, selected, edited, and finalized the activities to make sure they fit the purpose of the app and felt manageable and supportive.

2. **README support**  
   AI was also used to help improve the wording and organization of this README so the documentation would be clear, professional, and easy for reviewers to follow.

All coding, project structure, styling, logic, testing, and final implementation decisions were completed and reviewed by me.

## Note
This application is intended as a self-care support tool and is not a substitute for professional mental health care.

## References and Resources
The mood and energy-level framework used in this project loosely mirrors psychological models of emotion that map feelings along dimensions such as emotional valence and physiological activation.

The strategies used in this project were inspired by commonly referenced approaches in emotional regulation and mental health research. These approaches include techniques such as sensory grounding, nervous system calming, environmental simplification, behavioral activation, and savoring positive experiences. Each mood category in the application reflects a different emotional regulation need, such as reducing overwhelm, calming anxiety, cooling anger, gently lifting sadness, or reinforcing moments of calm.

For example, strategies for overwhelm focus on reducing cognitive and sensory load, while anxiety strategies draw on grounding techniques that redirect attention to the present moment. Anger-related strategies emphasize cooling the body and safely releasing heightened activation. Sadness strategies are influenced by behavioral activation research, which encourages small actions that help individuals re-engage with their environment. Peaceful-state strategies draw from positive psychology research on savoring, which encourages noticing and appreciating positive experiences in order to strengthen well-being.

If you are interested in learning more about the concepts that informed this project, the following resources provide helpful introductions:

American Psychological Association – Controlling Anger Before It Controls You
https://www.apa.org/topics/anger/control

Centre for Clinical Interventions – Behavioral Activation Resources  
https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Depression

Cleveland Clinic – Grounding Techniques for Anxiety
https://health.clevelandclinic.org/grounding-techniques

National Institute of Mental Health – Anxiety Disorders
https://www.nimh.nih.gov/health/topics/anxiety-disorders

Positive Psychology – Savoring Explained
https://positivepsychology.com/savoring/

Psychology Today – Articles on stress, anxiety, and emotional regulation
https://www.psychologytoday.com






