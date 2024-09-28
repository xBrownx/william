import * as React from "react";
import Page from "../../templates/page";
import { landingConst as CONST } from './constants'
import { RouteProps } from "../props";

const Landing: React.FC<RouteProps> = () => {
    return (
        <Page fullscreen={true}>

        </Page>
    )
}

export default React.memo(Landing);