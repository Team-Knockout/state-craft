import html from '../libs/html.js';

let template = function(nation) {
    return html`
        <p>Leader Name: ${nation.leaderName} </p>
        <p>Nation Name: ${nation.nationName}</p>
        <p>Nation Motto: ${nation.nationMotto}</p>
        <p>Nation Flag: <img src="${nation.nationFlag}"></p>
   `;
};

export default class NationDisplay {
    constructor(props) {
        this.nation = props.nation;
    }

    render() {
        let dom = template(this.nation);
        return dom;
    }
}