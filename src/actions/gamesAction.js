import axios from 'axios';
import {popularGamesUrl} from '../api;';

//Action creator

export const loadGames = () => {
    return{
        type: 'FETCH_GAMES'
    }
}