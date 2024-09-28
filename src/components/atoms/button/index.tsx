import * as React from 'react'
import { ButtonProps } from "./props";
import { StyledButton } from "@/components/atoms/button/styles";

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <StyledButton {...props}>
            {props.children}
        </StyledButton>
    );
}
