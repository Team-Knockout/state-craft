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
        let answerList = dom.querySelector('.answer-list');

        let newQuestion = new Question({
            question: this.questions[this.nation.question],
        });
        questionText.appendChild(newQuestion.render());

        

        //  this.questions[this.nation.question] selects a question in the question api
        for(let i = 0; i < this.questions[this.nation.question].options.length; i++) {
            
            let answer = new Answer({
    
                question: this.questions[this.nation.question],
                index: i,
                handleAnswer: (selectedIndex) => {


                    //increment the nation object
                    this.questions[this.nation.question]['options'][selectedIndex].effects(this.nation);
                    this.nation.question++;

                    //helper function
                    function clearElements(element) {
                        while(element.lastElementChild) {
                            element.lastElementChild.remove();
                        }    
                    }

                    if(this.nation.question < 10) {

                        // clearing elements
                        clearElements(questionText);
                        clearElements(answerList);
                        
                        // setting non-existent objects' properties to new values
                        newQuestion.question = this.questions[this.nation.question];
                        answer.question = this.questions[this.nation.question];
    
                        //appending the dom with the non-existent objects' new values
                        questionText.appendChild(newQuestion.render());
                        answerList.appendChild(answer.render());
                    }
                    else {
                        window.location.replace('/pages/results.html');
                    }
                },
            });

            answerList.appendChild(answer.render());
        }

            
        return dom;
    }
}


    