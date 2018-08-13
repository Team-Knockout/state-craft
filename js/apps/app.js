import html from '../libs/html.js';
import NationCreator from '../components/nation-creator.js';
import Footer from '../components/footer.js';


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
        let footer = new Footer;


        let nationCreator = new NationCreator({
            nationCreator: NationCreator
        });

        
        main.appendChild(nationCreator.render());
        main.appendChild(footer.render());
        return dom;
    }
}