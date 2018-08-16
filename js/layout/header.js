import html from '../libs/html.js';

let template = function(nation) {
   
    return html`
    <nav>
        <div class="menu-content">
             <div class="menu-nav">
                <a href="index.html">Home</a>
                <a href="survey.html">Play Game</a>
                <a href="results.html">Results</a>
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
        console.log(props);
        this.nation = props.nation;
        console.log(' this.nation : ', this.nation);

    }


    render() {
        let dom = template(this.nation);
        return dom;
    }
}