import html from '/js/libs/html.js';
import nationApi from '/js/services/nation-api.js';

let template = function() {
    return html`
<header class="header header-container"></header>

    <main class="main">
        <section>
            <div class="create-nation">I am Div</div>
        </section>
    </main>

    <footer class="footer"></footer>
`;
};

export default class App {

    constructor() {
      
    }


    render() {
        let dom = template();

        return dom;
    }
}

