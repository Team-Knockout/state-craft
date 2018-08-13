import html from '../libs/html.js';
import NationCreator from '../components/nation-creator.js';


let template = function() {
    return html`

    <main> Hello World</main>
        
   `;
};

export default class App {
    constructor() {
       
    }

    render() {

        let dom = template();
        let main = dom.querySelector('main');


        let nationCreator = new NationCreator({
            nationCreator: NationCreator
        });

        main.appendChild(nationCreator.render());
        return dom;
    }
}