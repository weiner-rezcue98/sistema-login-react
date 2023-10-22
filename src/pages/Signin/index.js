import React, { useState } from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
            setError ("Preencha todos os campos");
            return;
        }

        const res = signin(email, senha);

        if (res) {
            setError(res);
            return;
        }

        navigate("/home");
    };


    return (
        <C.Container>
            <C.Label>SISTEMA DE LOGIN</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")] }
                />
                <C.labelError>{error}</C.labelError>
            </C.Content>
            <Button Text="Entrar" onClick={handleLogin} />
            <C.LabelSignup>
                Não possui uma conta ?
                <C.Strong>
                    <Link to="/signup">&nbsp;Cadastre-se</Link>
                </C.Strong>
            </C.LabelSignup>
         </C.Container>
    );    
};

export default Signin;