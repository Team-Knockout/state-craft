
import html from '../libs/html.js';

let template = function(question, index) {
    return html`
        <p class="answer"> ${question['options'][index].answer}</p>
   `;
};

export default class Answer {
    constructor(props) {
        this.question = props.question;
        this.index = props.index;

    }

    render() {

        let dom = template(this.question, this.index);

        return dom;
    }
}

