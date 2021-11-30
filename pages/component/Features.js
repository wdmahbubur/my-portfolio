
import React from 'react';
import Image from 'next/image';
import frontEnd from '../../public/front-end.png';
import backEnd from '../../public/backend.png';
import fullStack from '../../public/full-stack.png';
import styles from '../../styles/Features.module.css';
const Features = () => {
    return (
        <div className="py-16" id="features">
            <div>
                <h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest">Features</h5>
                <h2 className="font-bold text-gray-600 text-5xl sm:text-6xl mb-7">What I Do</h2>
            </div>
            <div className="mt-16 grid sm:grid-cols-3 gap-10">
                <div className={`py-8 sm:py-16 px-8 sm:px-16 rounded-lg text-gray-600 ${styles.featuresCard} defaultGradient `} data-aos="fade-right">
                    <Image src={frontEnd} alt="" height={50} width={50} />
                    <h4 className="text-2xl font-medium ">Front-End Development</h4>
                    <p className="mt-3">The front-end is like the human body that we see with normal eyes. I develop front-end with HTML, CSS, Javascript, React.</p>
                </div>
                <div className={`py-8 sm:py-16 px-8 sm:px-16 rounded-lg text-gray-600 ${styles.featuresCard} defaultGradient `} data-aos="fade-up">
                    <Image src={backEnd} alt="" height={50} width={50} />
                    <h4 className="text-2xl font-medium ">Back-End Development</h4>
                    <p className="mt-3">The back-end is like the human body that we do not see with normal eyes. I develop back-end with Node JS, Express JS, MongoDB.</p>
                </div>
                <div className={`py-8 sm:py-16 px-8 sm:px-16 rounded-lg text-gray-600 ${styles.featuresCard} defaultGradient `} data-aos="fade-left">
                    <Image src={fullStack} alt="" height={50} width={50} />
                    <h4 className="text-2xl font-medium ">Full-Stack Development</h4>
                    <p className="mt-3">The full-stack is like the complete human body that we see and do not see with normal eyes. </p>
                </div>
            </div>
        </div>
    );
};

export default Features;