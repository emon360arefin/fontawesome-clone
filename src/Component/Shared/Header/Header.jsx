import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const items = [

    { "id": 3, "name": "Icons", "path": "/icons" },
    { "id": 4, "name": "Docs", "path": "/docs" },
    { "id": 5, "name": "Plans", "path": "/plans" },
    { "id": 6, "name": "Support", "path": "/support" },
    { "id": 7, "name": "Podcast", "path": "/podcast" },
]


const Header = () => {
    return (
        <div className='bg-white py-6 md:py-[26px] '>
            <div className='max-w-[1120px] mx-auto px-2  flex gap-20'>

                {/* Left Column */}
                <div>
                    <FontAwesomeIcon className='w-full text-2xl text-[#538DD7]' icon={faFontAwesome} />
                </div>


                {/* Right Column */}

                <div className='flex gap-12 items-center justify-start'>
                    <p className='text-[16px] cursor-pointer text-[#616D8A]' >Start</p>
                    <FontAwesomeIcon className='text-[16px] cursor-pointer text-[#3a4151]' icon={faMagnifyingGlass} />

                    {
                        items.map(item => <p className='text-[16px] cursor-pointer text-[#616D8A]' key={item.id}>{item.name}</p>)
                    }
                </div>


            </div>

        </div>
    );
};

export default Header;