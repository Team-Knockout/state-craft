import html from '../libs/html.js';

import Header from '../layout/header.js';
import Footer from '../layout/footer.js';
import Result from '../components/result.js';



let template = function() {
    return html`
    <header></header>
        <main>
            <h2>Here are your results</h2>
            <section class="results"></section>
        </main>
    <footer></footer>
        
   `;
};

export default class App{
    constructor() {
        this.text = 'hi';
    }

    render() {
        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header;
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let resultSection = dom.querySelector('.results');
        let results = new Result ({
            text: this.text,
        });
        resultSection.appendChild(results.render());
        

        return dom;
    }
}