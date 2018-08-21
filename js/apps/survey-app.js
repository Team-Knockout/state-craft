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

    <main class="question-page">
        <section class="flex-container">
            <div class="question-area-intro"> 
                <h1>All hail ${nation.leaderName}! Do you have what it takes? </h1>
                <img class="question-area-speaker-img" src="assets/littleman.png">
            </div>
            <section class="question-area"></section>
        </section>    
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
        let questionAreaIntro = dom.querySelector('.question-area-intro');
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
                }
                head.appendChild(header.render());
            },
            questionArea: questionArea,
        });

        function warning() {
            return html`
                <p>You've already answered all of the questions!</p> <br>
                <input class="reset" type="submit" onclick="location.href='index.html';" name="reset" value="Play Again">    

            `;
        }

        function renderQuestionBox(nation, location) {
            if(nation.question < 10) {
                location.appendChild(questionBox.render());
            }
            else {
                while(questionAreaIntro.lastChild){
                    questionAreaIntro.lastChild.remove();
                }
                questionAreaIntro.setAttribute('style', 'display:none;');
                location.appendChild(warning());
                let resetNation = dom.querySelector('.reset');
                resetNation.addEventListener('click', () => {
                    window.resetNation();
                });
            }
        }
        renderQuestionBox(this.nation, questionArea);

        return dom;
    }
}

