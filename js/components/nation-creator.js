//* this is the page with the form that collects users leader name, country name,
//* flag

import html from '../libs/html.js';

import nationApi from '../services/nation-api.js';


let template = function() {
    return html`

 <div class="creator-section">
    <form>
        Leader Name:<br>
        <input class="form-input" type="text" name="leaderName" value="Robin of Locksley"><br>
        Nation Name:<br>
        <input class="form-input"  type="text" name="nationName" value="Paradise"><br>
        National Motto:<br>
        <input class="form-input" type="text" name="nationMotto" value="Not all paradise has been lost"><br>
        
        <input class="form-button" type="submit" value="startGame" onclick="window.location='/pages/survey.html';">
    </form>
</div>
        
   `;
};

export default class NationCreator {
    constructor() {
        this.nation = nationApi.get();

       
    }

    render() {
        let dom = template();
        
        let div = dom.querySelector('div');
        div.addEventListener('submit', (event) => {
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
        });


        return dom;
    }
}