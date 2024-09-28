import * as React from 'react'
import { PageProps } from "./props";
import { StyledSection } from "./styles";

const Page: React.FC<PageProps> = (props) => {
    return (
        <StyledSection {...props}>
            {props.children}
        </StyledSection>
    );
}

export default React.memo(Page);