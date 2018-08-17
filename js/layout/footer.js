import html from '../libs/html.js';

let template = function() {
    return html`
        <img class="logo" src="assets/favicon.png">
        <p>© Statecraft | 2018</p>
   `;
};

export default class Footer {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}