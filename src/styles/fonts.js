import { createGlobalStyle } from "styled-components";

import ubuntuLight from "../assets/fonts/Ubuntu-Light.ttf";
import ubuntuRegular from "../assets/fonts/Ubuntu-Regular.ttf";
import ubuntuMedium from "../assets/fonts/Ubuntu-Medium.ttf";
import ubuntuBold from "../assets/fonts/Ubuntu-Bold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Ubuntu';
        src: local('Ubuntu-Light'), local('Ubuntu-Light'),
        url(${ubuntuLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ubuntu';
        src: local('Ubuntu-Regular'), local('Ubuntu-Regular'),
        url(${ubuntuRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ubuntu';
        src: local('Ubuntu-Medium'), local('Ubuntu-Medium'),
        url(${ubuntuMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Ubuntu';
        src: local('Ubuntu-Bold'), local('Ubuntu-Bold'),
        url(${ubuntuBold}) format('truetype');
        font-weight: 700;
        font-style: bold;
    }
`;
