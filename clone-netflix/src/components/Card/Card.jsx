import { useEffect, useState } from "react";
import * as S from "./style";


export function Card(props){
    const {pathImg, id} = props
    const [listBrandMovie, setListBrandMovie] = useState('');

    useEffect(() => {

        const getData = async () => {
            const responseBrand = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=40380a9f6d120e9b69599c753927928a`);
            const jsonBrand = await responseBrand.json()

            setListBrandMovie(jsonBrand.logos[1].file_path);
        };

        getData();

        }, [])
 
    // console.log(props)
    const urlImg = `https://image.tmdb.org/t/p/w500/${pathImg}`;

    const urlBrandMovie = `https://image.tmdb.org/t/p/w500/${listBrandMovie}`

    return (
        <S.ArticleContainer>
            <S.ArticleCard>
                <S.ArticleBrand src={urlBrandMovie}/>
                <S.ArticleImg src={urlImg}/>
            </S.ArticleCard>
        </S.ArticleContainer>
    )
}