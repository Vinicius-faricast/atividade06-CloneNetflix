import { styled } from "styled-components";

export const ArticleCard = styled.article`
    border: 1px solid yellow;
    position: relative;
    display: flex;
    border-radius: 1rem;
    overflow: hidden;
    width: fit-content;
    justify-content: center;
`;

export const ArticleImg = styled.img`
    width: 15rem;
    border: 1px solid green;
`;

export const ArticleBrand = styled.img`
    position: absolute;
    bottom: .5rem;
    left: .5rem;
    width: 8rem;
`;