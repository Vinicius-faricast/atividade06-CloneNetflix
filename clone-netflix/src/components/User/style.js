import { styled } from 'styled-components';

export const Main = styled.main`
    display: flex;
    width: 980px;
    height: 100vh;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    text-decoration: none;
`;

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.3rem;

    h1{
    font-size: 4rem;
    font-weight: 400;
    }

    div{
        display: flex;
        gap: 1.5rem;
    }

    button{
        padding: 0.5rem 1rem;
        background: transparent;
        color: whitesmoke;
        font-size: 1.2rem;
        font-weight: 300;
        border: .1rem solid whitesmoke;
        border-radius: .5rem;
        transition: all .5s ease-in-out;
        cursor: pointer;

        &:hover{
            background: rgba(255, 255, 255, 0.1);
        }
    }
`;

export const Avatar = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;

    img{
        width: 10rem;
        border-radius: .5rem;
        border: 2px solid transparent;
    }

    p{
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        font-size: 1.5rem;
        font-weight: 300;
    }

    &:hover{
        img{
            border-style: none;
            border: 2px solid white;
        }

        p{
            color: rgba(255, 255, 255, 1);
        }
    }
`;