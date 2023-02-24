//base url
const base_url = "https://api.rawg.io/api/";
const type = "games";

const REACT_APP_RAWG_API_KEY = process.env.REACT_APP_RAWG_API_KEY;

//getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// d/m/y
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7

//popular games
const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () =>
  `${base_url}${type}?key=${REACT_APP_RAWG_API_KEY}${popular_games}`;

export const upcomingGamesURL = () =>
  `${base_url}${type}?key=${REACT_APP_RAWG_API_KEY}${upcoming_games}`;

export const newGamesURL = () =>
  `${base_url}${type}?key=${REACT_APP_RAWG_API_KEY}${new_games}`;

// console.log(popularGamesURL());
// console.log(upcomingGamesURL());
//game details
// https://api.rawg.io/api/games/72568?key={key}
export const gameDetailsURL = (game_id) =>
  `${base_url}${type}/${game_id}?key=${REACT_APP_RAWG_API_KEY}`;
//game details
// https://api.rawg.io/api/games/72568/screenshots?key={key}
export const gameScreenshotURL = (game_id) =>
  `${base_url}${type}/${game_id}/screenshots?key=${REACT_APP_RAWG_API_KEY}`;
//searched game
// https://api.rawg.io/api/games?key={key}&search=stalker
// https://api.rawg.io/api/games?key=2b4031d233ae4422a15d4b1ee00ef77e&search=stalker&page_size=9
export const searchGameURL = (game_name) =>
  `${base_url}${type}?key=${REACT_APP_RAWG_API_KEY}&search=${game_name}&page_size=9/`;
