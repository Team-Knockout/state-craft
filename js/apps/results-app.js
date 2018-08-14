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
        
        let keyArray = [];
        let valueArray = [];
        let indexArray = [];

        function getResultsKeys() {
            for(let i = 0; i < resultsApi.get().length; i++) {
                let x = resultsApi.get()[i]['key'];
                keyArray.push(x);
            }
        }
        function getValueArray() {
            for(let i = 0; i < keyArray.length; i++){
                valueArray.push(nationApi.getProp(keyArray[i]));
            }
        }
        function valuesToIndexes(array) {
            for(let i = 0; i < array.length; i++) {
                let roundedNum = Math.floor(array[i]);
                indexArray.push(roundedNum);
            }
        }
        function renderResults(){
            for(let i = 0; i < resultsApi.get().length; i++){
                let textArray = resultsApi.get()[i]['text'];
                let correctIndex = indexArray[i];
                let result = new Result ({
                    text: textArray[correctIndex],
                });
                resultSection.appendChild(result.render());
            }
        }

        getResultsKeys();
        getValueArray();
        valuesToIndexes(valueArray);
        renderResults();

        return dom;
    }
}