Statecraft
=========

A fun political sandbox game.

**TravisCI:** [![Build Status](https://travis-ci.org/Team-Knockout/state-craft.svg?branch=master)](https://travis-ci.org/Team-Knockout/state-craft)

Table of contents
=================

<!--ts-->
   * [Statecraft](#statecraft)
   * [Table of contents](#table-of-contents)
   * [About](#about)
   * [Usage](#usage)
      * [Installation](#installation)
      * [Gameplay](#gameplay)
   * [Future Goals](#future-goals)
<!--te-->

About
============

Statecraft is a simple game with a component architecture written in vanilla JS that copies game theme and flavor text from NationStates.net and apparently our logo from an existing web app also called Statecraft. There is no association with the latter, and we have no plans to distribute this project. It is only practice!

Usage
=====

Installation
-----

Make sure you have Live Server installed and load the webpage from there. We aren't using any frameworks. For further development, if you want to keep our coding style, install ESLint in your IDE and use the .eslintrc provided in the repo. We also used TravisCI for continuous integration, and you can do the same thing with that. We provided the travis.yml in this repo.

Gameplay
-----------

The gameplay flows as follows:

Personalization -> Decision making -> Results display. 

If you want to play again, you can hit the reset button on the results page or on the survey page, if you accidentally find yourself there after answering all of the questions. We tried to handle all possible situations, so you don't get stuck anywhere in the app, without having to provide a universal toolbar that lets you go everywhere from anywhere.

The game keeps track of a number of values in the nation-api.js, pulls questions from the question-api.js, and it matches the nation-api values with potential results in the results-api and then displays that on the results final page.


Future Goals
==========

|  task | components | services | css | size |
|  ------ | :------: | :------: | :------: | :------: |
|  make national anthem a choice. add "pick a national anthem" to initial screen and play song (on repeat, of course) on game page and results page | ?? | nation-api |  | big |
|  add Travis as a component in the lower right, who returns a response and acts like Clippy from old Microsoft Word. (You did not pass Travis!') response text has been added to the first question in question api for reference of where it should go. | ?? | question-api |  | big |
|  multiple games: create user account capacity? | nation-display, reset-button | user-api |  | big |
|  automate play testing. balance game based upon random results. |  | new service, questions-api, nation-api |  | big |
|  add a ton more questions and ability to play rounds | ? | questions-api, ? |  | big |
