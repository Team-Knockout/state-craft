import html from '../libs/html.js';
import Footer from '../layout/footer.js';
import NationCreator from '../components/nation-creator.js';
import nationApi from '../services/nation-api.js';

let template = function() {
    return html`
    <main class="home-page">
        
    </main>
    <footer></footer>
   `;
};

export default class App {
    constructor() {
        this.nation = nationApi.get();

    }

    render() {

        let dom = template();
        
        let foot = dom.querySelector('footer');
        let footer = new Footer;
        foot.appendChild(footer.render());
                
        let main = dom.querySelector('main');
        let nationCreator = new NationCreator();
        main.appendChild(nationCreator.render());

        return dom;
    }
}
