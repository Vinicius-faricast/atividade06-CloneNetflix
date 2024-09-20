import * as S from './style';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { IoSearchOutline, IoNotificationsOutline, IoLogoFacebook, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';


export function Catalog() {
    const [searchActive, setSearchActive] = useState(false);
    const [listPopularMovie, setListPopularMovie] = useState([]);

    const urlApi = "https://api.themoviedb.org/3/";
    // const apiKey = 'api_key=40380a9f6d120e9b69599c753927928a';

    useEffect(() => {
        const handleListPopularMove = (list) => {
            return [...listPopularMovie, ...list]
        };

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDM4MGE5ZjZkMTIwZTliNjk1OTljNzUzOTI3OTI4YSIsIm5iZiI6MTcyNjQzOTc4NS4wNjc2MTcsInN1YiI6IjY2ZGM2NmZkZmE5YzBmOGVhZDlkYjk4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1DZHrYvP5ZYJpKrcVH-2PeRdWmb9IH6E11ppG9aTSnY'
            }
        };

        const getData = async () => {
            // const response = await fetch(`${urlApi}popular?${apiKey}&language=pt-BR`);
            const response = await fetch(`${urlApi}movie/popular?language=pt-BR&page=1`, options);



            /*url para logo do filme https://api.themoviedb.org/3/movie/id_do_filme/images?api_key=40380a9f6d120e9b69599c753927928a*/

            const json = await response.json()
            // console.log(json['results']);
            // console.log(jsonBrand.logos[1]);

            setListPopularMovie(handleListPopularMove(json['results']));



            // console.log(json['results']);
            // console.log(listBrandMovie)
            // json['results'].map( movie => console.log(movie.title))
        }

        getData();
        
    }, [])

    return (
        <>
            <S.Header>
                <S.HeaderContainer>
                    <S.BrandNavBar src={logo} />
                    <S.ContainerNavBar>
                        <S.NavBar>
                            <ul>
                                <li>Inicio</li>
                                <li>Series</li>
                                <li>Filmes</li>
                                <li>Bombando</li>
                                <li>Minha Lista</li>
                            </ul>
                        </S.NavBar>
                        <S.UserConfigs>
                            <S.SearchContainer className={searchActive && 'search-actived'}>
                                <IoSearchOutline onClick={() => setSearchActive(!searchActive)} style={{ fontSize: '1.5rem' }} />
                                {searchActive && <input type='text' placeholder='Titulo, gente e gêneros' />}
                            </S.SearchContainer>
                            <p>Infantil</p>
                            <IoNotificationsOutline style={{ fontSize: '1.2rem' }} />
                            <img src={avatar} alt="" />

                        </S.UserConfigs>
                    </S.ContainerNavBar>
                </S.HeaderContainer>
            </S.Header>
            <S.mainContainer>
                <h1>ola</h1>
                {listPopularMovie.map(({ id, backdrop_path }, index) => (

                    <Card key={index} pathImg={backdrop_path} id={id}>
                    </Card>
                )
                )}
            </S.mainContainer>
            <S.footerContainer>
                <S.SocialMediaContainer>
                    <IoLogoFacebook style={{ fontSize: '1.8rem' }} />
                    <IoLogoInstagram style={{ fontSize: '1.8rem' }} />
                    <IoLogoTwitter style={{ fontSize: '1.8rem' }} />
                    <IoLogoYoutube style={{ fontSize: '1.8rem' }} />
                </S.SocialMediaContainer>
                <S.MemberContainer>
                    <ul>
                        <li>Audiodescrição</li>
                        <li>Relações com investidores</li>
                        <li>Avisos Legais</li>
                        <li>Central de Ajuda</li>
                        <li>Carreiras</li>
                        <li>Preferências de cookies</li>
                        <li>Cartão pré-pago</li>
                        <li>Termos de Uso</li>
                        <li>Informações corporativas</li>
                        <li>Imprensa</li>
                        <li>Privacidade</li>
                        <li>Entre em contato</li>
                    </ul>
                </S.MemberContainer>
                <S.AssinatureContainer>
                    <S.codService>Codigo de serviço</S.codService>
                    <p>1997-2024 Netflix, inc.</p>
                </S.AssinatureContainer>
            </S.footerContainer>
        </>
    )
}