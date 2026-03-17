## Self-Care Simplified

## Overview
Many wellness tools present long lists of activities that can feel overwhelming when someone is already stressed. This project explores a simpler approach by narrowing the user experience to three steps:

Select mood
Select energy level
Receive one suggested self-care activity

The application also includes a mental health resources page with crisis support information and helpful links.

## Description
Self-Care Simplified is designed to support overwhelmed users in moments of stress without requiring emotional processing or reflection. Users select their current mood and energy level from drop-down menus, and the app responds with a positive affirmation pulled from an external API along with one small, actionable self-care task tailored to their current state. The goal is to help users decide one next step to reduce overwhelm in the moment. The app also includes a dedicated mental health and crisis resources page, providing supportive information and links.

## Project Organization
| Page | Description |
|-----|-------------|
| Landing Page | Introduces the app and allows the user to begin the check-in |
| Mood Page | User selects their current mood |
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
| Use an external API | The application retrieves positive affirmations from an external affirmations API and displays them alongside the suggested self-care activity. |
| Responsive design | The interface is designed using Flexbox and media queries to support both mobile screens and larger browser displays. |

# How to Download and Run the Project
Follow the steps below to run the application locally.

### 1. Install Git (if you do not already have it)
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

#### Use VS Code Live Server (Recommended)
1. Install the **Live Server** extension in VS Code
2. Open the project folder
3. Right-click `index.html`
4. Select **Open with Live Server**
The application will automatically open in your browser.

## Usage
1. Start on the landing page.
2. Select your current **mood**.
3. Select your **energy level**.
4. The app will display a personalized self-care suggestion.
5. A positive affirmation will also be displayed from an external API.
6. Users can navigate to the **Resources page** for mental health support links.

## Features
Mood + energy selection system to personalize suggestions
JSON-based self-care dataset that separates content from the interface
JavaScript filtering logic to match user input with appropriate tasks
Randomized task selection within each mood/energy category
Positive affirmation pulled from an external API
Crisis and mental health resources page
Ability to save favorite suggestions using localStorage

## Technologies Used
HTML
CSS (Flexbox, Media Queries)
JavaScript
Fetch API
LocalStorage
External Affirmations API

## API Integration
In Progress

## Research and AI Assistance
I researched emotional regulation techniques commonly used in mental health resources such as grounding exercises, behavioral activation, and calming sensory strategies. AI tools were used during brainstorming to help explore possible self-care ideas connected to those approaches. I reviewed and refined the final task list to ensure it fit the goals of the app and provided small, manageable actions.

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






