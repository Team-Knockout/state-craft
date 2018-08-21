import App from '../apps/survey-app.js';

let root = document.getElementById('root');
let app = new App();
root.appendChild(app.render());