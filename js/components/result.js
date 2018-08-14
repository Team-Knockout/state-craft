import html from '../libs/html.js';

let template = function(text) {
    return html`
        <p>${text}</p>
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