import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className='bg-[#183153] py-6 md:py-[40px] '>
            <div className='max-w-[1120px] mx-auto px-2  '>
                <div className='flex flex-col md:flex-row gap-10'>
                    {/* Left Column */}
                    <div className='w-full md:w-2/5 flex flex-col items-start gap-6 '>
                        <FontAwesomeIcon className=' text-start text-2xl text-[#538DD7]' icon={faFontAwesome} />

                        <div className='flex flex-col gap-2'>
                            <h2 className='text-[16px] font-semibold text-white'>Go Make Something Awesome</h2>

                            <p className='text-white text-[14px]'>Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.</p>

                            <p className='text-white text-[14px]'>Made with  and  in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.</p>



                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='w-full md:w-3/5 grid grid-cols-2 md:grid-cols-3 gap-6 md:pl-32'>

                        <div className=''>
                            <h2 className='text-[16px] text-[#616d8a] font-semibold'>Project</h2>
                            <ul className='flex flex-col gap-2 text-white text-[16px] cursor-pointer  mt-4'>
                                <li className='hover:text-[#74c0fc]'>Download</li>
                                <li className='hover:text-[#74c0fc]'>Changelog</li>
                                <li className='hover:text-[#74c0fc]'>Commission Icons</li>
                                <li className='hover:text-[#74c0fc]'>All Versions</li>
                            </ul>
                        </div>


                        <div>
                            <h2 className='text-[16px] text-[#616d8a] font-semibold'>Community</h2>
                            <ul className='flex flex-col gap-2 text-white text-[16px] cursor-pointer  mt-4'>
                                <li className='hover:text-[#74c0fc]'>Github</li>
                                <li className='hover:text-[#74c0fc]'>Icon Request</li>
                                <li className='hover:text-[#74c0fc]'>Twitter</li>
                                <li className='hover:text-[#74c0fc]'>Blog Awesome</li>
                            </ul>
                        </div>


                        <div className='mt-4 md:mt-0'>
                            <h2 className='text-[16px] text-[#616d8a] font-semibold'>Help</h2>
                            <ul className='flex flex-col gap-2 text-white text-[16px] cursor-pointer  mt-4'>
                                <li className='hover:text-[#74c0fc]'>Support</li>
                                <li className='hover:text-[#74c0fc]'>Troubleshooting</li>
                                <li className='hover:text-[#74c0fc]'>Contact Us</li>
                                <li className='hover:text-[#74c0fc]'>Status</li>
                            </ul>
                        </div>

                    </div>
                </div>


                <div className='flex flex-col md:flex-row mt-8 items-start justify-between gap-2'>
                    <ul className='flex gap-6 text-white text-[14px] cursor-pointer'>
                        <li className='hover:text-[#74c0fc]'>Licence</li>
                        <li className='hover:text-[#74c0fc]'>Terms of Services</li>
                        <li className='hover:text-[#74c0fc]'>Privacy Policy</li>
                        <li className='hover:text-[#74c0fc]'>Refunds</li>
                    </ul>


                    <p className='text-white text-[14px] font-thin'>© Emon Arefin.</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;