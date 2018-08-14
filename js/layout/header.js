import html from '../libs/html.js';

let template = function() {
    return html`
    <h1>This is a header</h1>
    <nav>
        <div class="menu-content">
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/pages/survey.html">Play Game</a></li>
                <li><a href="/pages/results.html">Results</a></li>
            </ul>
            <div class="avatar">
                <ul>
                    <li>Name</li>
                    <li>Country</li>
                    <li>Flag</li>
                </ul>
            </div>
        </div>
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