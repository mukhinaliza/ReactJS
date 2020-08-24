const client_id = '090cbbfaca1d4836b2c07a22a9b08d96';
const client_secret = 'e4bfb71a30e64da68f82f5127f2e993b';
const redirect_uri = 'http://localhost:3000';
const authLink = `https://accounts.spotify.com/ru/authorize?client_id=${client_id}&response_type=code&redirect_uri=${redirect_uri}`;

export  {client_id, client_secret,  redirect_uri, authLink}; 