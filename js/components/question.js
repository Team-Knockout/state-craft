
import html from '../libs/html.js';

let template = function(question) {
    return html`
        <h3>${question.text}</h3>
    `;
};

export default class Question {
    constructor(props) {
        this.question = props.question;
    }

    render() {

        let dom = template(this.question);

        return dom;
    }
}

