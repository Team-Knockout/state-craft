import html from '../libs/html.js';
import Answer from './answer.js';
import Question from './question.js';


let template = function() {
    return html`
        <div class="question-box">

            <span class="highlight"> The issue you're faced with... </span>
            <div class="question-text"></div>

            <span class="highlight"> your choices </span>
            <div class="answer-list"></div>
            
        </div>
   `;
};

export default class QuestionBox{
    constructor(props) {
        this.question = props.question;
        this.onAnswer = props.onAnswer;
    }

    render() {
        let dom = template(this.question);

        let questionText = dom.querySelector('.question-text');
        let answerList = dom.querySelector('.answer-list');

        let newQuestion = new Question({
            question: this.questions[this.nation.question],
        });

        questionText.appendChild(newQuestion.render());

        let options = this.questions[this.nation.question].options;

        for(let i = 0; i < options.length; i++) {
            let option = options[i];

            let answer = new Answer({
                option: option,
                handleAnswer: this.onAnswer,
            });

            answerList.appendChild(answer.render());
        }
        
        return dom;
    }
}
