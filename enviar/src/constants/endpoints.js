const NODE_ENV = process.env.NODE_ENV || 'development';

let end = '';
if (NODE_ENV === 'development')
    end = "http://localhost:5111/api/v1/"
else 
    end = "https://young-river-55469.herokuapp.com/api/v1/" 

export const ENDPOINT = end;

// AUTH
export const LOGIN = ENDPOINT + "auth/login/";
export const REGISTER = ENDPOINT + 'auth/register/';
export const VERIFY = ENDPOINT + 'auth/token/';

//RESOURCE 
export const RESOURCE = ENDPOINT + 'resource/';

// HOME
export const POSTS = ENDPOINT + 'posts/';

// USERS
export const USERS = ENDPOINT + 'users/';   
export const USER_ACTION = ENDPOINT + 'interactions/'; 

// CHATS
export const CHAT = ENDPOINT + 'chats/';
export const ALL_PEOPLES = ENDPOINT + 'chats/allpeoples';

// ME
export const ME = ENDPOINT + 'me/';
export const MY_FOLLOWERS = ENDPOINT + 'followers/';
export const MY_FOLLOWING = ENDPOINT + 'following/';
export const MY_BLOCKED = ENDPOINT + 'blocked/';

// SETTINGS
export const CHANGE_PASSWORD = ENDPOINT + 'settings/change/password';

// EDIT
export const UPDATE_DP = ENDPOINT + 'me/dp';
export const UPDATE_INFO = ENDPOINT + 'me/';