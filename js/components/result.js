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
        this.text = props.text;
    }

    render() {
        let dom = template(this.text);
        return dom;
    }
}