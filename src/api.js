//Base Url
const base_url = "https://api.rawg.io/api/";

//Getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    }else{
        return month;
    }
}

const getCurrentDate = () => {
    const date = new Date().getDate()
    if(date < 10){
        return `0${date}`;
    }else{
        return date;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDate = getCurrentDate();

const currentDay = `${currentYear}-${currentMonth}-${currentDate}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDate}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDate}`;


//Popular Games

const popular_games = `games?dates=${lastYear},${currentDay}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDay},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?dates=${lastYear},${currentDay}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${new_games}`;


