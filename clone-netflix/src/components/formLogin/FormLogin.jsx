import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import * as S from './style';
import { AuthContext } from '../Context/AuthContext';

export function FormLogin() {
    const [value, setValue] = useState({});
    const [messageNameError, setMessageNameError] = useState({invalidName: false, message: "Nome ou email inválido"});
    const { setIsAthentication } = useContext(AuthContext);

    useEffect(()=> {
        setIsAthentication(true);
    }, [])
   
    const eventSubmit = (e) => {
        e.preventDefault()

        setValue({
            nome: e.target.nome.value,
            password: e.target.password.value
        })
        
        messageNameError.invalidName = value.nome === 'admin'
            ?setMessageNameError({...messageNameError, invalidName: false})
            :setMessageNameError({...messageNameError, invalidName: true});
    
    }
    if(value.nome === 'admin' && value.password === '123'){

        return <Navigate to="/user"/>
    }
    
    return(
        <>
            <S.FormContainer>
                <S.FormLogin onSubmit={(e) => eventSubmit(e)}>
                    <S.FormTittle>Entrar</S.FormTittle>
                    <S.InputUser name='nome' placeholder='Email ou número do celular' type='text' required/>
                    {messageNameError.invalidName && <p>{messageNameError.message}</p>}
                    <S.InputPassword name='password' placeholder='Senha' type='password' required/>
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