import { createGlobalStyle } from "styled-components";

// font-family: 'Carter One', cursive;
// font-family: 'Orbitron', sans-serif;
// font-family: 'Tilt Neon', cursive;

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgoldenrod;
        }
    }
    body{
        font-family: 'Tilt Neon', cursive ; 
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Orbitron', sans-serif;
        color: crimson;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    } 
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: darksalmon;
    }
    a{
        text-decoration: none;
        color: crimson;
    } 
    img{
        display: block;
    }
`;

export default GlobalStyles;
