import html from '../libs/html.js';

let template = function(nation) {
    return html`
    <div class="type-box">
        <img src="assets/gov-types.svg">
        <p>Your nation is a ${nation.govType}.</p>
        <p>Overview: ${nation.govOverview}</p>
        <p>Details: ${nation.govDetails}</p>
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