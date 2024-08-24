import * as S from './style.js'
import logo from '../../assets/logo.png'

export function Login() {
    return(
        <>
            <S.Header>
                <S.NavBar>
                <S.BranNav src={logo}/>
                </S.NavBar>
            </S.Header>
            <S.DivMain>
            </S.DivMain>
            <S.footer />
        </>
    )
}