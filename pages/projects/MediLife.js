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
import Service from '../../public/MediLife/Service.png'
import WhyChoose from '../../public/MediLife/why-choose.png'
import Banner from '../../public/MediLife/Banner.png'
import Appointment from '../../public/MediLife/appointment.png';
import Footer from '../../public/MediLife/footer.png';
import Login from '../../public/MediLife/login.png';

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

const MediLife = () => {
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
                                <Image src={Appointment} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Login} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Footer} alt="" />
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
                                <Image src={Appointment} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Login} alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={Footer} alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div>
                        <h5 className="uppercase text-lg text-blue-600 mb-4 font-base tracking-wider">Front-End</h5>
                        <h2 className="font-bold text-gray-600 text-4xl sm:text-6xl">Medi Life</h2>
                        <h4 className="font-bold text-gray-600 text-xl sm:text-2xl"> - A Appointment Booking Website</h4>
                        <div className="flex gap-3 mt-4 mb-8">
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
                        <p className="mb-7">It is a Hospital Website. Used some technology to complete the website. Used ReactJS, Tailwind, Firebase, react-router-dom, etc. Users see the hospital service and hospital doctors. User login to get more information. Full website complete with tailwind CSS Framework.</p>
                        <div>
                            <h4 className="font-bold text-gray-600 text-xl sm:text-2xl">Features</h4>
                            <hr className="h-1 bg-gray-200 rounded-lg" />
                            <ul style={{ listStyle: 'circle', marginLeft: '25px' }}>
                                <li>Full website is responsive on mobile and tablet.</li>
                                <li>User can login and register.</li>
                                <li>User using google for sign in.</li>
                                <li>All images are also optimized.</li>
                                <li>API load from outside.</li>
                                <li>User doesn`t access the private route without a login.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden">
                    <Image src={Banner} alt="" />
                    <Image src={WhyChoose} alt="" />
                    <Image src={Service} alt="" />
                    <Image src={Appointment} alt="" />
                    <Image src={Login} alt="" />
                    <Image src={Footer} alt="" />
                </div>
            </Layout>
        </>
    );
};

export default MediLife;