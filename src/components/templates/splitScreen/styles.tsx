import styled, { css } from "styled-components";
import { SplitScreenProps } from "./props";
import { colour, width, height, fontSize } from '../../../utils/styleTools'

export const Container = styled.div<SplitScreenProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    
    ${props => props.padding && css`
        padding-inline: ${width(160)};
        padding-block: ${height(72)};
    `}
`
export const Pane = styled.div`
    flex: 1;
    align-items: center;
`
