import html from '../libs/html.js';
import questionApi from '../services/question-api.js';

import Answer from './answer.js';

import nationApi from '../services/nation-api.js';
import Question from './question.js';


let template = function() {
    return html`
        <div class="question-text"></div>
        <div class="answer-list"></div>
   `;
};

export default class QuestionBox{
    constructor(props) {
        this.questions = questionApi.getAll();
        this.nation = nationApi.get();
        this.question = props.question;
    }

    render() {
        let dom = template(this.question);

        let questionText = dom.querySelector('.question-text');
        let newQuestion = new Question({
            question: this.questions[this.nation.question],
        });
        questionText.appendChild(newQuestion.render());

        let answerList = dom.querySelector('.answer-list');
        
        for(let i = 0; i < this.questions[this.nation.question].options.length; i++) {
            
            let answer = new Answer({
    
                question: this.questions[this.nation.question],
                index: i,
                handleAnswer: () => {
    
                    this.nation.question++;
                    if(this.nation.question < 10) {
    
                        while(questionText.lastElementChild) {
                            questionText.lastElementChild.remove();
                        }
                        while(answerList.lastElementChild) {
                            answerList.lastElementChild.remove();
                        }
    
                        answer.question = this.questions[this.nation.question];
                        
                        newQuestion.question = this.questions[this.nation.question];
    
                        questionText.appendChild(newQuestion.render());
                        answerList.appendChild(answer.render());
                    }
                    else {
                        window.location.replace('/pages/results.html');
                    }
                },
                handleNation: (selectedIndex) => {
                    console.log(selectedIndex);
                    this.questions[this.nation.question]['options'][selectedIndex].effects(this.nation);
    
                    console.log('in handleNation', 'index', this.index, 'nation', this.nation);
                },
            });

            
            answerList.appendChild(answer.render());
        }

            
        return dom;
    }
}


    