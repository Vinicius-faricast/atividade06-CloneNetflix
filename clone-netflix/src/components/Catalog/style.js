import { styled } from 'styled-components';


export const Header = styled.header`
    position: fixed;
    top: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .5);
    width: 100vw;
`;

export const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

`;

export const ContainerNavBar = styled.div`
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BrandNavBar = styled.img`
    width: 8rem;
`;

export const NavBar = styled.nav`
    padding: 1rem;

    ul{
        display: flex;
        list-style: none;
        gap: 3rem;
        font-size: .8rem;

        li{
            cursor: pointer;

            &:hover{
                color: rgba(355, 355, 355, .5);
                transition: all .5s;
            }
        }
    }
`;

export const UserConfigs = styled.div`
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

    .search-actived{
        border: 1px solid whitesmoke;
    }
`;

export const SearchContainer = styled.div`

    display: flex;
    gap: .2rem;
    padding: .2rem;
    width: fit-content;
    align-items: center;
    
    input{
        animation: identifier .4s ease-in-out; 
        background: none;
        border: none;
        padding: .5rem;
        color: whitesmoke;
        font-size: .8rem;

        &:focus{
            outline: 0;
        }
           
    }

    @keyframes identifier {
        from{
            width: 0;
            opacity: 0;
        }
        to{
            width: 10rem;
        }
    }
`;

export const mainContainer = styled.main`
    margin-top: 4rem;
    border: 1px solid green;
    gap: 1rem;
    height: 20rem;
    overflow: hidden;
`;

export const ArticleContainer = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    /* flex-wrap: wrap; */
    align-items: center;
    gap: 1rem;
    width: fit-content;
`;

export const footerContainer = styled.footer`
    max-width: 70%;
    margin: 0 auto;
    padding: 1rem 0;
`;

export const SocialMediaContainer = styled.div`
    display: flex;
    gap: 1.5rem;
`;

export const MemberContainer = styled.div`
    ul{
        display: flex;
        gap: 2rem;
        list-style: none;
        font-size: .8rem;
        font-weight: 300;
        flex-wrap: wrap;
        padding: 2rem 0;
        color: #606060;
    }
`;

export const AssinatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .6rem;
    color: #606060;
    font-size: .8rem;
    font-weight: 300;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const codService = styled.p`
    border: 1px solid #606060;
    padding: .5rem;
`;
