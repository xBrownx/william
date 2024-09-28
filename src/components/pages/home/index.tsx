import * as React from "react";
import Page from "../../templates/page";
import { homeConst as CONST } from './constants'
import { RouteProps } from "../props";
import SplitScreen from "../../templates/splitScreen";

const Home: React.FC<RouteProps> = (props) => {
    const assets = CONST.assets
    return (
        <Page fullscreen={true}>
            <SplitScreen padding={true}>
                <img src={CONST.assets.hero.src} alt="hero" />
                <img src={CONST.assets.hero.src} alt="hero" />
            </SplitScreen>
        </Page>
    )
}

export default React.memo(Home);