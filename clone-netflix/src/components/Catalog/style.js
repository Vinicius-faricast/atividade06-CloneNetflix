import { styled } from 'styled-components';


export const Header = styled.header`
    position: fixed;
    z-index: 100;
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
    border: 1px solid red;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid blue;
    gap: 1rem;

`;

export const ContainerNavBar = styled.div`
    border: 1px solid green;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BrandNavBar = styled.img`
    width: 8rem;
    border: 1px solid pink;
`;

export const NavBar = styled.nav`
    padding: 1rem;
    border: 1px solid red;

    ul{
        display: flex;
        list-style: none;
        gap: 3rem;
        font-size: .8rem;
    }
`;
export const UserConfigs = styled.div`
    border: 1px solid yellow;
    display: flex;
    align-items: center;
    gap: 2rem;

    p{
        font-size: 1rem;
        font-weight: 300;
    }

    img{
        width: 2.5rem;
        border-radius: .3rem;
    }
`;

