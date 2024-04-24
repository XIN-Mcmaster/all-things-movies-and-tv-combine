import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"

import '../../ontario-design-system/styles/ds-theme.css';
import "../styles/layout.css"



const Layout = ({ children }) => {

    return (
        <>
            <Header />
            <div>
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout