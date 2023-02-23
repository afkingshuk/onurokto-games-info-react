import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL } from "../api";

//action creator

export const loadGames = () => async (dispatch) => {
  //   console.log(popularGamesURL());
  //fetch axios
  const popularData = await axios.get(popularGamesURL());
  const upcomingData = await axios.get(upcomingGamesURL());
  const newGamesData = await axios.get(newGamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};