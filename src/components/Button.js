import styled from "styled-components";

const Btn = styled.button`
    padding: 8px;
    margin-top: 10px;
    background-color: white;

    a{
        text-decoration: none;
        color: #190227;
        font-weight: bold;
    }
`

const Button = () => {
    return (
        <Btn><a href="/">Voltar</a></Btn>
    )
}

export default Button;