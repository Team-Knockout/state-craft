import data from '/js/services/game-storage.js';

let nation = data.nation;

if(!nation) {
    data.nation = createNation();
    nation = data.nation;
}

function createNation() {

    let data = {
        leaderName: '',
        nationName: '',
        nationMotto: '',
        nationFlag: '',
        personalFreedom: 0,
        economicFreedom: 0,
        politicalFreedom: 0,
        approval: 0,
        population: 0,
        econProduction: 0,
        health: 0,
        safety: 0, 
        environment: 0 
    };

    return data;
}


export default {
    get: () => nation,

};