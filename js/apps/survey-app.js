


import html from '../libs/html.js';
  
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';

import QuestionBox from '../components/question-box.js';
// import questionApi from '../services/question-api.js';
import nationApi from '../services/nation-api.js';

let template = function() {
    return html`
    <header></header>
    <main>
        <div class="question-area-title">
            <h1>What Kind Of Nation Will You ___?</h1>
            <p>Answer the series of questions below to find out. </p>
        </div>
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
    }

    render() {

        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header({
            nation: this.nation  
        });
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let questionArea = dom.querySelector('.question-area');
        let questionBox = new QuestionBox({
            reRenderQuestionBox: (nation, location) => {
                while(questionArea.lastElementChild){
                    questionArea.lastElementChild.remove();
                }
                renderQuestionBox(nation, location);
            },
            questionArea: questionArea,
        });

        function warning() {
            return html`
                <p>You've already answered all of the questions!</p>
                <p>Dev note: run resetNation() in the console to be able to play again</p>
            `;
        }

        function renderQuestionBox(nation, location) {
            if(nation.question < 10) {
                location.appendChild(questionBox.render());
            }
            else {
                location.appendChild(warning());
            }
        }
        renderQuestionBox(this.nation, questionArea);

        return dom;
    }
}

