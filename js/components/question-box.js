import html from '../libs/html.js';
import questionApi from '../services/question-api.js';

import Answer from './answer.js';

import nationApi from '../services/nation-api.js';


let template = function(question) {
    return html`
        <h3> ${question.text} </h3>
        <div class="answer-list"></div>
   `;
};

export default class QuestionBox{
    constructor(props) {
        this.questions = questionApi.getAll();
        this.question = props.question;
        this.handleAnswer = props.handleAnswer;
        this.nation = nationApi.get();

    }

    render() {
        let dom = template(this.question);

        this.div = dom.querySelector('div');
        this.div.addEventListener('click', () => {

            this.handleAnswer();
        });

        let answerList = dom.querySelector('.answer-list');
        let answer = new Answer({
            
            question: this.questions[this.nation.question],
            index: 0,


        });
        answerList.appendChild(answer.render());
            
        return dom;
    }
}