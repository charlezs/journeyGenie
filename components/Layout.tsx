import React from 'react';
import Footer from './Footer';

type Child ={
    children: string;
}

function Layout({children}: Child) {
    return (
        <>
            <main>{children}</main>
            <Footer/>
        </>
    )
}

export default Layout;