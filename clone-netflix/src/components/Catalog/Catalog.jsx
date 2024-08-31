import * as S from './style';
import logo from '../../assets/logo.png';
import avatar from '../../assets/avatar.png';
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";


export function Catalog() {
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
                            <IoSearchOutline style={{fontSize: '1.5rem'}}/>
                            <p>Infantil</p>
                            <IoNotificationsOutline style={{fontSize: '1.2rem'}}/>
                            <img src={avatar} alt="" />

                        </S.UserConfigs>
                    </S.ContainerNavBar>
                </S.HeaderContainer>
            </S.Header>
        </>
    )
}