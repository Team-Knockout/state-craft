


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
        <form> 


        </form>
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
        let form = dom.querySelector('form');

        let question = new Question({
            question: this.questions[this.nation.question],

            questionRemover: (event) => {
                event.preventDefault();
                console.log('string');
                return false;
            }
        });
        form.appendChild(question.render());
        
        
        let nationDisplay = new NationDisplay({
            nation: this.nation
        });
        main.appendChild(nationDisplay.render());

        return dom;
    }
}

