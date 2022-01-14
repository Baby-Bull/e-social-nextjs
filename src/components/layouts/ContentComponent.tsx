import React from "react"
import Head from "next/head"

import FooterComponent from "src/components/layouts/FooterComponent"
import HeaderComponent from "src/components/layouts/HeaderComponent"

interface ContentComponentProps {
    children: any;
}
const ContentComponent: React.SFC<ContentComponentProps> = ({ children }) => (
    <div>
        <Head>
            <title>Good Tech Hub 2222</title>
        </Head>
        <HeaderComponent />
        {children}
        <FooterComponent />
    </div>
);
export default ContentComponent;
