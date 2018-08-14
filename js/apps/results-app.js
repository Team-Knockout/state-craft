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
        this.nation = nationApi.get();
    }

    render() {
        let dom = template();

        let head = dom.querySelector('header');
        let foot = dom.querySelector('footer');
        let header = new Header({
            nation: this.nation
        });
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let resultSection = dom.querySelector('.results');
        
        
        function getResultsKeys(arrayOut) {
            for(let i = 0; i < resultsApi.get().length; i++) {
                let x = resultsApi.get()[i]['key'];
                arrayOut.push(x);
            }
        }
        function getValueArray(arrayIn, arrayOut) {
            for(let i = 0; i < arrayIn.length; i++){
                arrayOut.push(nationApi.getProp(arrayIn[i]));
            }
        }
        function valuesToIndexes(arrayIn, arrayOut) {
            for(let i = 0; i < arrayIn.length; i++) {
                let roundedNum = Math.floor(arrayIn[i]);
                if(roundedNum < 4){
                    arrayOut.push(roundedNum);
                }
                else {
                    arrayOut.push(4);
                }
            }
        }
        function renderResults(arrayIn){
            for(let i = 0; i < resultsApi.get().length; i++){
                let textArray = resultsApi.get()[i]['text'];
                let correctIndex = arrayIn[i];
                let result = new Result ({
                    text: textArray[correctIndex],
                });
                resultSection.appendChild(result.render());
            }
        }
        
        let keyArray = [];
        let valueArray = [];
        let indexArray = [];
        getResultsKeys(keyArray);
        getValueArray(keyArray, valueArray);
        valuesToIndexes(valueArray, indexArray);
        renderResults(indexArray);

        return dom;
    }
}