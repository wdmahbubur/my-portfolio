import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sass from '../../public/sass-1.jpeg';

const Blog = () => {
    return (
        <div className="py-16" id="blog">
            <div className="text-center">
                <h5 className="uppercase text-xl text-blue-600 mb-4 font-base tracking-widest">VISIT MY BLOG AND KEEP YOUR FEEDBACK</h5>
                <h2 className="font-bold text-gray-600 text-5xl sm:text-6xl mb-7">My Blog</h2>
            </div>
            <div className="mt-16 grid sm:grid-cols-3 gap-10">
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`}>
                    <Image src={Sass} alt="" />
                    <h4 className="text-3xl font-medium mt-2 mb-4"><Link href="/blogs/blog-1">About of SASS. Part-1</Link></h4>
                    <p>The full meaning of SASS is a Syntactically Awesome Stylesheet.</p>
                </div>
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`}>
                    <Image src={Sass} alt="" />
                    <h4 className="text-3xl font-medium mt-2 mb-4"><Link href="/blogs/blog-1">About of SASS. Part-1</Link></h4>
                    <p>The full meaning of SASS is a Syntactically Awesome Stylesheet.</p>
                </div>
                <div className={`p-8 rounded-lg text-gray-600 defaultGradient`}>
                    <Image src={Sass} alt="" />
                    <h4 className="text-3xl font-medium mt-2 mb-4"><Link href="/blogs/blog-1">About of SASS. Part-1</Link></h4>
                    <p>The full meaning of SASS is a Syntactically Awesome Stylesheet.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;