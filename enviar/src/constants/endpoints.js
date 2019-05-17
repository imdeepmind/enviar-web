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

// ME
export const ME = ENDPOINT + 'me/';