


import html from '../libs/html.js';
  
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';

import Question from '../components/question.js';
import questionApi from '../services/question-api.js';

import NationDisplay from '/js/components/nation-display.js';
import nationApi from '/js/services/nation-api.js';

let template = function() {
    return html`
    <header></header>
    <main>
        <h2>Answer a question!</h2>
    </main>
    <footer></footer>
   `;
};

export default class App {
    constructor() {
        this.questions = questionApi.getAll();
        this.nation = nationApi.get();
        console.log('nations showing', this.nation);
    }

    render() {

        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header({});
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let main = dom.querySelector('main');

        let question = new Question({
            question: this.questions[0],
        });
        main.appendChild(question.render());

        let nationDisplay = new NationDisplay({
            nation: this.nation
        });
        main.appendChild(nationDisplay.render());

        return dom;
    }
}

