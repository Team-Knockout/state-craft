import html from '../libs/html.js';

let template = function() {
    return html`
    <footer class="footer">
    © Statecraft | 2018
    </footer>
    <img class="logo" src="../assets/logo.jpg">

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