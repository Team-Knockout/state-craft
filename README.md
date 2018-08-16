# Statecraft

A fun political simulator

TravisCI: [![Build Status](https://travis-ci.org/Team-Knockout/state-craft.svg?branch=master)](https://travis-ci.org/Team-Knockout/state-craft)

## About

Statecraft is a simple game with a component architecture written in vanilla JS that copies game theme and flavor text from NationStates.net and apparently our logo from an existing web app also called Statecraft. There is no association with the latter, and we have no plans to distribute this project. It is only practice!

## To Fix

* change header on start page
* change class names
* clean up data/props in classes (import once, then send down component tree)
* clean up CSS
* make it more responsive


## Improvement Goals

* add "pick a national anthem" to initial screen and play song (on repeat, of course) on game page and results page
* add Travis as a component in the lower right, who returns a response and acts like Clippy from old Microsoft Word
  * 'You did not pass Travis!'
* we need more questions and results.
* make it possible to play again, either by having different players/accounts or by reseting the game back to nil
* add dynamic content to question and answer texts
* add response component to display response text during survey. response text has been added to the first question in question api for reference of where it should go.
* calculate approval at the end instead as a derived value?
