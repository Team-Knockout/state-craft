


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
        <section class="question">
            <h2>Answer a question!</h2>
        </section>
        
        <section class="nation-display"></section>
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
        let header = new Header({
            nation: this.nation  
        });
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let questionSection = dom.querySelector('.question');
        let question = new Question({
        
            
            question: this.questions[this.nation.question],

            handleAnswer: () => {

                this.nation.question++;
                if(this.nation.question < 10){
                    console.log('questionSection', questionSection); 
                    for(let i = 0; i < questionSection.length; i++) {
                        console.log('the new question index is:', this.nation.question);
                        questionSection.lastElementChild.remove();
                    }
                    questionSection.appendChild(question.render());
                }
                else {
                    window.location.replace("/pages/results.html");
                }
            }
        });

        function warning(){
            return html`
                <p>You've already answered all of the questions!</p>
                <p>Dev note: run resetNation() in the console to be able to play again</p>
            `;
        }     
        if(this.nation.question < 10) {
            questionSection.appendChild(question.render());
        }
        else {
            questionSection.appendChild(warning());
        }
        
        let nationSection = dom.querySelector('.nation-display');
        let nationDisplay = new NationDisplay({
            nation: this.nation
        });
        nationSection.appendChild(nationDisplay.render());

        return dom;
    }
}

