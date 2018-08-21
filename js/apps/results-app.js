import html from '../libs/html.js';

import Header from '../layout/header.js';
import Footer from '../layout/footer.js';
import Result from '../components/result.js';
import TypeInfo from '../components/type-info.js';
import resultsApi from '../services/results-api.js';
import nationApi from '../services/nation-api.js';




let template = function() {
    return html`
    <header></header>
    <section class="results-title">
        <h1>So How Did You Do?</h1>
        <h3> The results are in.</h3>

        <audio autoplay loop>  <source src="assets/anthem.mp3"></audio>    
    </section>
    <main>
      <div class="flex-container">
                <section class="results-intro-area">
                    <img class="results-image" src="assets/little-man-results.jpg">
                </section>
                <section class="results">
                    <section class="type-info"></section>
                    <section class="results-section"> </section>
                    <input class="reset" type="submit" onclick="location.href='index.html';" name="reset" value="Play Again">
                </section>    
        </div>        
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
        let resetNation = dom.querySelector('.reset');
        let header = new Header({
            nation: this.nation
        });
        let footer = new Footer;
        head.appendChild(header.render());
        foot.appendChild(footer.render());

        let resultSection = dom.querySelector('.results-section');
        
        resetNation.addEventListener('click', () => {
            window.resetNation();
        });
        
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
                if(roundedNum > 4){
                    arrayOut.push(4);
                }
                else if(roundedNum < 0){
                    arrayOut.push(0);
                }
                else {
                    arrayOut.push(roundedNum);
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
 
        let typeArea = dom.querySelector('.type-info');
        let typeInfo = new TypeInfo({
            nation: this.nation
        });
        typeArea.appendChild(typeInfo.render());


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