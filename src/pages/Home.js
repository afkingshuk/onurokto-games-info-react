import React, { useEffect } from "react";
import GameDetail from "../components/GameDetail";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//styling animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
//components
import Game from "../components/Game";
//animation
import { fadeIn } from "../animations";
const Home = () => {
  //get current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  //fetch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // getback
  // const games = useSelector((state) => state.games);
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );
  // console.log(games);
  const clearSearched = () => [dispatch({ type: "CLEAR_SEARCHED" })];
  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <Searched>
            <h2>
              Searched games <button onClick={clearSearched}>X</button>
            </h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id}
                />
              ))}
            </Games>
          </Searched>
        ) : (
          ""
        )}
        <h2>Upcoming games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  @media (max-width: 1300px) {
    padding: 0rem 2rem;
    min-height: 20vh;
    h2 {
      padding: 1rem 0rem;
      font-size: 2rem;
      text-align: center;
    }
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  @media (max-width: 1300px) {
    min-height: 40vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
  @media (max-width: 700px) {
    min-height: 40vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
  }
`;

const Searched = styled(motion.div)`
  button {
    font-family: "Orbitron", sans-serif;
    justify-content: center;
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    /* background: crimson; */
    background: -webkit-radial-gradient(50% 50%, #d44040, crimson);
    color: whitesmoke;
  }
  @media (max-width: 1300px) {
    button {
      justify-content: center;
      font-size: 1rem;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      /* background: crimson; */
      background: -webkit-radial-gradient(50% 50%, #d44040, crimson);
      color: whitesmoke;
    }
  }
`;
export default Home;
