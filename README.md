**TravisCI:** [![Build Status](https://travis-ci.org/Team-Knockout/state-craft.svg?branch=master)](https://travis-ci.org/Team-Knockout/state-craft)

# Statecraft 

A fun political simulator

## About

Statecraft is a simple game with a component architecture written in vanilla JS that copies game theme and flavor text from NationStates.net and apparently our logo from an existing web app also called Statecraft. There is no association with the latter, and we have no plans to distribute this project. It is only practice!

## Future Goals

|  task | components | services | css | size |
|  ------ | :------: | :------: | :------: | :------: |
|  make national anthem a choice. add "pick a national anthem" to initial screen and play song (on repeat, of course) on game page and results page | ?? | nation-api |  | big |
|  add Travis as a component in the lower right, who returns a response and acts like Clippy from old Microsoft Word. (You did not pass Travis!') response text has been added to the first question in question api for reference of where it should go. | ?? | question-api |  | big |
|  multiple games: create user account capacity? | nation-display, reset-button | user-api |  | big |
|  automate play testing. balance game based upon random results. |  | new service, questions-api, nation-api |  | big |
|  add a ton more questions and ability to play rounds | ? | questions-api, ? |  | big |
