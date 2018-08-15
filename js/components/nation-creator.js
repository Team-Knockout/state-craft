//* this is the page with the form that collects users leader name, country name,
//* flag

import html from '../libs/html.js';

import nationApi from '../services/nation-api.js';


let template = function() {
    return html`

 <div class="creator-section">
    <form onsubmit="window.location='survey.html';">
        <sup>*</sup>Leader Name:<br>
        <input class="form-input" type="text" name="leaderName" value="Robin of Locksley" required><br>
        <sup>*</sup>Nation Name:<br>
        <input class="form-input"  type="text" name="nationName" value="Paradise" required><br>
        <sup>*</sup>National Motto:<br>
        <input class="form-input" type="text" name="nationMotto" value="Not all paradise has been lost" required><br>
        
        <sup>*</sup>Pick a Flag:<br>
        <label>
            <input type="radio" name="nationFlag" value="assets/flag1.png" required/>
            <img class="flag-image" src="assets/flag1.png">
        </label>
        <label>
            <input type="radio" name="nationFlag" value="assets/flag2.png" required/>
            <img class="flag-image" src="assets/flag2.png">
        </label>
        <label>
            <input type="radio" name="nationFlag" value="assets/flag3.png" required/>
            <img class="flag-image" src="assets/flag3.png">
        </label>
        <label>
            <input type="radio" name="nationFlag" value="assets/flag4.png" required/>
            <img class="flag-image" src="assets/flag4.png">
        </label>
   
        <input class="form-button" type="submit" value="StartGame" required>
        <p><sup>*</sup>required</p>
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
            console.log(inputs);

            let tempData = [];

            for(let i = 0; i < inputs.length; i++) {
                let attribute = inputs[i].value;
                tempData.push(attribute);

                if(inputs[i].checked){
                    this.nation.nationFlag = tempData[i];
                }
            }

            this.nation.leaderName = tempData[0];
            this.nation.nationName = tempData[1];
            this.nation.nationMotto = tempData[2];
        });


        return dom;
    }
}