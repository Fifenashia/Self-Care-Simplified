## Self-Care Simplified

## Overview
Self-Care Simplified is designed to support overwhelmed users in moments of stress without requiring emotional processing or reflection. Users select their current mood and energy level from drop-down menus, and the app responds with a positive affirmation pulled from an external API along with one small, actionable self-care task tailored to their current state. The goal is to help users decide one next step to reduce overwhelm in the moment. The app also includes a dedicated mental health and crisis resources page, providing supportive information and links.

## Features
- Analyze Data Stored in Arrays/Objects: Self-care suggestions are stored in a custom JSON data set and analyzed using JavaScript logic. The app filters and displays suggestions based on the user’s selected mood and energy level.
- Validate User Input: Users must select a mood and an energy level before progressing through the app. Invalid or incomplete input is prevented from advancing or being saved.
- Function with Multiple Input Parameters: A JavaScript function accepts two input parameters (mood and energy level) and returns an appropriate self-care suggestion based on those inputs.
- Persist Data to Local Storage: Users can save favorite self-care suggestions to local storage, which remain accessible after page refresh or reload.

## Technologies Used
- HTML
- CSS (Flexbox, Media Queries)
- JavaScript
- Fetch API
- LocalStorage
- External Affirmations API

## Project Structure
Self-Care-Simplified/
│
├── index.html
├── style.css
├── script.js
├── data/
│   └── selfcare.json
│
├── resources.html
└── README.md

## API Integration
Describe API usage here.

## Research and AI Assistance
The self-care strategies used in this project were informed by commonly referenced approaches in emotional regulation research, including sensory grounding techniques, nervous system calming strategies, environmental simplification, and controlled physical movement for releasing excess activation. These methods are frequently used in mental health and behavioral regulation contexts to help reduce immediate distress and restore a sense of stability.

AI tools were used during the research and development process to help locate relevant psychological literature and explore possible self-care strategies connected to those research themes. The AI assistance helped identify supporting research topics and generate potential self-care suggestions based on those findings. The final mood framework, energy-level model, and curated list of self-care tasks were reviewed, refined, and organized by the author to ensure they aligned with the design goals of the application.

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

## Installation
1. Clone the repository
2. Open index.html in browser




