


import html from '../libs/html.js';
  
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';

import QuestionBox from '../components/question-box.js';
// import questionApi from '../services/question-api.js';

import NationDisplay from '../components/nation-display.js';
import nationApi from '../services/nation-api.js';

let template = function() {
    return html`
    <header></header>
    <main>
        <h2>Answer a question!</h2>
        <section class="question-area"></section>
        <section class="nation-display"></section>
    </main>
    <footer></footer>
   `;
};

export default class App {
    constructor() {
        // this.questions = questionApi.getAll();
        this.nation = nationApi.get();

        console.log('nations showing', this.nation);
    }

    render() {

        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header;
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());


        let questionArea = dom.querySelector('.question-area');   
        let questionBox = new QuestionBox({});
 
        function warning(){
            return html`
                <p>You've already answered all of the questions!</p>
                <p>Dev note: run resetNation() in the console to be able to play again</p>
            `;
        }     
        if(this.nation.question < 10) {
            questionArea.appendChild(questionBox.render());
        }
        else {
            questionArea.appendChild(warning());
        }
        
        let nationSection = dom.querySelector('.nation-display');
        let nationDisplay = new NationDisplay({
            nation: this.nation
        });
        nationSection.appendChild(nationDisplay.render());

        return dom;
    }
}

