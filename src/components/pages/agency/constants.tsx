export const agencyConst = {
    headingTxt: "Agencies",
    paragraphTxt: "If you'd like to inspect this property in person, please\n" +
        "contact your preferred agent for further info or to arrange\n" +
        "a private inspection.",
    agencies: {
        knightFrank: {
            label: "KNIGHT FRANK",
            link: "https://www.knightfrank.com.au/contact/melbourne",
            agents: [
                {
                    key: "jamPap",
                    name: "JAMES PAPPAS",
                    phone: "+61 419 319 367",
                    email: "james.pappas@au.knightfrank.com",
                    imgSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-James-Pappas.svg",
                },
                {
                    key: "hamSut",
                    name: "HAMISH SUTHERLAND",
                    phone: "+61 439 033 612",
                    email: "hamish.sutherland@au.knightfrank.com",
                    imgSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Hamish-Sutherland.svg",
                },
            ],
        },
        colliers: {
            label: "COLLIERS",
            link: "https://www.colliers.com.au/en-au",
            agents: [
                {
                    key: "geoMur",
                    name: "GEORGINA MURRAY",
                    phone: "+61 412 232 030",
                    email: "georgina.murray@colliers.com",
                    imgSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Georgina-Murray.svg",
                },
                {
                    key: "micDar",
                    name: "MICHAEL DARVELL",
                    phone: "+61 401 033 303",
                    email: "michael.darvell@colliers.com",
                    imgSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Michael-Darvell.svg",
                },
                {
                    key: "shaBur",
                    name: "SHANE BURNS",
                    phone: "+61 439 035 002",
                    email: "shane.burns@colliers.com",
                    imgSrc: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/Agency-Shane-Burns.svg",
                }
            ],
        },
    },
    assets: {
        hero: {
            key: "hero",
            src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/agency/hero.jpg",
            role: "presentation",
            width: 544,
            height: 815,
            lazy: false,
        },
        icons: {
            open: {
                key: "open",
                src: "https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/open.svg",
                alt: "Open",
                width: 24,
                height: 24,
                lazy: false,
            }
        }
    }
}
