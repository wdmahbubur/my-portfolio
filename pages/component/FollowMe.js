import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const FollowMe = () => {
    return (
        <div className="mt-3 flex gap-5">
            <div className="mt-3 flex gap-5">
                <Link href="https://facebook.com/mrrohanc.2001" >
                    <a className="flex justify-center items-center h-12 w-12 rounded defaultGradient defaultBtn transition duration-500 linear text-blue-500" target="_blank">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/in/mrrohanc/">
                    <a className="defaultGradient defaultBtn transition duration-500 linear text-blue-500 flex justify-center items-center h-12 w-12 rounded" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </Link>
                <Link href="https://github.com/wdmahbubur/">
                    <a className="defaultGradient defaultBtn transition duration-500 linear text-blue-500 flex justify-center items-center h-12 w-12 rounded" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default FollowMe;