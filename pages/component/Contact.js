import { faCheckCircle, faExclamationCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import myPhoto from '../../public/me.jpg';
import FollowMe from './FollowMe';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [success, setSuccess] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const form = React.useRef();
    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm('service_ud8evvh', 'portfolio_contact_form', form.current, 'user_sA4B1Nz6XOgSoPHGDBuWt')
            .then((result) => {
                if (result.text === "OK");
                setSuccess(true);
                setFailed(false);
                event.target.user_name.value = '';
                event.target.user_number.value = '';
                event.target.user_email.value = '';
                event.target.subject.value = '';
                event.target.message.value = '';
            }, (error) => {
                setSuccess(false);
                setFailed(true);
            });
    }

    setTimeout(
        () => setSuccess(false), 5000
    )

    return (
        <div className="py-16 relative" id="contact">
            <div className="text-center">
                < h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest" > Contact</h5 >
                <h2 className="font-bold text-gray-600 text-4xl sm:text-6xl mb-7">Contact With Me</h2>
            </div >
            <div className="grid sm:grid-cols-12 gap-10 mt-12">
                <div className="defaultGradient col-span-4 sm:col-span-8 p-4 sm:p-12 rounded-lg">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit} ref={form}>
                        <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                                <label htmlFor="name" className="block uppercase text-base tracking-widest text-gray-600">Your Name</label>
                                <input type="text" name="user_name" id="name" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                            </div>
                            <div>
                                <label htmlFor="number" className="block uppercase text-base tracking-widest text-gray-600">Phone Number</label>
                                <input type="text" name="user_number" id="number" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block uppercase text-base tracking-widest text-gray-600">Email</label>
                            <input type="email" name="user_email" id="email" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block uppercase text-base tracking-widest text-gray-600">Subject</label>
                            <input type="text" name="subject" id="subject" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block uppercase text-base tracking-widest text-gray-600">Your Message</label>
                            <textarea name="message" rows="5" id="message" className="py-2 px-4 outline-none rounded w-full mt-2 border-2 border-gray-300" required />
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
            </div>
            {
                success && <div className="bg-green-300 p-4 fixed rounded left-4 bottom-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-800" /> Your Message Successfully Sent!
                </div>
            }
            {
                failed && <div className="bg-red-300 p-4 fixed rounded left-4 bottom-4">
                    <FontAwesomeIcon icon={faExclamationCircle} className="text-red-800" /> Message Sent Failed!
                </div>
            }

        </div >
    );
};

export default Contact;