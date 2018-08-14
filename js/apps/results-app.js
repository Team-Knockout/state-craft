import html from '../libs/html.js';

import Header from '../layout/header.js';
import Footer from '../layout/footer.js';



let template = function() {
    return html`
    <header></header>
        <main>
            <h2>Here are your results</h2>
        </main>
    <footer></footer>
        
   `;
};

export default class App{
    constructor() {
       
    }

    render() {
        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header;
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        return dom;
    }
}