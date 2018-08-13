import GameApp from '/js/apps/game-app.js';



let root = document.getElementById('root');
let app = new GameApp();
let dom = app.render();
root.appendChild(dom);