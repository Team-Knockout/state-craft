
// How to access
// questions[i]['text']
// questions[i]['options'][j].answer
// questions[i]['options'][j].effects(this.nation)


let questions = [
    {
        text: 'Should we ban unicorns?',
        options:[{
            answer: 'No!',
            effects: (nation) => {
                nation.personalFreedom += 0.05;
            }
        },
        {
            answer: 'Yes!',
            effects: (nation) => {
                nation.personalFreedom -= 0.05;
            }
        }] 
    },
    {
        text: 'Should we do the macarena?',
        options:[{
            answer: 'yes',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'of course',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }] 
    },
    {
        text: 'im a third question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im a fourth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im a fifth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im sixth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im seventh question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im eigth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im ninth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 0.05;
            }
        }]
    },
    {
        text: 'im tenth question',
        options: [{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 0.05;
            }
        },
        {
            text: 'do that',
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
