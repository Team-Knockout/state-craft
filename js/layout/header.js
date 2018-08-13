import html from '../libs/html.js';

let template = function() {
    return html`
    <h1>This is a header</h1>
    <section></section>
    <nav>
    <ul>
        <li><a href="/pages/game.html">Play Game</li>
        <li><a href="/pages/results.html">Results</li>
    </ul>
    </nav>
   `;
};

export default class Header {       
    

    render() {
        let dom = template();
        return dom;
    }
}