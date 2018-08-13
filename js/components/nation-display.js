import html from '../libs/html.js';

let template = function() {
    return html`
        <p>Leader Name: </p>
        <p>Nation Name: </p>
        <p>Nation Motto: </p>
        <p>Nation Flag: </p>
   `;
};

export default class NationDisplay {
    constructor() {
       
    }

    render() {
        let dom = template();
        return dom;
    }
}