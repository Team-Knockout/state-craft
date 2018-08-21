import html from '../libs/html.js';
  
import Header from '../layout/header.js';
import Footer from '../layout/footer.js';

import QuestionBox from '../components/question-box.js';
import questionApi from '../services/question-api.js';

import nationApi from '../services/nation-api.js';

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

// nice secondary template function. I'd promote it to be up here
// to be more consistent with other template
let warning = function() {
    return html`
        <p>You've already answered all of the questions!</p> <br>
        <input class="reset" type="submit" name="reset" value="Play Again">    
    `;
};


export default class App {
    constructor() {
        this.questions = questionApi.getAll();
        this.nation = nationApi.get();
    }

    renderHeader() {
        let head = this.head;

        while(head.lastElementChild) {
            head.lastElementChild.remove();
        }

        let header = new Header({
            nation: this.nation  
        });

        head.appendChild(header.render());
    }

    renderQuestionBox() {
        let questionArea = this.questionArea;

        while(questionArea.lastElementChild){
            questionArea.lastElementChild.remove();
        }

        let questionBox = new QuestionBox({
            question: this.questions[this.nation.question],
            onAnswer: (option) => {
                option.effects(this.nation);
                this.nation.setType();                    
                this.nation.question++;
                    
                if(this.nation.question >= 10) {
                    window.location.replace('results.html');
                }
                else {    
                    this.renderHeader();
                    this.renderQuestionBox();
                }
            }
        });

        questionArea.appendChild(questionBox.render());
    }

    // not really sure the condition that triggers this...
    renderReset() {
        let questionAreaIntro = this.questionAreaIntro;

        while(questionAreaIntro.lastChild){
            questionAreaIntro.lastChild.remove();
        }

        questionAreaIntro.appendChild(warning());

        this.resetNation.addEventListener('click', () => {
            window.resetNation();
            window.location.href = 'index.html';
        });
    }

    render() {

        let dom = template(this.nation);

        this.head = dom.querySelector('header');
        this.renderHeader();
        
        let foot = dom.querySelector('footer');
        let footer = new Footer();
        foot.appendChild(footer.render());

        this.resetNation = dom.querySelector('.reset');
        this.questionArea = dom.querySelector('.question-area');
        this.questionAreaIntro = dom.querySelector('.question-area-intro');

        this.renderQuestionBox();

        return dom;
    }
}

