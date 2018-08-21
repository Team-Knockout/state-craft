import html from '../libs/html.js';
import nationApi from '../services/nation-api.js';


let template = function() {
    return html`
        <div class="flex-container">

            <section class="homepage-intro-area">
                <h1>StateCraft</h1> 
                <h3>See if you have want it takes to run a nation!</h3>
                <p>To begin your term as
                leader; create your nation, pick a flag and start the game </p>
                <img class="welcome-image" src="assets/little-man-homepage.png">
            </section>

            <section class="creator-section">
                <form>
                    <sup>*</sup>Leader Name:<br>
                    <input class="form-input" type="text" name="leaderName" required><br>
                    <sup>*</sup>Nation Name:<br>
                    <input class="form-input"  type="text" name="nationName" required><br>
                    <sup>*</sup>National Motto:<br>
                    <input class="form-input" type="text" name="nationMotto" required><br>
                    
                    <sup>*</sup>Pick a Flag:<br>
                    <section class="homepage-flags">
                        <label>
                            <input class="nationFlag" type="radio" name="nationFlag" value="assets/flag1.png" required/>
                            <img class="flag-image" src="assets/flag1.png">
                        </label>
                        <label>
                            <input class="nationFlag" type="radio" name="nationFlag" value="assets/flag2.png" required/>
                            <img class="flag-image" src="assets/flag2.png">
                        </label>
                        <label>
                            <input class="nationFlag" type="radio" name="nationFlag" value="assets/flag3.png" required/>
                            <img class="flag-image" src="assets/flag3.png">
                        </label>
                        <label>
                            <input class="nationFlag" type="radio" name="nationFlag" value="assets/flag4.png" required/>
                            <img class="flag-image" src="assets/flag4.png">
                        </label>
                    </section>

                    <input class="form-button" type="submit" value="Start Game" required>
                    <p><sup>*</sup>required</p>
                </form>
            </section>

        </div>   
   `;
};

export default class NationCreator {
    constructor(props) {
        this.onCreated = props.onCreated;
        this.nation = nationApi.get();
    }

    render() {
        let dom = template();
        
        let form = dom.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // use form elements
            let elements = form.elements;
            
            this.nation.leaderName = elements.leaderName.value;
            this.nation.nationName = elements.nationName.value;
            this.nation.nationMotto = elements.nationMotto.value;
            // this "just works" with named radio buttons :)
            this.nation.nationFlag = elements.nationFlag.value;

            // tell the parent we are done
            this.onCreated();
        });

        return dom;
    }
}
