import React, { useEffect, useState } from 'react';

const Home = () => {


    const [icons, setIcons] = useState(null);

    useEffect(() => {
        fetch('/data/icons.json')
            .then(res => res.json())
            .then(data => setIcons(data))
    }, [])

    console.log(icons);

    return (
        <div className='bg-white py-12 md:py-16'>
            <div className='max-w-[1476px] mx-auto px-2'>

                <div>

                </div>

                <div className='flex gap-4 bg-[#F0F1F3]'>
                    {/* Left Panel */}
                    <div className='w-1/6 h-6 bg-red-200'>
                        <h2>Left</h2>
                    </div>


                    {/* Right Panel */}
                    <div className='w-5/6 h-6 bg-red-200'>
                        <h2>Right</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;