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
            <S.footer>
                <p>Dúvidas? <a href="">Ligue 0800 591 2876</a></p>
                <div>
                    <ul>
                        <li><a>Perguntas frequentes</a></li>
                        <li><a>Central de Ajuda</a></li>
                        <li><a>Termos de Uso</a></li>
                        <li><a>Privacidade</a></li>
                        <li><a>Preferências de cookies</a></li>
                        <li><a>Informações corporativas</a></li>
                    </ul>
                </div>
                <select name="" id="language">
                    <option value="pt-br">Portugues</option>
                    <option value="en">Inglês</option>
                </select>
            </S.footer>
        </>
    )
}