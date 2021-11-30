import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../component/Layout';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import About from '../../public/iTravel/about.png'
import Contact from '../../public/iTravel/contact.png'
import Service from '../../public/iTravel/service.png'
import WhyChoose from '../../public/iTravel/why-choose.png'
import Banner from '../../public/iTravel/banner.png'
import AddService from '../../public/iTravel/add-service.png'
import AllBooking from '../../public/iTravel/all-booking.png'
import MyBooking from '../../public/iTravel/my-booking.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import Swiper core and required modules
import SwiperCore, {
    FreeMode, Navigation, Thumbs
} from 'swiper';


// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

const iTravel = () => {
    const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
    return (
        <>
            <Head>
                <title>Mahbubur Rahman- Portfolio</title>
                <meta name="description" content="Junior Full-Stack Developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <div className="grid sm:grid-cols-2 gap-5 text-gray-600 mb-4">
                    <div className="hidden sm:block">
                        <Swiper style={{ '--swiper-navigation-color': '#000', '--swiper-pagination-color': '#000' }} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                            <SwiperSlide>
                                <Image src={Banner} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src={WhyChoose} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Service} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Contact} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={About} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={AddService} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={AllBooking} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={MyBooking} alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                            <SwiperSlide>
                                <Image src={Banner} alt="" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Image src={WhyChoose} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Service} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Contact} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={About} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={AddService} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={AllBooking} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={MyBooking} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <h5 className="uppercase text-lg text-blue-600 mb-4 font-base tracking-wider">MERN Stack</h5>
                        <h2 className="font-bold text-gray-600 text-4xl sm:text-6xl">iTravel</h2>
                        <h4 className="font-bold text-gray-600 text-xl sm:text-2xl"> - A Travel Booking Website</h4>
                        <div className="flex gap-3 mt-4 mb-8">

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
                        <p className="mb-7">It is a Travel Agency Website. It's a MERN Stack project. Used ReactJS, Bootstrap, Firebase, react-router-dom, Mongodb for Database, NodeJS and ExpressJS for backend, etc. User sees the travel services and booking travel services. User login to get more options.</p>
                        <div>
                            <h4 className="font-bold text-gray-600 text-xl sm:text-2xl">Features</h4>
                            <hr className="h-1 bg-gray-200 rounded-lg" />
                            <ul style={{ listStyle: 'circle', marginLeft: '25px' }}>
                                <li>Full website is responsive on mobile and tablet</li>
                                <li>User using google for sign in</li>
                                <li>All images are also optimized and loaded from IMGBB.</li>
                                <li>A load from a different server.</li>
                                <li>Use NodeJS and ExpressJS for the backend server.</li>
                                <li>Add new service and image automatically upload in IMGBB.</li>
                                <li>Users booking service, see their booking, update booking and cancel a booking.</li>
                                <li>User doesn`t access the private route without a login</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden">
                    <Image src={Banner} alt="" />
                    <Image src={WhyChoose} alt="" />
                    <Image src={Service} alt="" />
                    <Image src={Contact} alt="" />
                    <Image src={About} alt="" />
                    <Image src={AddService} alt="" />
                    <Image src={AllBooking} alt="" />
                    <Image src={MyBooking} alt="" />
                </div>
            </Layout>
        </>
    );
};

export default iTravel;