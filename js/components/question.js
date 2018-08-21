
import html from '../libs/html.js';

let template = function(question) {
    return html`
        <h3>${question.title}</h3>
        <h4>${question.text}</h4>
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

