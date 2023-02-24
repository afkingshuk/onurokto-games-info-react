import React from "react";
//style and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { smallImage } from "../util";
//images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//star
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
  const history = useNavigate();
  // exit details
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history("/");
    }
  };
  const exitDetailButtonHandler = (e) => {
    document.body.style.overflow = "auto";
    history("/");
  };
  //get stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  // platform img
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  //data
  const { screenshots, game, isLoading } = useSelector((state) => state.detail);
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <button onClick={exitDetailButtonHandler}>X</button>
                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                <p>Rating {game.rating}</p>
                {getStars()}
                {/* <img src={} alt={}/> */}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game.platforms?.map((data) => (
                    <img
                      key={data.platform.id}
                      src={getPlatform(data.platform.name)}
                      alt=""
                    ></img>
                  ))}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={
                  game.background_image
                    ? smallImage(game.background_image, 640)
                    : game.background_image
                }
                alt="game_bg"
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results?.map((screenshots) => (
                <img
                  src={
                    screenshots.image
                      ? smallImage(screenshots.image, 640)
                      : screenshots.image
                  }
                  key={screenshots.id}
                  alt="game"
                />
              ))}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: crimson;
  }
  &::-webkit-scrollbar-track {
    background-color: aliceblue;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: whitesmoke;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
  @media (max-width: 1300px) {
    width: 90%;
    left: 5%;
    padding: 1rem 1rem;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  button {
    font-family: "Orbitron", sans-serif;
    font-size: 1rem;
    font-weight: bolder;
    border: 0.25rem solid crimson;
    background: white;
    padding: 0.125rem 0.25rem;
    color: crimson;
  }
  @media (max-width: 1300px) {
    padding: 0rem 0rem;
    p {
      font-size: 1rem;
    }
    img {
      width: 1rem;
      height: 1rem;
      display: inline;
    }
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  @media (max-width: 1300px) {
    padding: 0rem 0rem;
    h3 {
      font-size: 1rem;
    }
  }
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  @media (max-width: 1300px) {
    padding: 0rem 0rem;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 1rem;
    }
    img {
      margin-left: 1rem;
    }
  }
`;
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
  @media (max-width: 1300px) {
    margin-top: 1rem;
  }
`;

const Description = styled(motion.div)`
  margin: 2rem 0rem;
  @media (max-width: 1300px) {
    p {
      font-size: 0.75rem;
    }
  }
`;

export default GameDetail;
