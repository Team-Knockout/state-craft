import html from '../libs/html.js';
import questionApi from '../services/question-api.js';


let template = function(question) {
    return html`

        <h3> ${question.text} </h3>
        <div>
            <p class="answer"> ${question['options'][0].answer}</p>
            <p class="answer"> ${question['options'][1].answer}</p>
        </div>


   `;
};

export default class QuestionList{
    constructor(props) {
        this.questions = questionApi.getAll();
        this.question = props.question;
        this.handleAnswer = props.handleAnswer;
    }

    render() {
        let dom = template(this.question);

        this.div = dom.querySelector('div');
        this.div.addEventListener('click', () => {

            this.handleAnswer();
        });
            
        return dom;
    }
}