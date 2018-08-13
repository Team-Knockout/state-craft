import html from '../libs/html.js';
import NationDisplay from '/js/components/nation-display.js';
import nationApi from '/js/services/nation-api.js';
let template = function() {
    return html`
        <main></main>
   `;
};

export default class GameApp{
    constructor() {
        this.nation = nationApi.get();
        console.log('nations showing', this.nation);
    }
   

    render() {
        let dom = template();
        let main = dom.querySelector('main');
        let nationDisplay = new NationDisplay({
            nation: this.nation
        });

        main.appendChild(nationDisplay.render());
        return dom;
    }
}