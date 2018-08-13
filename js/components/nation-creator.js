//* this is the page with the form that collects users leader name, country name,
//* flag

import html from '../libs/html.js';

import nationApi from '../services/nation-api.js';


let template = function() {
    return html`
    <form>
        Leader Name:<br>
        <input type="text" name="leaderName" value="Robin of Locksley"><br>
        Nation Name:<br>
        <input type="text" name="nationName" value="Paradise"><br>
        National Motto:<br>
        <input type="text" name="nationMotto" value="Not all paradise has been lost"><br>
        
        <input type="submit" value="startGame">
    </form>
        
   `;
};

export default class NationCreator {
    constructor() {
        this.nation = nationApi.get();

       
    }

    render() {
        let dom = template();
        
        let form = dom.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let inputs = event.target.querySelectorAll('input');

            let tempData = [];

            for(let i = 0; i < inputs.length; i++) {
                let attribute = inputs[i].value;
                tempData.push(attribute);
            }

            this.nation.leaderName = tempData[0];
            this.nation.nationName = tempData[1];
            this.nation.nationMotto = tempData[2];
            
            console.log('in nation-creator', this.nation);

        });


        return dom;
    }
}