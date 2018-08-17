import html from '../libs/html.js';

let template = function(nation) {
   
    return html`
    <nav>
        <div class="menu-content">
            <div class="menu-nav">
                <a href="survey.html">Play Game</a>
                <a href="results.html">Results</a>
            </div>
            <div class="motto"> 
                <h1>${nation.nationMotto}</h1>
                <p class="fadeIn">(really?)</p>
            </div>
            <div class="avatar">
                <ul class="avatar-list">
                    <li><img class="avatar-image" src="${nation.nationFlag}"></li>
                    <li>Name: ${nation.leaderName}</li>
                    <li>Country: ${nation.nationName}</li>
                    <li>Type: ${nation.govType}</li>
                  
                </ul>
            </div>
        </div>
    </nav>
    
   `;
};

export default class Header {       
    constructor(props) {
        this.nation = props.nation;
    }


    render() {
        let dom = template(this.nation);
        return dom;
    }
}