import html from '../libs/html.js';
import NationCreator from '../components/nation-creator.js';
import Header from '../header.js';

import nationApi from '/js/services/nation-api.js';


let template = function() {
    return html`

    <main> Hello World</main>
        
   `;
};

export default class App {
    constructor() {
        this.nation = nationApi.get();

       
    }

    render() {

        let dom = template();
        let main = dom.querySelector('main');

        this.header = dom.querySelector('header');
        let appHeader = new Header({});
        this.header.appendChild(appHeader.render());

        console.log(this.nation);

        let nationCreator = new NationCreator({
            nationCreator: NationCreator
        });

        main.appendChild(nationCreator.render());
        return dom;
    }
}
