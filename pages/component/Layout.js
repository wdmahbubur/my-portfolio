import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 sm:px-0 mt-16 mb-8 sm:mt-24">
                {children}
            </main>

            <hr className="h-1 bg-gray-200 rounded-lg" />
            <Footer />

        </>
    );
};

export default Layout;