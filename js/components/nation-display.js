import html from '../libs/html.js';

let template = function(nation) {
    return html`
        <p>Leader Name: ${nation.leaderName} </p>
        <p>Nation Name: ${nation.nationName}</p>
        <p>Nation Motto: ${nation.nationMotto}</p>
        <p>Nation Flag: </p>
   `;
};

export default class NationDisplay {
    constructor(props) {

        this.nation = props.nation;
        console.log('this.nation', this.nation);


       
    }

    render() {
        let dom = template(this.nation);
        // this.p = dom.querySelector('p');
        return dom;
    }
}