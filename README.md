**TravisCI:** [![Build Status](https://travis-ci.org/Team-Knockout/state-craft.svg?branch=master)](https://travis-ci.org/Team-Knockout/state-craft)

# Statecraft 

A fun political simulator

## About

Statecraft is a simple game with a component architecture written in vanilla JS that copies game theme and flavor text from NationStates.net and apparently our logo from an existing web app also called Statecraft. There is no association with the latter, and we have no plans to distribute this project. It is only practice!

## Goals

|  task | components | services | css | size |
|  ------ | :------: | :------: | :------: | :------: |
|  change header on start page | header |  |  | small |
|  clean up data/props in classes (import once, then send down component tree) | all |  |  | small |
|  add 3-dimensional political philosophy to results |  | results-api |  | small |
|  improve results statements |  | results-api |  | small |
|  calculate approval at the end instead as a derived value? |  | results-api |  | small |
|  change class names | all |  | all | small |
|  add dynamic content to question and answer texts | question, answer | question-api |  | small |
|  clean up CSS |  |  | all | small |
|  make it more responsive |  |  | all | small |
|  add "pick a national anthem" to initial screen and play song (on repeat, of course) on game page and results page | ?? | nation-api |  | big |
|  add Travis as a component in the lower right, who returns a response and acts like Clippy from old Microsoft Word. (You did not pass Travis!') response text has been added to the first question in question api for reference of where it should go. | ?? | question-api |  | big |
|  multiple games: create user account capacity? | nation-display, reset-button | user-api |  | big |
