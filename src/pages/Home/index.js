import React from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button"; // Corrigindo o caminho de importação
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
    const { signout } = useAuth();
    const navigate = useNavigate();

    return (
        <C.Container>
            <C.Title>Home</C.Title>
            <Button Text="Sair" onClick={() => [signout(), navigate("/")]} >
                Sair
            </Button>
        </C.Container>
    );
};

export default Home;
