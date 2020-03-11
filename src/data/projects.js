class Project {
    constructor(projectTitle, projectImage, projectLiveLink, projectRepoLink, projectStrapline, projectDescription) {
    this.projectTitle = projectTitle;
    this.projectImage = projectImage;
    this.projectLiveLink = projectLiveLink;
    this.projectRepoLink = projectRepoLink;
    this.projectStrapline = projectStrapline;
    this.projectDescription = projectDescription;
    };
};

const santorini = new Project (
    "Santorini",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/08/07/14/oia-santorini.jpg?w968h681",
    "https://jamesnowecki.github.io/santorini/",
    "https://github.com/jamesnowecki/santorini",
    "Vanilla JavaScript simulation of the Gordon Hamilton board game",
    "One of the mentors who pushed me to learn to code suggested simulating one of our favourite 2-player abstract board games as a useful exercise in learning OOP and functional programming. It provided a brilliant platform for validating the OOP and functional programming concepts we were learning on the course as I went along and my skills improved.",
);

const morseCode = new Project (
    "Morse-code translater",
    "https://www.thoughtco.com/thmb/tzsqsnVPfCoo8RCsmGWGjp_tXog=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/international-morse-code1-5a78ad0b642dca0037cd818c.jpg",
    "https://jamesnowecki.github.io/morse-code-test/",
    "https://github.com/jamesnowecki/morse-code-test",
    "Test to demonstrate basic understanding of JS array iterators and functions",
    "This was the first challenge we were given without much direction, just a problem to solve, after a week of JavaScript. The requirement was to translate a string of text to morse code, and to also be able to translate a string of morse back to text. As a personal challenge I also focussed on maintaining spacing in order to identify separate letters and words in morse code.",
);

const alleywayInvaders = new Project (
    "Alleyway Invaders",
    "https://regmedia.co.uk/2013/03/04/invader.jpg?x=442&y=293&crop=1",
    "https://jamesnowecki.github.io/alleyway-invaders/",
    "https://github.com/jamesnowecki/alleyway-invaders",
    "Example 5-hour timed tech-test to demonstrate JS OOP concepts",
    "This was our first timed tech test. We were required to take an OOP approach, creating different types of ships and apply damage at random. Once a ship's HP reached 0 it should not be hit again, and the death of the mothership should cause all the ships to die. It was specified this challenge needed to be completed within a single HTML file in under 150 lines of code. Styling was unimportant.",
);

const vojo = new Project (
    "Vojo",
    "../../assets/vojo.png",
    "https://vojo-bbe4f.web.app/",
    "https://github.com/nology-tech/vojo",
    "Group client project build with React, deployed and hosted with Firebase",
    "Vojo Vegan Beef.",
);

const projectArray = [santorini, morseCode, alleywayInvaders, vojo];

export default projectArray;