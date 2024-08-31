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
    background-blend-mode: multiply;
    background-color: rgba(0, 0, 0, 0.5);
    background-repeat: no-repeat;
    background-size: cover;
    /* opacity: 0.6; */
    height: 100vh;
    padding-top: 7rem;
` 

export const footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 15rem 0 5rem 0;
    max-width: 980px;
    margin: 0 auto;

    p, li{
        font-weight: 400;
        font-size: .9rem;
        list-style: none;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        gap: 3rem;
        justify-content: space-between;
    }

    a{
        color: white;
        text-decoration: underline;
        cursor: pointer;
    }

    select{
        width: 7rem;
        padding: .5rem;
        background-color: transparent;
        color: white;
        border: .1rem solid whitesmoke;
        border-radius: .3rem;
    }

    option{
        color: black;
    }


`