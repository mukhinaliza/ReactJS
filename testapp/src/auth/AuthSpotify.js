import React from 'react';
import  {client_id, client_secret,  redirect_uri, authLink} from '../config';
import Header from '../Header.js';


export default class AuthSpotify extends React.Component {
	constructor() {
		super()
		this.state = {
			accesToken: '',
			refreshToken: '',
			tokenType: ''
		}
	}
componentDidMount() {
        const code = window.location.search;
        if (code && code.includes('code') && !this.accessToken) {
          const token = `https://accounts.spotify.com/api/token`;
          const body = `grant_type=authorization_code&code=${code.split('=')[1]}&redirect_uri=${redirect_uri}`

          fetch(token, {
            method: 'POST',
            headers: {
              "Authorization": 'Basic ' + btoa(client_id + ':' + client_secret),
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
          })
          .then(res => res.json())
          .then(data => {
            if(!this.state.accessToken) {
              const {access_token, refresh_token, token_type} = data;
              this.setState({
                accessToken: access_token,
                refreshToken: refresh_token,
                tokenType: token_type
              });
            }
          })
          .catch(error => {
            console.log('Запрос не выполнен: ', error);
          })
        }
    }

    render() {
        return (
            <>
            <h1>Welcome to Spotify</h1> 
            {this.state.accessToken
            ?
              <Header />
            : <a href={authLink}> LOG IN</a>
            }
            </>  
        )
    }

}
