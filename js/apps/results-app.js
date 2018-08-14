import html from '../libs/html.js';

import Header from '../layout/header.js';
import Footer from '../layout/footer.js';
import Result from '../components/result.js';
import resultsApi from '/js/services/results-api.js';
import nationApi from '/js/services/nation-api.js';




let template = function() {
    return html`
    <header></header>
        <main>
            <h2>Here are your results</h2>
            <section class="results"></section>
        </main>
    <footer></footer>
        
   `;
};

export default class App{
    constructor() {
        this.text = resultsApi.get()[0]['text'][0];
    }

    render() {
        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header;
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let resultSection = dom.querySelector('.results');
        
        function rangeToIndex() {
            Math.floor(value);

        }

        function getResultsKeys() {
            let keyArray;
            for(let i = 0; i < resultsApi.get().length; i++) {
                keyArray += resultsApi.get()[i]['key'];
            }
            return keyArray;
        }
        
        for()

        resultsApi.get()
        
        nationApi.get


        for(let i = 0; i < resultsApi.get().length; i++){
            let textArray = resultsApi.get()[i]['text'];

            let result = new Result ({
                text: textArray[correctIndex],
            });
            resultSection.appendChild(result.render());
        }


        

        return dom;
    }
}