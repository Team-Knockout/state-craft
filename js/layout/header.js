import html from '../libs/html.js';

let template = function(nation) {
    if(!nation){
        nation = 'nation woah';
    }
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
                    <li>Name: ${nation.leaderName}</li>
                    <li>Country: ${nation.nationName}</li>
                    <li>Flag:</li>
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