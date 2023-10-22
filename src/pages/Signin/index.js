import React, { useState } from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import { FaEnvelope, FaLock, FaExclamationTriangle } from 'react-icons/fa'; // Importe ícones do FontAwesome

import * as C from "./styles";

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !senha) {
            setError("Preencha todos os campos");
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
                <div className="input-container">
                    <FaEnvelope className="input-icon" />
                    <Input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                    />
                </div>
                <div className="input-container">
                    <FaLock className="input-icon" />
                    <Input
                        type="password"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                    />
                </div>
                <C.labelError>
                    {error && <FaExclamationTriangle className="error-icon" />} {error}
                </C.labelError>
                <div className="button-container">
                    <Button Text="Entrar" onClick={handleLogin} />
                </div>
            </C.Content>
            <C.LabelSignup>
                Não possui uma conta?
                <C.Strong>
                    <Link to="/signup">&nbsp;Cadastre-se</Link>
                </C.Strong>
            </C.LabelSignup>
        </C.Container>
    );
};

export default Signin;
