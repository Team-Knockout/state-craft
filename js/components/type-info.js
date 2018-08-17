import html from '../libs/html.js';

let template = function(nation) {
    return html`
    <div class="type-box">
        <img class="type-img" src="assets/gov-types.svg">
        <h3>Your nation is a:</h3>
        <p>${nation.govType}.</p>
        <h3>Overview:</h3>
        <p>${nation.govOverview}</p>
        <h3>Details:</h3>
        <p>${nation.govDetails}</p>
    </div>
   `;
};

export default class TypeInfo{
    constructor(props) {
        this.nation = props.nation;
    }

    render() {
        let dom = template(this.nation);
        return dom;
    }
}