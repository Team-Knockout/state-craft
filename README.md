# Statecraft

There are good and bad leaders, but which one are you? In National Pride, the fate of your nation lies in your hands. Will you be proud of your work?

## Notes

### To Fix

#### Core Functionality

* use clickable elements instead of radio buttons because the radio buttons are clunky, and clicky boxes are cool looking and easier to use.
* take the answer that is coming in, look up its effects function, and then call it. we should probably change away from radio buttons before setting this up because the algorithm will be different depending.
* we need to make the previous question get removed, and the next question that shows up needs to be the _next_ question, not the same one.
* have the results page render results according to the state of the nation object

#### Easier Stuff

* make it possible to play again, either by having different players/accounts or by reseting the game back to nil
* we need more styling.
  * the 'nation display' component should be moved from where it's at. to the header? to a sidebar?
* we need more questions and results.

### Data we're storing per nation

#### Part of init form

* leaderName
* nationName
* nationMotto
* nationFlag

#### Other properties

* personalFreedom
* economicFreedom
* politicalFreedom
* approval
* population
* econProduction
  * this is in terms of GDP
* health
  * this is biological health
* safety
  * this includes crime and anything else that affects safety
* environment

### Aspects of our API

* country properties
* questions(and consequences)
* results text(and conditions)
