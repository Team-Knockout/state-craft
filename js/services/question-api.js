
// How to access
// questions[i]['text']
// questions[i]['options'][j].answer
// questions[i]['options'][j].effects(this.nation)


let questions = [
    {
        title: 'Should Democracy Be Compulsory?',
        text: 'In response to a slow news week, certain highbrow newspapers have stirred up the debate over voluntary vs compulsory voting.',
        options:[{
            answer: '"Compulsory voting makes about as much sense as having the death penalty for attempted suicide," says civil rights activist @@RANDOMNAME@@. "You can\'t force people to be free! You can only give them the choice. Besides, if all those derelicts who can\'t be bothered to get off their butts once every few years voted, who would they elect? I shudder to think."',
            effects: (nation) => {
                nation.personalFreedom += 0.05;
            }
        },
        {
            answer: '"It\'s not contradictory at all," argues political commentator @@RANDOMNAME@@. "The fact is, if not everyone votes, the outcome isn\'t truly representative. Some groups—like elderly gun nuts—vote more often than others. That\'s why we always end up with such terrible politicians."',
            effects: (nation) => {
                nation.personalFreedom -= 0.05;
            }
        },
        {
            answer: '"This raises an interesting issue," says @@RANDOMMALENAME@@, your brother. "And that is: why do we need elections, anyway? Seems to me it would be much simpler if you just decided what was right, and did it. Wouldn\'t that save everyone a lot of time?"',
            effects: (nation) => {
                nation.personalFreedom -= 0.05;
            }
        }] 
    },
    {
        title: 'Where\'s The Love Gone?',
        text: 'Last night the respected tabloid TV show "60 Minutes" ran a report on @@NAME@@\'s rising divorce rate. What is happening to the nuclear family?',
        options:[{
            answer: 'yes',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'of course',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }] 
    },
    {
        title: '',
        text: 'im a third question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im a fourth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im a fifth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im sixth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im seventh question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im eigth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im ninth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        title: '',
        text: 'im tenth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            answer: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
];


export default {
    getOne: (i) => questions[i],
    getAll: () => questions,
};
