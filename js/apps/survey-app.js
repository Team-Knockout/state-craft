


import html from '../libs/html.js';
  
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';

import QuestionBox from '../components/question-box.js';
import questionApi from '../services/question-api.js';

import nationApi from '../services/nation-api.js';
import typeApi from '../services/type-api.js';


let template = function(nation) {
    return html`
    <header></header>
    <main>
        <div class="question-area-title">
            <img class="speaker-img" src="../../assets/littleman.png">
            <h1>All hail ${nation.leaderName}! Do you have what it takes? </h1>
        </div>
        <section class="question-area"></section>
    </main>
    <footer></footer>
   `;
};

export default class App {
    constructor() {
        this.questions = questionApi.getAll();
        this.nation = nationApi.get();
        this.setType = typeApi.set;
        this.getTypes = typeApi.get;
    }

    render() {

        let dom = template(this.nation);

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header({
            nation: this.nation  
        });
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let questionArea = dom.querySelector('.question-area');
        let questionAreaTitle = dom.querySelector('.question-area-title');
        let questionBox = new QuestionBox({
            nation: this.nation,
            questions: this.questions,
            setType: this.setType,
            getTypes: this.getTypes,

            reRenderQuestionBox: (nation, location) => {
                while(questionArea.lastElementChild){
                    questionArea.lastElementChild.remove();
                }
                renderQuestionBox(nation, location);
                while(head.lastElementChild) {
                    head.lastElementChild.remove();
                    console.log(this.nation);
                }
                head.appendChild(header.render());
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
                while(questionAreaTitle.lastChild){
                    questionAreaTitle.lastChild.remove();
                }
                questionAreaTitle.setAttribute('style', 'display:none;');
                location.appendChild(warning());
            }
        }
        renderQuestionBox(this.nation, questionArea);

        return dom;
    }
}

