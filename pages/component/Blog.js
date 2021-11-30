import React from 'react';
import Image from 'next/image';
import DroneBazar from '../../public/DroneBazar.png';

const Blog = () => {
    return (
        <div className="py-16" id="blog">
            <div className="text-center">
                <h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest">VISIT MY BLOG AND KEEP YOUR FEEDBACK</h5>
                <h2 className="font-bold text-gray-600 text-5xl sm:text-6xl mb-7">My Blog</h2>
            </div>
            {/* <div className="mt-16 grid sm:grid-cols-3 gap-10">
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`}>
                    <Image src={DroneBazar} alt="" height={600} width={400} />
                    <h6 className="text-blue-600 uppercase tracking-widest text-base mt-5">MERN Stack</h6>
                    <h4 className="text-3xl font-medium mt-2 mb-4">DroneBazar</h4>
                    <h5 className="text-xl">A Drone Selling Website</h5>
                </div>

            </div> */}
            <h1 className="text-5xl text-center">Coming Soon</h1>
        </div>
    );
};

export default Blog;