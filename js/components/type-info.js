import html from '../libs/html.js';

let template = function(nation) {
    return html`
    <div class="type-box">
        <img class="type-img" src="assets/gov-types.svg">
        <p>Your nation's government has been labelled: ${nation.govType}.</p>
        <p>${nation.govOverview}</p>
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