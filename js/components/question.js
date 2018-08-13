import html from '../libs/html.js';
import questionApi from '../services/question-api.js';


let template = function(question) {
    return html`
        <p>${question.text}</p>
        <p>${question['options'][0].answer}</p>
        <p>${question['options'][1].answer}</p>
   `;
};

export default class Question{
    constructor(props) {
        this.questions = questionApi.getAll();
        this.question = props.question;
    }

    render() {
        let dom = template(this.question);


        return dom;
    }
}