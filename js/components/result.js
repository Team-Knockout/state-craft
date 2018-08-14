import html from '../libs/html.js';

let template = function() {
    return html`
        <p>Result</p>
   `;
};

export default class Result{
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}