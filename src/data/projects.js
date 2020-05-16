import VojoPic from '../assets/vojo-pic.png';
import ToDoListPic from '../assets/to-do-list-pic.jpg';
import SheaFacePic from '../assets/strange-eyes.jpg';
import MorseCodePic from '../assets/morse-code-pic.jpg';
import SantoriniPic from '../assets/santorini-pic.jpg';
import AlleywayInvadersPic from '../assets/alleyway-invaders-pic.jpg';
import NotFlixPic from '../assets/notflix-pic.png';
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

class Project {
    constructor(projectTitle, projectImage, projectLiveLink, projectRepoLink, projectStrapline, projectDescription, projectTechStack) {
    this.projectTitle = projectTitle;
    this.projectImage = projectImage;
    this.projectLiveLink = projectLiveLink;
    this.projectRepoLink = projectRepoLink;
    this.projectStrapline = projectStrapline;
    this.projectDescription = projectDescription;
    this.projectTechStack = projectTechStack
    };
};

const santorini = new Project (
    "Santorini",
    SantoriniPic,
    "https://jamesnowecki.github.io/santorini/",
    "https://github.com/jamesnowecki/santorini",
    "Vanilla JavaScript simulation of the classic Gordon Hamilton board game.",
    "One of the mentors who pushed me to learn to code suggested simulating one of our favourite 2-player abstract board games as a useful exercise in learning OOP and functional programming. It provided a brilliant platform for validating the OOP and functional programming concepts we were learning on the course as I went along and my skills improved.",
    [<FontAwesomeIcon icon={["fab", "js-square"]} />, <FontAwesomeIcon icon={["fab", "html5"]} />, <FontAwesomeIcon icon={["fab", "sass"]} />],
);

const morseCode = new Project (
    "Morse-code translater",
    MorseCodePic,
    "https://jamesnowecki.github.io/morse-code-test/",
    "https://github.com/jamesnowecki/morse-code-test",
    "Test to demonstrate understanding and knowledge of JS array iterators and functions.",
    "This was the first challenge we were given without much direction, just a problem to solve, after a week of JavaScript. The requirement was to translate a string of text to morse code, and to also be able to translate a string of morse back to text. As a personal challenge I also focussed on maintaining spacing in order to identify separate letters and words in morse code.",
    [<FontAwesomeIcon icon={["fab", "js-square"]} />],
);

const alleywayInvaders = new Project (
    "Alleyway Invaders",
    AlleywayInvadersPic,
    "https://jamesnowecki.github.io/alleyway-invaders/",
    "https://github.com/jamesnowecki/alleyway-invaders",
    "Example 5-hour timed tech-test to demonstrate JS OOP concepts.",
    "This was our first timed tech test. We were required to take an OOP approach, creating different types of ships and apply damage at random. Once a ship's HP reached 0 it should not be hit again, and the death of the mothership should cause all the ships to die. It was specified this challenge needed to be completed within a single HTML file in under 150 lines of code. Styling was unimportant for the brief, but has been added as an extension.",
    [<FontAwesomeIcon icon={["fab", "js-square"]} />, <FontAwesomeIcon icon={["fab", "html5"]} />, <FontAwesomeIcon icon={["fab", "css3-alt"]} />],

);

const vojo = new Project (
    "Vojo",
    VojoPic,
    "https://app.vojo.health/landing-page",
    "https://github.com/nology-tech/vojo",
    "Group client project build with React, deployed and hosted with Firebase.",
    "Our client project, completed through pair-programming over 4 weeks. An app to take input from the user in the form of questionnaires, associate these answers and a DNA swab kit with a back end algorithm via an API to generate personalised dietary and health advice. This advice is then dynamically displayed back to the user via the front end. I completed the setup of the CI/CD pipeline, a number of the components, the DNA kit integration functionality with the database and the routing and authentication.",
    [<FontAwesomeIcon icon={["fab", "react"]} />, <FontAwesomeIcon icon={["fab", "js-square"]} />, <FontAwesomeIcon icon={["fab", "sass"]} />],

);

const toDoList = new Project (
    "To do list",
    ToDoListPic,
    "https://to-do-list.jamesnowecki.com/",
    "https://github.com/jamesnowecki/To-do-list",
    "Challenge to demonstrate CRUD integration with a database and authentication.",
    "Small scale app challenge in React to demonstrate integration of firestore database, reading from and writing to the database, and displaying contents dynamically on the page. This has been extended to demonstrate authentication.",
    [<FontAwesomeIcon icon={["fab", "react"]} />, <FontAwesomeIcon icon={["fab", "js-square"]} />],
);

const sheaFace = new Project (
    "Shea Face",
    SheaFacePic,
    "https://shea-face.jamesnowecki.com/",
    "https://github.com/jamesnowecki/shea-face",
    "Challenge to demonstrate obtaining information from API and handing functions in as props.",
    "A small challenge to get us to implement hosting via Firebase, calling an API to obtain a random number, use that random number to generate a number of photo components on the page, each of which the user could input a different angle in, and have the eyes rotate to that angle upon click of the face.",
    [<FontAwesomeIcon icon={["fab", "react"]} />, <FontAwesomeIcon icon={["fab", "js-square"]} />],
);

const notflix = new Project (
    "NotFlix",
    NotFlixPic,
    "https://notflix.jamesnowecki.com/",
    "https://github.com/jamesnowecki/movie-database",
    "App to practice obtaining information from an API, and using Bootstrap in React.",
    "An app to test ability to call an API to fetch information, allow users to filter through this information, and display that information dynamically to the page, passing it in as props to components. The user needed to be able to search the database by name, filter the returned films by year, and fetch the API again for further information on a film if they wanted.",
    [<FontAwesomeIcon icon={["fab", "react"]} />, <FontAwesomeIcon icon={["fab", "js-square"]} />, <FontAwesomeIcon icon={["fab", "bootstrap"]} />],
)

const projectArray = [vojo, santorini, alleywayInvaders, morseCode, toDoList, sheaFace, notflix];


export default projectArray;