// load data "at the start"
let stored = window.localStorage.getItem('data');
let data;
// did we find something?
if(stored && stored !== 'undefined') {
// turn json into data with "parse"
    data = JSON.parse(stored);
}
else {
// initialize empty object
    data = {};
}

// exposing for dev purposes
window.resetNation = function() {
    data = {};
};

// make accessible (export the data object)
export default data;

// save data "at the end"
// special event for when window is done
window.addEventListener('beforeunload', () => {
    // turn data back into a string (of json)
    let json = JSON.stringify(data);
    console.log('window unload, json is', json);
    // store in localStorage
    window.localStorage.setItem('data', json);
});
