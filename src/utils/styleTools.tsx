const screenSize = {
    width: 1440,
    height: 810,
}

export const colour = {
    primary: "#164A49",
}

export const width = (px: number) => `${(px / screenSize.width) * 100}vw`;

export const height = (px: number) => `${(px / screenSize.height) * 100}vh`;

export const fontSize =(px: number) => {
    const pt = px * 0.74999943307122;
    return (pt * 1.3333343412075) / screenSize.width * 100;
}

import {css} from "styled-components";

const device = {
    xs: '400px', // for small screen mobile
    sm: '600px', // for mobile screen
    md: '900px', // for tablets
    lg: '1280px', // for laptops
    xl: '1440px', // for desktop / monitors
    xxl: '1920px', // for big screens
    xxxl: '2134px',
    xxxxl: '2845px'
}

