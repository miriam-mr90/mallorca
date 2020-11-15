import { createGlobalStyle, css } from 'styled-components'
import BackgroundImage from "./assets/images/app_bg.jpg";

const GlobalAppStyles = createGlobalStyle`
    ${({ theme }) => css`
        @font-face {
            font-family: 'Open Sans Bold';
            src: url('../assets/fonts/opensans-extrabold-webfont.woff2') format('woff2'),
                url('../assets/fonts/opensans-extrabold-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;

        }

        @font-face {
            font-family: 'Open Sans';
            src: url('../assets/fonts/opensans-light-webfont.woff2') format('woff2'),
                url('../assets/fonts/opensans-light-webfont.woff') format('woff');
            font-weight: lighter;
            font-style: normal;

        }

        @font-face {
            font-family: 'Open Sans';
            src: url('../assets/fonts/opensans-regular-webfont.woff2') format('woff2'),
                url('../assets/fonts/opensans-regular-webfont.woff') format('woff');
            font-weight: bold;
            font-style: normal;

        }

        * {
            box-sizing: border-box;
        }

        body {
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            /* background-image: linear-gradient(360deg, rgb(160, 222, 219),rgb(3, 165, 209));
            background-image: url(${BackgroundImage});
            background-position: left top;
            background-repeat: no-repeat;
            background-size: cover; */
            color: ${theme.color.text};
            margin: 0;
        }
    `}
`;

export default GlobalAppStyles;
