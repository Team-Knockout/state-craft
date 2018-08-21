import html from '../libs/html.js';

let template = function(text) {
    return html`
    <div class="result-box">
        <p>${text}</p>
    </div>
   `;
};

export default class Result{
    constructor(props) {
        this.result = props.result;
    }

    render() {
        let dom = template(this.text);
        return dom;
    }
}