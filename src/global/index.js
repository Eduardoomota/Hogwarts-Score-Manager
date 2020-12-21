import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    ul{
        list-style: none;
        padding: 0;
    }

    &:focus{
        outline: none;
    }
`;

export default GlobalStyle;
