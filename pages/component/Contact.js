import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../../public/me.jpg';
import FollowMe from './FollowMe';

const Contact = () => {
    return (
        <div className="py-16">
            <div className="text-center">
                <h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest">Contact</h5>
                <h2 className="font-bold text-gray-600 text-5xl sm:text-6xl mb-7">Contact With Me</h2>
            </div>
            <div className="grid sm:grid-cols-12 gap-10 mt-12">
                <div className="defaultGradient col-span-8 p-12 rounded-lg">
                    <form className="flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block uppercase text-base tracking-widest text-gray-600">Your Name</label>
                                <input type="text" name="name" id="name" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" />
                            </div>
                            <div>
                                <label htmlFor="number" className="block uppercase text-base tracking-widest text-gray-600">Phone Number</label>
                                <input type="text" name="number" id="number" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block uppercase text-base tracking-widest text-gray-600">Email</label>
                            <input type="email" name="email" id="email" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block uppercase text-base tracking-widest text-gray-600">Subject</label>
                            <input type="text" name="subject" id="subject" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block uppercase text-base tracking-widest text-gray-600">Your Message</label>
                            <textarea name="message" rows="5" id="message" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" />
                        </div>
                        <div>
                            <button type="submit" className="py-4 px-5 rounded-lg outline-none transition duration-500 linear text-blue-500 uppercase font-semibold defaultBtn defaultGradient">Send Message <FontAwesomeIcon icon={faPaperPlane} /></button>
                        </div>
                    </form >
                </div >
                <div className="defaultGradient col-span-4 py-8 px-6 rounded-lg">
                    <div className="">
                        <Image src={myPhoto} alt="my-photo" height={350} className="rounded-lg" />
                    </div>
                    <h1 className="text-2xl font-bold mt-4">Mahbubur Rahman</h1>
                    <h3 className="text-xl text-gray-600 mt-2">Full-Stack Developer</h3>
                    <h5 className="text-lg text-gray-600 mt-2">I am available for freelance work. Feel free to contact with me.</h5>
                    <hr className="bg-gray-200 rounded-lg my-2" />
                    <h5 className="text-lg text-gray-600 mt-2">Phone: +880 18540-97990</h5>
                    <h5 className="text-lg text-gray-600 mt-2">Email: <Link href="mailto:mahbubur.rahman0407@gmail.com">mahbubur.rahman0407@gmail.com</Link></h5>
                    <hr className="bg-gray-200 rounded-lg my-2" />
                    <div className="mt-3">
                        <h5 className="uppercase text-gray-700 font-semibold">Follow Me</h5>
                        <FollowMe />
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Contact;