import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #FDFDFD;
        --font-text: #434343;
        --black: #000;
        --green: #218211;
        --gray: #5A5A5A;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    h3, span, label {
        color: var(--font-text);
    }
    h3, span, label, button {
        font-family: "Poppins";
    }
    label, input {
        display: block;
    }
`;
