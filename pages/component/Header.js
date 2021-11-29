import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import me from '../../public/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from '../../styles/Header.module.css';

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
        <header>
            <nav className="shadow-lg p-2 sm:py-3 sm:px-5">
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
                            <li><Link href="#"> Home</Link></li>
                            <li><Link href="#"> Feature</Link></li>
                            <li><Link href="#"> Portfolio</Link></li>
                            <li><Link href="#"> Projects</Link></li>
                            <li><Link href="#"> Blog</Link></li>
                            <li><Link href="#"> Contact</Link></li>
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
                            <li><Link href="#"> Home</Link></li>
                            <li><Link href="#"> Feature</Link></li>
                            <li><Link href="#"> Portfolio</Link></li>
                            <li><Link href="#"> Projects</Link></li>
                            <li><Link href="#"> Blog</Link></li>
                            <li><Link href="#"> Contact</Link></li>
                            <li><Link href="https://drive.google.com/uc?id=17xSMG2ZdrYPjV3PIgXvl7QsdC2AcirNI&export=download" >
                                <a className="py-4 px-5 rounded-lg outline-none transition duration-500 linear text-blue-500 uppercase font-semibold defaultBtn defaultGradient">Download Resume</a>
                            </Link></li>
                        </ul>
                    </div>
                    <div className="px-2 pb-5 absolute bottom-0">
                        <h5 className="uppercase text-gray-700 font-semibold">Find With Me</h5>
                        <div className="mt-3 flex gap-5">
                            <div className="default-gradient flex justify-center items-center h-12 w-12 rounded">
                                <div><FontAwesomeIcon icon={faFacebookF} className="text-blue-500" /></div>
                            </div>
                            <div className="default-gradient flex justify-center items-center h-12 w-12 rounded">
                                <div><FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500" /></div>
                            </div>
                            <div className="default-gradient flex justify-center items-center h-12 w-12 rounded">
                                <div><FontAwesomeIcon icon={faGithub} className="text-blue-500" /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;