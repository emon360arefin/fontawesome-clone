import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFontAwesome, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


const Header2 = () => {


    const activeClass = 'select-none ml-0 md:mr-6 text-[14px] text-left my-1  border-b  px-3 pb-1  transition-all ease-in-out duration-200'
    const inactiveClass = 'select-none ml-0 md:mr-6 text-[14px] text-left my-1  border-b  px-3 pb-1  transition-all ease-in-out duration-200'

    const items = [
        { "id": 1, "name": "Start", "path": "/start" },
        { "id": 2, "name": "Search", "path": "/search" },
        { "id": 3, "name": "Icons", "path": "/icons" },
        { "id": 4, "name": "Docs", "path": "/docs" },
        { "id": 5, "name": "Plans", "path": "/plans" },
        { "id": 6, "name": "Support", "path": "/support" },
        { "id": 7, "name": "Podcast", "path": "/podcast" },
    ]

    const itemsDesk = [

        { "id": 3, "name": "Icons", "path": "/icons" },
        { "id": 4, "name": "Docs", "path": "/docs" },
        { "id": 5, "name": "Plans", "path": "/plans" },
        { "id": 6, "name": "Support", "path": "/support" },
        { "id": 7, "name": "Podcast", "path": "/podcast" },
    ]

    const [open, setOpen] = useState(true);


    useEffect(() => {
        if (open) {
            document.body.style = "overflow:auto";
        } else {
            document.body.style = "overflow:hidden";
        }
    }, [open]);



    return (
        <div className={`  h-full bg-white  header z-[15] `}>

            {/* Inner Section */}
            <div className={`max-w-[1120px] mx-auto flex transition-all duration-500 ease-in-out items-center justify-evenly md:bg-transparent h-[60px]  relative z-[5] md:h-[75px] md:mt-[1px]`}>

                <div className={`w-full md:w-32  px-4  md:bg-transparent  py-4 flex items-center justify-between md:justify-start z-20 transition-all duration-300 ease-in-out h-full bg-white `}>

                    {/* Logo */}
                    <div>
                        <FontAwesomeIcon className='text-2xl text-[#538DD7]' icon={faFontAwesome} />
                    </div>

                    {/* Profile Icon */}




                    {/* Hamburger */}
                    <div onClick={() => setOpen(!open)} className='md:hidden mr-4 text-2xl text-theme-primary flex items-center cursor-pointer '>
                        {open ? <RxHamburgerMenu /> : <RxCross2 />}
                    </div>
                </div>


                {/* Dropdown  */}

                <ul className={`w-full md:w-10/12 backdrop-blur-sm md:backdrop-blur-0  text-right absolute md:hidden bg-white    flex md:flex-row flex-col md:items-center justify-start md:justify-end z-60 gap-1 px-4 py-4 transition-all duration-500 ease-out pt-16 md:p-0 shadow md:shadow-none ${open ? ' -top-[400px] ' : 'top-0 '}`}>

                    {
                        items.map(item => <NavLink
                            onClick={() => setOpen(true)}
                            className={({ isActive }) => isActive ? activeClass : inactiveClass}
                            key={item.id}
                            to={item.path}
                        >
                            {item.name}
                        </NavLink>)
                    }
                </ul>

                <div className='hidden w-full  md:flex gap-12 items-center justify-start '>
                    <p className='text-[16px] cursor-pointer text-[#616D8A]' >Start</p>
                    <FontAwesomeIcon className='text-[16px] cursor-pointer text-[#3a4151]' icon={faMagnifyingGlass} />

                    {
                        itemsDesk.map(item => <p className='text-[16px] cursor-pointer text-[#616D8A]' key={item.id}>{item.name}</p>)
                    }
                </div>


            </div>

        </div>
    );
};

export default Header2;