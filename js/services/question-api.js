
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
                nation.personalFreedom += 1;
            }
        },
        {
            answer: 'Yes!',
            effects: (nation) => {
                nation.personalFreedom -= 1;
            }
        }] 
    },
    {
        text: 'im another question',
        options:[{
            answer: 'do this',
            effects: (nation) => {
                nation.economicFreedom += 1;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.economicFreedom -= 1;
            }
        }] 
    },
];


export default {
    getOne: (i) => questions[i],
    getAll: () => questions,
};
