import { Link } from "react-router-dom";
import * as S from './style'
import avatar from '../../assets/avatar.png';
import { AuthContext } from '../Context/AuthContext';
import { useContext } from "react";

export function User() {
    const { isAuthentication} = useContext(AuthContext);
    console.log(isAuthentication)
    return (
        <S.Main>
            <S.MainContainer>
                <h1>Quem está assistindo?</h1>
                <div>
                    <Link to='/catalog' style={{ textDecoration: 'none'}}>
                        <S.Avatar>
                            <img src={avatar} alt="" />
                            <p>Fulano</p>
                        </S.Avatar>
                    </Link>
                    <Link to='/catalog' style={{ textDecoration: 'none' }}>
                        <S.Avatar>
                            <img src={avatar} alt="" />
                            <p>Fulano</p>
                        </S.Avatar>
                    </Link>
                </div>
                <button>Gerenciar</button>
            </S.MainContainer>
        </S.Main>
    );
};