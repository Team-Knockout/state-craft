import html from '/js/libs/html.js';

import Header from '/js/layout/header.js';
import Footer from '/js/layout/footer.js';

import NationCreator from '../components/nation-creator.js';
import nationApi from '/js/services/nation-api.js';

let template = function() {
    return html`
    <header></header>
    <main>Hello World</main>
    <footer></footer>
   `;
};

export default class App {
    constructor() {
        this.nation = nationApi.get();

       
    }

    render() {

        let dom = template();
        let main = dom.querySelector('main');
        let footer = new Footer;

        let header = dom.querySelector('header');
        console.log(header);
        let appHeader = new Header({});
        header.appendChild(appHeader.render());

        console.log('in app.js', this.nation);

        let nationCreator = new NationCreator({
            test: 'i a prop',
        });

        
        main.appendChild(nationCreator.render());
        main.appendChild(footer.render());
        return dom;
    }
}
