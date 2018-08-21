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

        let typeArea = dom.querySelector('.type-info');
        let typeInfo = new TypeInfo({
            nation: this.nation
        });
        typeArea.appendChild(typeInfo.render());

        // don't call the api over and over
        let results = resultsApi.get();

        for(let i = 0; i < results.length; i++) {
            let result = results[i];
            let score = this.nation[result.key];
            let index = getRoundedValue(score);

            let resultComponent = new Result ({
                text: result.text[index]
            });

            resultSection.appendChild(resultComponent.render());
        }

        function getRoundedValue(score) {
            score = Math.floor(score);
            score = Math.min(score, 4);
            score = Math.max(score, 0);
            return score;
        }
 
        return dom;
    }
}