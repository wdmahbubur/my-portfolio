import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faReact, faNodeJs, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import mongodb from '../../public/mongodb.png';
import nodejs from '../../public/node-js.png';
import myImage from '../../public/banner-image.png';

const Banner = () => {
    return (
        <div className="mt-16 sm:mt-32">
            <div className="grid sm:grid-cols-2 py-16 items-center">
                <div className="">
                    <h5 className="uppercase text-xl text-gray-600 mb-4">Welcome to my world</h5>
                    <h2 className="font-bold text-blue-600 text-2xl sm:text-5xl mb-7">Hi, I`m Mahbubur Rahman</h2>
                    <h3 className="text-xl sm:text-5xl font-medium text-blue-600">A&nbsp;
                        <ReactTypingEffect
                            text={[" Full-Stack Developer", " MERN-Stack Developer", " Professional Coder"]}
                            cursorRenderer={cursor => <h1>{cursor}</h1>}
                            speed={200}
                            eraseSpeed={200}
                            eraseDelay={800}
                            typingDelay={800}
                            displayTextRenderer={(text, i) => {
                                return (
                                    <h1>
                                        {text.split('').map((char, i) => {
                                            const key = `${i}`;
                                            return (
                                                <span
                                                    key={key}>{char}</span>
                                            );
                                        })}
                                    </h1>
                                );
                            }}
                        />
                    </h3>
                    <p className="my-8 text-base text-gray-600">I`m a junior full-stack developer. I made many projects, similar to single item selling sites, e-commerce, travel booking, doctor appointment booking, and more. All the projects are interactive. I`m comfortable with React JS, Node Js, Express JS, MongoDB, and the capacity to write clean and productive code.
                    </p>
                    <Link href="https://drive.google.com/uc?id=17xSMG2ZdrYPjV3PIgXvl7QsdC2AcirNI&export=download">
                        <a className="py-4 px-5 rounded-lg outline-none transition duration-500 linear text-blue-500 uppercase font-semibold defaultBtn defaultGradient inline-block">Download Resume</a>
                    </Link>
                    <div className="sm:flex justify-between">
                        <div className="mt-12">
                            <h5 className="uppercase text-gray-700 font-semibold">Find With Me</h5>
                            <div className="mt-3 flex gap-5">
                                <Link href="https://facebook.com/mrrohanc.2001" >
                                    <a className="defaultGradient flex justify-center items-center h-12 w-12 rounded" target="_blank">
                                        <div><FontAwesomeIcon icon={faFacebookF} className="text-blue-500" /></div>
                                    </a>
                                </Link>
                                <Link href="https://www.linkedin.com/in/mrrohanc/">
                                    <a className="defaultGradient flex justify-center items-center h-12 w-12 rounded" target="_blank">
                                        <div><FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500" /></div>
                                    </a>
                                </Link>
                                <Link href="https://github.com/wdmahbubur/">
                                    <a className="defaultGradient flex justify-center items-center h-12 w-12 rounded" target="_blank">
                                        <div><FontAwesomeIcon icon={faGithub} className="text-blue-500" /></div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-12">
                            <h5 className="uppercase text-gray-700 font-semibold">My Skills On</h5>
                            <div className="mt-3 flex gap-5">

                                <div className="defaultGradient flex justify-center items-center h-12 w-12 rounded">
                                    <div><FontAwesomeIcon icon={faJsSquare} className="text-blue-500" /></div>
                                </div>

                                <div className="defaultGradient flex justify-center items-center h-12 w-12 rounded">
                                    <div><FontAwesomeIcon icon={faReact} className="text-blue-500" /></div>
                                </div>
                                <div className="defaultGradient flex justify-center items-center h-12 w-12 rounded">
                                    <div><Image src={nodejs} alt="node js" height={30} width={30} /></div>
                                </div>
                                <div className="defaultGradient flex justify-center items-center h-12 w-12 rounded">
                                    <div><Image src={mongodb} alt="mongodb" height={40} width={40} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden sm:block">
                    <div className="h-full w-96 defaultGradient sm:float-right mt-32 rounded-lg mx-auto">
                        <div className="-mt-48 -mb-2">
                            <Image src={myImage} height={800} width={500} alt="my-photo" className="rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;