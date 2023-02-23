import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.png";

const nav = () => {
  return (
    <StyledNav>
      <Logo>
        <img src={logo} alt="" />
        <h1>Onurokto Gamers</h1>
        {/* <h1>অনুরক্ত গেমারস</h1> */}
      </Logo>
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    font-family: "Tilt Neon", cursive;
    background: white;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    /* background: crimson; */
    background: -webkit-radial-gradient(50% 50%, #d44040, crimson);
    color: whitesmoke;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 3rem;
    width: 3rem;
    margin-right: 1rem;
  }
  h1 {
    font-size: 3rem;
    /* color: crimson; */
    /* background: -webkit-linear-gradient(#DC143C, #000000); */
    background: -webkit-radial-gradient(20% 50%, #e43838, crimson);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export default nav;
