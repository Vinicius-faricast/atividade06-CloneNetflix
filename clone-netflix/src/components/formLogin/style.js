import { styled } from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, .6);
    width: 30rem;
    /* height: 300px; */
    margin: 0 auto;
    padding: 4rem;
    border-radius: .5rem;
    gap: 2rem;

    span{
        cursor: pointer;
        text-transform: none;
    }

    span:hover{
        text-decoration: underline;
    }

    p{
        font-weight: 200;
        font-size: .9rem;
    }
`;

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input{
        padding: 1rem;
        border-radius: .2rem;
        background: none;
        border: .1rem solid rgba(350, 350, 350, 0.3);
        font-size: 1rem;
    }

    button{
        padding: .7rem;
        font-size: 1rem;
        font-weight: 500;
        color: white;
        border-radius: .2rem;
        cursor: pointer;
    }

    p{
        text-align: center;
        text-transform: uppercase;
        font-weight: 200;
    }
`;

export const FormTittle = styled.h1`
    font-size: 2.3rem;
`;

export const InputUser = styled.input`
    color: white;
`;

export const InputPassword = styled.input`
    color: white;
`;

export const ButttonEnter = styled.button`
    background: rgba(350, 0, 0);
    border: none;
    transition: all .5s;

    &:hover{
        background: rgba(350, 0, 0, 0.7);
    }
`;

export const ButtonCondeEnter = styled.button`
    background: rgba(350, 350, 350, 0.15);
    border: none;
    transition: all .5s;

    &:hover{
        background: rgba(350, 350, 350, 0.1);
    }
`;

export const CheckedInput = styled.div`
    display: flex;
    gap: 1rem;
        
    input{
        cursor: pointer;
        padding: 1rem;
        width: 2rem;
        /* border-style: none; */
        /* opacity: 0; */
        background: black;
        /* border-radius: .2rem; */
        /* background: none; */
        /* border: .1rem solid rgba(350, 350, 350, 0.3); */

    }

    label{
        font-size: 1rem;
        font-weight: 400;
    }
`;
