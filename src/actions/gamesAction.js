import axios from 'axios';
import {popularGamesUrl, upcomingGamesUrl, newGamesUrl, searchedGameUrl} from '../api';

//Action creator

export const loadGames = () => async (dispatch) => {
    //FETCH WITH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    const newData = await axios.get(newGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            new: newData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
     const searchGames = await axios.get(searchedGameUrl(game_name));
     dispatch({
         type: "FETCH_SEARCHED",
         payload:{
             searched: searchGames.data.results
         }
     })
}