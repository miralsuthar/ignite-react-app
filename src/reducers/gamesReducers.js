const initState = {
    popular : [],
    newGames : [],
    upcomingGames : []
}

const gameReducer = (state = initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state, popular: action.payload.popular, upcomingGames: action.payload.upcoming, newGames: action.payload.new}
        default:
            return {...state}
    }
}


export default gameReducer;