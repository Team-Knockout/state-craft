import data from './game-storage.js';

let nation = data.nation;

if(!nation) {
    data.nation = createNation();
    nation = data.nation;
}

function createNation() {

    let data = {
        question: 0,
        
        leaderName: '',
        nationName: '',
        nationMotto: '',
        nationFlag: '',

        personalFreedom: 2.5,
        economicFreedom: 2.5,
        politicalFreedom: 2.5,
        approval: 2.5,
        population: 2.5,
        econProduction: 2.5,
        health: 2.5,
        safety: 2.5, 
        environment: 2.5,

        govType: 'Newborn Republic',
        govOverview: 'Did you even play the game?',
        govDetails: 'We built this great game, and you didn\'t even bother to answer a single question in it. Being a leader requires discipline and perseverance, neither of which you are showing right now.'
    };

    return data;
}


export default {
    get: () => nation,
    getProp: (prop) => nation[prop],
};