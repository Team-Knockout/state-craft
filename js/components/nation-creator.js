//* this is the page with the form that collects users leader name, country name,
//* flag

import html from '../libs/html.js';

let template = function() {
    return html`
    <form>
        Leader Name:<br>
        <input type="text" name="leaderName"><br>
        Nation Name:<br>
        <input type="text" name="nationName">
        <input type="submit" value="startGame">
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