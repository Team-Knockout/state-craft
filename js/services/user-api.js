import data from './game-storage.js';

// wants to track information about a "user"
// let's assume user will be an object

// we would try and read property
let users = data.users;
if(!users) {
    users = {};
    data.users = users;
}

export default {
    getCurrentUser: function() {
        return data.currentUser;
    },
    setCurrentUser: function(username) {
        // do we not already know about this user?
        if(!users[username]) {
            // create a new user object
            let user = {
                name: username,
                nation: // create nation with default shit
            };

            users[username] = user;
        }
        
        // set user as current user
        // because current user is a top-level key in data,
        // we must assign directly to data
        data.currentUser = username;
    },
    logout: function() {
        data.currentUser = null;
    }
};
