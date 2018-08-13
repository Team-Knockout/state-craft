let questions = [{
    text: 'im a question',
    option1: {
        text: 'do this',
        effects: () => {
            personalFreedom += 1;
        }
    },
    option2: {
        text: 'do that',
        effects: () => {
            personalFreedom -= 1;
        }
    },

}];