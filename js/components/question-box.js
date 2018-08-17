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
        this.questions = props.questions;
        this.nation = props.nation;
        this.question = props.question;
        this.reRenderQuestionBox = props.reRenderQuestionBox;
        this.questionArea = props.questionArea;
        this.setType = props.setType;
        this.getTypes = props.getTypes;
    }

    render() {
        let dom = template(this.question);

        let questionText = dom.querySelector('.question-text');
        let answerList = dom.querySelector('.answer-list');

        let newQuestion = new Question({
            question: this.questions[this.nation.question],
        });
        questionText.appendChild(newQuestion.render());

        
        for(let i = 0; i < this.questions[this.nation.question].options.length; i++) {
            
            let answer = new Answer({
    
                question: this.questions[this.nation.question],
                index: i,
                handleAnswer: (selectedIndex) => {

                    this.questions[this.nation.question]['options'][selectedIndex].effects(this.nation);
                    this.setType(this.nation);                    
                    this.nation.question++;
                    
                    if(this.nation.question >= 10) {
                        window.location.replace('results.html');
                    }
                    else {
                        this.reRenderQuestionBox(this.nation, this.questionArea);
                    }
                },
            });
            answerList.appendChild(answer.render());
        }
        
        return dom;
    }
}
