import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`    
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body {
        height: 100vh;
    }

    .swiper-pagination-bullet {
        opacity: 1;
        background-color: #bdbdbd;
    }

    .swiper-pagination-bullet-active {
        background-color: #f8475f;
    }
`;
