import styled from "styled-components";
import  fundo  from "../../assets/fundo.jpg";

export const Header = styled.div`
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
`;

export const NavBar = styled.nav`
    width: 980px;
    margin: 0 auto;
    padding: 1rem;
`

export const BranNav = styled.img`
    width: 12rem;
`;

export const DivMain = styled.main`
    background-image: url(${ fundo });
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
    height: 100vh;
` 

export const footer = styled.footer`
    height: 300px;
    border: 1px solid yellow;
`