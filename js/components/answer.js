
import html from '../libs/html.js';

let template = function(option) {
    return html`
        <p class="answer"> ${option.answer}</p>
   `;
};

export default class Answer {
    constructor(props) {
        this.option = props.option;
        this.onAnswer = props.onAnswer;
    }

    render() {

        let dom = template(this.option);
        let answer = dom.querySelector('.answer');
        answer.addEventListener('click', () => {
            this.onAnswer(this.option);
        });

        return dom;
    }
}

