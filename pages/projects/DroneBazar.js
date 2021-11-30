import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Layout from '../component/Layout';

import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Banner from '../../public/DroneBazar/Banner.png';
import Contact from '../../public/DroneBazar/contact.png';
import Dashboard from '../../public/DroneBazar/dashboard.png';
import LatestProduct from '../../public/DroneBazar/latest-product.png';
import Review from '../../public/DroneBazar/review.png';

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


const DroneBazar = () => {
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
                                <Image src={LatestProduct} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Review} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Contact} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Dashboard} alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                            <SwiperSlide>
                                <Image src={Banner} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={LatestProduct} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Review} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Contact} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Dashboard} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <h5 className="uppercase text-lg text-blue-600 mb-4 font-base tracking-wider">MERN Stack</h5>
                        <h2 className="font-bold text-gray-600 text-4xl sm:text-6xl">Drone Bazar</h2>
                        <h4 className="font-bold text-gray-600 text-xl sm:text-2xl"> - A drone selling website</h4>
                        <div className="flex gap-3 mt-4 mb-8">

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
                        <p className="mb-7">That is a drone selling website. It`s a MERN stack project. Use ReactJS, Material UI, Firebase, react-router-dom, Mongodb for Database, NodeJS and ExpressJS for backend, etc. The user sees the products and purchases. User login to get more options.</p>
                        <div>
                            <h4 className="font-bold text-gray-600 text-xl sm:text-2xl">Features - User</h4>
                            <hr className="h-1 bg-gray-200 rounded-lg" />
                            <ul style={{ listStyle: 'circle', marginLeft: '25px' }}>
                                <li>User creates an account by email and password or using google sign-in.</li>
                                <li>User place order.</li>
                                <li>Login dashboard user see their total order, pending order, and approved order.</li>
                                <li>User sees their order list by sorting the calendar.</li>
                                <li>User sees their all orders on my order page.</li>
                                <li>Their cancel an order with two clicks.</li>
                                <li>Users can give reviews about our shop. The reviews are also shown on the home page.</li>
                                <li>Full website is mobile-friendly.</li>
                            </ul>
                        </div>
                        <div className="mt-4">
                            <h4 className="font-bold text-gray-600 text-xl sm:text-2xl">Features - Admin</h4>
                            <hr className="h-1 bg-gray-200 rounded-lg" />
                            <ul style={{ listStyle: 'circle', marginLeft: '25px' }}>
                                <li>Admin and user login as the same page but, their dashboard is different.</li>
                                <li>Admin dashboard Show total order, pending order, approved order, Date wise order.</li>
                                <li>Admin add new product in website</li>
                                <li>Admin Manage all orders. Change status or Cancel order.</li>
                                <li>Admin can make a new admin.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="block sm:hidden">
                    <Image src={Banner} alt="" />
                    <Image src={LatestProduct} alt="" />
                    <Image src={Review} alt="" />
                    <Image src={Contact} alt="" />
                    <Image src={Dashboard} alt="" />
                </div>

            </Layout>
        </>
    );
};

export default DroneBazar;