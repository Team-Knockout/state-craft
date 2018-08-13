let questions = [
    {
        text: 'im a question',
        option:[{
            text: 'do this',
            effects: (nation) => {
                nation.personalFreedom += 1;
            }
        },
        {
            text: 'do that',
            effects: (nation) => {
                nation.personalFreedom -= 1;
            }
        }] 
    },
    {
        text: 'im another question',
        option:[{
            text: 'do this',
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
    get: (i) => questions[i],
}   