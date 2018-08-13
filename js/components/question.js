import html from '../libs/html.js';
import questionApi from '../services/question-api.js';


let template = function(question) {
    return html`
        <label>${question.text}</label>

        <input type="radio" name="question" value="${question['options'][0].answer}">
        <input type="radio" name="question" value="${question['options'][1].answer}">
        <button type="submit" value="">As you wish, my liege</button>

   `;
};

export default class Question{
    constructor(props) {
        this.questions = questionApi.getAll();
        this.question = props.question;
        this.questionRemover(event) = props.questionRemover(event);
    }

    render() {
        let dom = template(this.question);

        let submit = dom.querySelector('button');
        submit.addEventListener('submit', this.questionRemover(event));
    


        return dom;
    }
}