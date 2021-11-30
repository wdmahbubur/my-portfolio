import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myImage from '../../public/about-image.png'
const About = () => {
    return (
        <div className="py-16 grid sm:grid-cols-2 items-center" id="about">
            <div className="hidden sm:block">
                <div className="w-96 defaultGradient rounded-lg mx-auto">
                    <Image src={myImage} height={700} width={500} alt="my-photo" className="rounded-lg" />
                </div>
            </div>
            <div>
                <h5 className="uppercase text-lg text-blue-600 mb-4 font-base tracking-wider">About Me</h5>
                <h2 className="font-bold text-gray-600 text-4xl sm:text-6xl mb-7">Mahbubur Rahman</h2>
                <p className="my-8 text-base text-gray-600">I`m a junior full-stack developer. I made many projects, similar to single item selling sites, e-commerce, travel booking, doctor appointment booking, and more. All the projects are interactive. I`m comfortable with React JS, Node Js, Express JS, MongoDB, and the capacity to write clean and productive code.
                </p>
                <p className="my-8 text-base text-gray-600">I recently completed a course in Web Development at Programming Hero. I now want to apply my skills in IT Industry. As a junior full-stack developer, I can implement development concepts to design innovative and ingenious applications for users.</p>
                <Link href="#contact">
                    <a className="py-4 px-5 rounded-lg outline-none transition duration-500 linear text-blue-500 uppercase font-semibold defaultBtn defaultGradient inline-block">Contact With Me</a>
                </Link>
            </div>

        </div>
    );
};

export default About;