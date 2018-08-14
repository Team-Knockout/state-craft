import html from '../libs/html.js';

let template = function() {
    return html`
    <h1>This is a header</h1>
    <nav>
        <ul>
            <li><a href="/index.html">Home</li>
            <li><a href="/pages/game.html">Play Game</li>
            <li><a href="/pages/results.html">Results</li>
        </ul>
    </nav>
   `;
};

export default class Header {       
    constructor() {

    }


    render() {
        let dom = template();
        return dom;
    }
}