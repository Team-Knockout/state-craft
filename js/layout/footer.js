import html from '../libs/html.js';

let template = function() {
    return html`
        <img class="logo" src="../assets/logo.jpg">
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