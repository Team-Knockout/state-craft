# Statecraft

There are good and bad leaders, but which one are you? In National Pride, the fate of your nation lies in your hands. Will you be proud of your work?

## Notes

### To Fix

#### Core Functionality

* refactor everything
* account for cases where nation property has a negative value
* fix bug where the data is currently updated in a JS object but should be updated in local storage

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
