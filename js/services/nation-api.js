import data from './game-storage.js';

let nation = data.nation;

if(!nation) {
    data.nation = createNation();
    nation = data.nation;
}

function createNation() {

    let data = {
        question: 0,
        answers: [],
        
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
    };

    return data;
}


export default {
    get: () => nation,
    getProp: (prop) => nation[prop],
};