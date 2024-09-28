import * as React from "react";
import { Container, Pane } from './styles'
import { SplitScreenProps } from "./props";

const SplitScreen: React.FC<SplitScreenProps> = (props) => {
    const [left, right] = props.children as any[]
    return (
        <Container {...props}>
            <Pane>
                {left}
            </Pane>
            <Pane>
                {right}
            </Pane>
        </Container>
    )
}
export default React.memo(SplitScreen);