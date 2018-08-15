import html from '../libs/html.js';

let template = function(nation) {
   
    return html`
    <nav>
        <div class="menu-content">
        <p></p>
             <div class="menu-nav">
                <a href="/index.html">Home</a>
                <a href="/pages/survey.html">Play Game</a>
                <a href="/pages/results.html">Results</a>
             </div>
            <div class="avatar">
                <ul>
                    <li>Name: ${nation.leaderName}</li>
                    <li>Country: ${nation.nationName}</li>
                    <li >Flag: <img class="flag-image" src="${nation.nationFlag}"></li>
                </ul>
            </div>
        </div>
    </nav>
    
   `;
};

export default class Header {       
    constructor(props) {
        console.log(props);
        this.nation = props.nation;
        console.log(' this.nation : ', this.nation);

    }


    render() {
        let dom = template(this.nation);
        return dom;
    }
}