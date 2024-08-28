import * as S from './style.js'
import logo from '../../assets/logo.png'
import { FormLogin } from '../formLogin/FormLogin.jsx'

export function Login() {
    return(
        <>
            <S.Header>
                <S.NavBar>
                <S.BranNav src={logo}/>
                </S.NavBar>
            </S.Header>
            <S.DivMain>
                <FormLogin />
            </S.DivMain>
            <S.footer />
        </>
    )
}