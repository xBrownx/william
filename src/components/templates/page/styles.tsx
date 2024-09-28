import * as React from 'react';
import { PageProps } from "./props";
import styled, { css } from "styled-components";

export const StyledSection = styled.section<PageProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    box-sizing: border-box;
    
    ${props => props.fullscreen && css`
        min-height: 100vh;
        max-width: 100vw !important;
    `};
    
`
