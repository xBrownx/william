import React from "react";

export type RouteProps = {
    scrollTo?: (page: string) => {},
    ref?: React.Ref<HTMLElement>,
}