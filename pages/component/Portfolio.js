import React from 'react';
import Image from 'next/image';
import DroneBazar from '../../public/DroneBazar.png';
import iTravel from '../../public/iTravel.png';
import MediLife from '../../public/Medi Life.png';
import styles from '../../styles/Portfolio.module.css';

const Portfolio = () => {
    return (
        <div className="py-16" id="project">
            <div className="text-center">
                <h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h5>
                <h2 className="font-bold text-gray-600 text-5xl sm:text-6xl mb-7">My Projects</h2>
            </div>
            <div className="mt-16 grid sm:grid-cols-3 gap-10">
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`} data-aos="fade-left">
                    <div className={styles.scrollImageScreen}>
                        <div className={styles.scrollImage}>
                            <Image src={DroneBazar} alt="" height={600} width={400} />
                        </div>
                    </div>

                    <h6 className="text-blue-600 uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">DroneBazar</h4>
                    <h5 className="text-xl">A Drone Selling Website</h5>
                </div>
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`} data-aos="fade-in">
                    <div className={styles.scrollImageScreen}>
                        <div className={styles.scrollImage}>
                            <Image src={iTravel} alt="" height={600} width={400} />
                        </div>
                    </div>

                    <h6 className="text-blue-600 uppercase tracking-widest text-sm mt-5">MERN Stack</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">iTravel</h4>
                    <h5 className="text-xl">A Travel Booking Website</h5>
                </div>
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`} data-aos="fade-right">
                    <div className={styles.scrollImageScreen}>
                        <div className={styles.scrollImage}>
                            <Image src={MediLife} alt="" height={600} width={400} />
                        </div>
                    </div>

                    <h6 className="text-blue-600 uppercase tracking-widest text-sm mt-5">Front-End</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">Medi Life</h4>
                    <h5 className="text-xl">A Appointment Booking Website</h5>
                </div>
            </div>
        </div>

    );
};

export default Portfolio;