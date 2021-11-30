import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DroneBazar from '../../public/DroneBazar.png';
import iTravel from '../../public/iTravel.png';
import MediLife from '../../public/Medi Life.png';
import styles from '../../styles/Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Portfolio = () => {
    return (
        <div className="py-16" id="project">
            <div className="text-center">
                <h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                <h2 className="font-bold text-gray-600 text-5xl sm:text-6xl mb-7">My Projects</h2>
            </div>
            <div className="mt-16 grid sm:grid-cols-3 gap-10">
                <div className="p-8 rounded-lg text-gray-600 defaultGradient" data-aos="fade-left">
                    <div className={styles.scrollImageScreen}>
                        <div className={styles.scrollImage}>
                            <Image src={DroneBazar} alt="" height={600} width={400} />
                        </div>
                    </div>

                    <h6 className="text-blue-600 uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">DroneBazar</h4>
                    <div className="flex gap-3">
                        <Link href="/projects/DroneBazar">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm">
                                See Details
                            </a>
                        </Link>
                        <Link href="https://drone-website-95836.web.app/">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm" target="_blank">
                                <FontAwesomeIcon icon={faBullseye} /> Live Site
                            </a>
                        </Link>
                        <Link href="https://github.com/wdmahbubur/niche-website-client-side">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://github.com/wdmahbubur/niche-website-server-side')
                            } target='_blank'>
                                <FontAwesomeIcon icon={faGithub} /> Source Code
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`} data-aos="fade-in">
                    <div className={styles.scrollImageScreen}>
                        <div className={styles.scrollImage}>
                            <Image src={iTravel} alt="" height={600} width={400} />
                        </div>
                    </div>

                    <h6 className="text-blue-600 uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">iTravel</h4>
                    <div className="flex gap-3">
                        <Link href="/projects/iTravel">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm">
                                See Details
                            </a>
                        </Link>
                        <Link href="https://tourism-agency-6a87c.web.app/">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm" target="_blank">
                                <FontAwesomeIcon icon={faBullseye} /> Live Site
                            </a>
                        </Link>
                        <Link href="https://github.com/wdmahbubur/tourism-or-delivery-website-client-side">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm" onClick={
                                () => window.open('https://github.com/wdmahbubur/tourism-or-delivery-website-server-side')} target="_blank">
                                <FontAwesomeIcon icon={faGithub} /> Source Code
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`} data-aos="fade-right">
                    <div className={styles.scrollImageScreen}>
                        <div className={styles.scrollImage}>
                            <Image src={MediLife} alt="" height={600} width={400} />
                        </div>
                    </div>

                    <h6 className="text-blue-600 uppercase tracking-widest text-sm mt-5">Front-End</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">Medi Life</h4>
                    <div className="flex gap-3">
                        <Link href="/projects/MediLife">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm">
                                See Details
                            </a>
                        </Link>
                        <Link href="https://health-care-website-4342c.web.app/">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm" target="_blank">
                                <FontAwesomeIcon icon={faBullseye} /> Live Site
                            </a>
                        </Link>
                        <Link href="https://github.com/wdmahbubur/healthcare-react-website">
                            <a className="border-2 border-gray-500 px-2 py-1 rounded-md hover:bg-blue-500 hover:text-white hover:border-white transition duration-500 font-medium text-sm" target="_blank">
                                <FontAwesomeIcon icon={faGithub} /> Source Code
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;