//* this is the page with the form that collects users leader name, country name,
//* flag

import html from '../libs/html.js';

let template = function() {
    return html`
    <form>
        First name:<br>
        <input type="text" name="firstname"><br>
        Last name:<br>
        <input type="text" name="lastname">
    </form>
        
   `;
};

export default class NationCreator {
    constructor() {
       
    }

    render() {
        let dom = template();
        let form = dom.querySelector('form');
        return dom;
    }
}