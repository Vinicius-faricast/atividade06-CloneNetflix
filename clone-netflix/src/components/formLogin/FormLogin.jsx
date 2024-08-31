import { useState } from 'react';
import * as S from './style';

export function FormLogin() {
    const [value, setValue] = useState({});

    const eventSubmit = (e) => {
        e.preventDefault()
        setValue({
            nome: e.target.nome.value,
            password: e.target.password.value
        })
    }

    console.log(value)
    return(
        <>
            <S.FormContainer>
                <S.FormLogin onSubmit={(e) => eventSubmit(e)}>
                    <S.FormTittle>Entrar</S.FormTittle>
                    <S.InputUser name='nome' placeholder='Email ou número do celular' type='text'/>
                    <S.InputPassword name='password' placeholder='Senha' type='password'/>
                    <S.ButttonEnter>Entrar</S.ButttonEnter>
                    <p>Ou</p>
                    <S.ButtonCondeEnter>Usar código de acesso</S.ButtonCondeEnter>
                    <p><span>Esqueceu a senha?</span></p>
                </S.FormLogin>
                    <S.CheckedInput>
                    <input id ='rememberCheck' type='checkbox' placeholder='Lembre-se de mim'/>
                    <label htmlFor="rememberCheck">Lembre-se de mim</label>
                    </S.CheckedInput>

                    <p>Novo por aqui? <span>Assine agora.</span></p>

                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <span>Saiba mais.</span></p>
                    
            </S.FormContainer>
        </>
    )
}