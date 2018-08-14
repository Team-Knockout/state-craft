import html from '../libs/html.js';
import questionApi from '../services/question-api.js';


let template = function(question) {
    return html`
        <form>
                <label>${question.text}</label>
                <input type="radio" name="question" value="${question['options'][0].answer}">
                <input type="radio" name="question" value="${question['options'][1].answer}">
                <button type="submit" value="">As you wish, my liege</button>
        </form>

   `;
};

export default class Question{
    constructor(props) {
        this.questions = questionApi.getAll();
        this.question = props.question;
        this.handleAnswer = props.handleAnswer;
    }

    render() {
        let dom = template(this.question);

        let form = dom.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.handleAnswer();
        });
            
    


        return dom;
    }
}