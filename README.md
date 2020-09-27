# Exquisite Corpse

 Exquisite Corpse is a collaborative creative writing game. Participants take turns writing a story, and pass their last sentence as a a prompt to the next contributor. The result is a fun and unpredictable collection of ideas and writing styles that form very unique bodies of text.

 Users of Exquisite Corpse are able to:
 * Read published (completed) stories.
 * Log in with a username and password (or create a new username if it doesn't already exist).
 * When logged in, users can contribute to stories in progress, or start new stories. 
 * When starting a new story, users can select a prompt from a variety of genres, or start from scratch.
 * A user has 2 minutes to write, and then they can pass their story on for contribution. 
 * Stories in progress will show up on the home page. 
 * Any user who is continuing a story can choose to end and publish a story if they see fit!

## Technologies Used:
* React
* Jest
* Sass
* Express
* Knex
* PostgreSQL
* Babel
* React Testing Library
* moment.js
* React Compound Timer


This was a Mod 3 project in Turing School of Software and Design's Front End Engineering program during the 2008 inning. This project was designed to help students better understand how to:
- Build an application with a React architecture.
- Learn a new technology in under a week.
- Test component and asynchronous functionality with the React Testing Library.
- Understand and utilize CRUD requests to interact with data. 
- Practice a professional GitHub workflow

The biggest learning goal of this project was to research and implement a completely new technology. For our project, we decided to build a back end and a homespun API using PostgresQL, Knex, and Express. this back end keeps track of all of our user's data, all of the stories and writing prompts. 


## Setup/Installation
- Set-up the back-end repo by following the instructions [here](https://github.com/nickhartdev/exquisite-corpse-server) 
- Clone the front-end repo using `git clone git@github.com:GreysonElkins/exquisite-corpse.git`
- Run `npm install` in the root of the newly created directory to install the necessary dependencies
- Running `npm start` in your terminal should launch the application in your browser. If not, navigate to `http://localhost:3000/` to view the application in action
- If you'd like to log in as a user and use the application, you will need to create your own username on the `sign in` page on the application.

## App in Action

#### A user can log in, and contribute to any of the stories in progress

![User log in and continue story](./src/assets/gifs/login-continue.gif)

#### A user can begin a new story, and select a prompt from a list of genres. 

![User starts new story](./src/assets/gifs/start-story.gif)

#### A user can visit the library, and read any of the published (completed) stories.

![Visit the library](./src/assets/gifs/visit-library.gif)

## Wins/Challenges
#### Wins
We built a full-stack app end-to-end! Learning new technology was challenging, but right down to the last minute, it hasn't overwhelmed us and we worked as a team to keep our spirits up and excited about the project (we even want to keep to developing it!) The application is engaging and imaginitive, even before execution, our planning and "product design" was a win.

#### Challenges
Finding a direction to move forward was often challenging, with four people and such a wide range of strategies available. Of course, time played a big factor in this and had this project been allotted more than 6 days it would have made a million bucks.

## Future Iterations
In future devlopment of this application, users will be able to:
* Add additional writing prompts (with new genres).
* Pass corpses directly to other users, (opt for corpses to be 'private') which would prevent those corpses from being displayed directly on the welcome page.
* Customize the length of the timer when starting a story. 
* The Timer would begin when user begins typing in story input.

## Contributors
This project was submitted on 9/15/2020 by [Aaron Burris-DeBoskey](https://github.com/Abdeboskey), [Carly Clift](https://github.com/carlymclift), [Greyson Elkins](https://github.com/GreysonElkins), and [Nick Hart](https://github.com/nickhartdev)
