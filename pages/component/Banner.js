import React from 'react';

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="grid sm:grid-cols-2 py-16">
                <div>
                    <h5 className="uppercase text-xl">Welcome to my world</h5>
                    <h2 className="font-bold text-blue-600 text-5xl">Hi, I am Mahbubur Rahman</h2>
                    <h3>a Full-Stack Developer</h3>
                </div>
                <div>
                    <div className="h-full w-96 defaultGradient float-right">
                        <div style={{ height: '500px' }}></div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;