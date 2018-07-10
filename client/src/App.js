/*some function descriptions from https://medium.com/@jonnykalambay/now-playing-using-spotifys-awesome-api-with-react-7db8173a7b13*/

import React, { Component, Fragment } from 'react';
//import logo from './logo.svg';
import './App.css';
import Papp from './Components/PApp.js';
//import GoogleLogin from 'react-google-login';
//import secrets from 'secretsconfigclient';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();


class App extends Component {
    constructor(){
        super();
        const params = this.getHashParams();
        const token = params.access_token;
        if (token) {
            /*Instead of manually coding our API requests, we’re going to use a library, which was created by José M. Pérez, a Spotify engineer, that abstracts pretty much every API call we could need.*/
            spotifyApi.setAccessToken(token);
        }
        this.state = {
            loggedIn: token ? true : false,
            nowPlaying: { name: 'Not Checked', albumArt: '' },
            currentUser: { id: 'not created', name: 'Not added', },
        }
    }
    /*Now we just need to pull the token from the query sting into our react app and we can use it. There are many ways to do this, but I’m lazy so I copied the function getHashParams from the example code that we cloned (found in auth-server/authorization_code/public/index.html), and made a slight change just to silence create-react-app’s picky linter. The function returns an object with the parameters as properties.*/
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }
    /*Write a function called getNowPlaying inside of the App Class to make the API request. This function will use the one of the many spotify Api methods to make a request and creates a promise. We then use the response data to set state. The code below is already structured access the right data in the response, but I highly suggest you experiment by looking at the entire response object, either by logging it to the console or by checking the network tab in your dev tools*/
    getNowPlaying(){
        spotifyApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        albumArt: response.item.album.images[0].url
                    }
                });
            })
    }
    createPlaylist(){
        spotifyApi.getMyCurrentPlaybackState()
            .then((response) => {
                this.setState({
                    nowPlaying: {
                        name: response.item.name,
                        albumArt: response.item.album.images[0].url
                    }
                });
            })
    }
 /*   getUserName(){
        spotifyApi.getMe()
            .then((response) => {
                this.setState({
                    currentUser:{
                        name: response.
                    }
                    nowPlaying: {
                        name: response.item.name,
                        albumArt: response.item.album.images[0].url
                    }
                });
            })
    }
    getUserEverything(){
        this.setState.currentUser({
            name: spotifyApi.get
        })
    }*/


    render() {
        return (
            <Fragment>
{/*
                <GoogleLogin onSuccess={} onFailure={} clientId={}/>
*/}
                <Papp/>
                <h4>/client/src/app.js: </h4>
                <p>app.render.return.fragment</p>
                <div
                    className='App' >
                    <a href='http://localhost:8888'> Login to Spotify </a>
                </div>
                <div>
                    Now Playing: { this.state.nowPlaying.name }
                </div>
                <div>
                    <h3>Current User: { this.state.currentUser.name}</h3>
                    <h4>User ID: { this.state.currentUser.id}</h4>
                </div>
                <div>
                    <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
                </div>

                { this.state.loggedIn &&
                <button onClick={() => this.getNowPlaying()}>
                    Check Now Playing
                </button>
                }

            </Fragment>
    )
    }
}

export default App;
