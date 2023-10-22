import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    height: 100vh;
    background: url('seu-background.gif') no-repeat center center fixed;
    background-size: cover;
`;

export const Logo = styled.img`
    width: 150px; /* Defina o tamanho da sua logo */
    margin-bottom: 20px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 350px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9); /* Fundo com transparência */
    border-radius: 6px;
    box-shadow: 0 1px 2px #0003;
`;

export const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
    color: #676767;
    margin-bottom: 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

export const labelError = styled.label`
    font-size: 16px;
    color: red;
    margin-top: 10px;
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #676767;
    }
`;

export const LabelSignup = styled.label`
    font-size: 15px;
    color: #676767;
`;

