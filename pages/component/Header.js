import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import me from '../../public/me.jpg';
import styles from '../../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import FollowMe from './FollowMe';

const Header = () => {
    const mobileMenu = React.useRef();

    const openMobileMenu = () => {
        mobileMenu.current.style.left = "0";
        mobileMenu.current.style.opacity = "100%";
    }

    const closeMobileMenu = () => {
        mobileMenu.current.style.left = "-100%";
        mobileMenu.current.style.opacity = "0%";
    }
    return (
        <header className="fixed w-full top-0 bg-gray-100 z-50">
            <nav className="shadow-lg p-2 sm:py-4 sm:px-5">
                {/* navbar */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src={me} width={40} height={40} alt="icon" className="rounded-full flex items-center justify-center logo" />
                        <h4 className="ml-2 font-medium text-xl sm:text-2xl text-gray-700 ">MAHBUBUR RAHMAN</h4>
                    </div>
                    <div className="sm:hidden" onClick={openMobileMenu} >
                        <FontAwesomeIcon icon={faBars} className="text-gray-700" height="50" />
                    </div>
                    {/* desktop menu */}
                    <div className="hidden sm:block">
                        <ul className="flex items-center gap-5 text-gray-500 uppercase font-semibold">
                            <li><Link href="#home"> Home</Link></li>
                            <li><Link href="#features"> Feature</Link></li>
                            <li><Link href="#project"> Projects</Link></li>
                            <li><Link href="#blog"> Blog</Link></li>
                            <li><Link href="#contact"> Contact</Link></li>
                            <li>
                                <Link href="https://drive.google.com/uc?id=17xSMG2ZdrYPjV3PIgXvl7QsdC2AcirNI&export=download" >
                                    <a className="py-4 px-5 rounded-lg outline-none transition duration-500 linear text-blue-500 uppercase font-semibold defaultBtn defaultGradient">Download Resume</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* mobile menu */}
            <div className={styles.mobilePopupMenu} ref={mobileMenu}>
                <div className={styles.mobileMenuInner}>
                    <div className="flex justify-between items-center border-b-2 border-gray-400 p-2">
                        <div className="flex items-center">
                            <Image src={me} width={40} height={40} alt="icon" className="rounded-full flex items-center justify-center logo" />
                            <h4 className="ml-2 font-medium text-base  sm:text-2xl text-gray-700 ">MAHBUBUR RAHMAN</h4>
                        </div>
                        <div className="rounded-full shadow-lg default-gradient h-8 w-8  flex justify-center items-center" onClick={closeMobileMenu}>
                            <FontAwesomeIcon icon={faTimes} />
                        </div>
                    </div>
                    <div className="p-2 mt-5">
                        <ul className="text-gray-500 uppercase font-semibold flex flex-col gap-6">
                            <li><Link href="#home"> Home</Link></li>
                            <li><Link href="#feature"> Feature</Link></li>
                            <li><Link href="#project"> Projects</Link></li>
                            <li><Link href="#blog">Blog</Link></li>
                            <li><Link href="#contact"> Contact</Link></li>
                            <li><Link href="https://drive.google.com/uc?id=17xSMG2ZdrYPjV3PIgXvl7QsdC2AcirNI&export=download" >
                                <a className="py-4 px-5 rounded-lg outline-none transition duration-500 linear text-blue-500 uppercase font-semibold defaultBtn defaultGradient">Download Resume</a>
                            </Link></li>
                        </ul>
                    </div>
                    <div className="px-2 pb-5 absolute bottom-0">
                        <h5 className="uppercase text-gray-700 font-semibold">Follow Me</h5>
                        <FollowMe />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;