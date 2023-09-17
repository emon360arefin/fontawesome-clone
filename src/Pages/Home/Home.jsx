import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faIcons, faSackDollar } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [icons, setIcons] = useState(null);
    const [hoverCategory, setHoverCategory] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const category = [
        { "id": 1, "icon": faIcons, "name": "Classic" },
        { "id": 2, "icon": faSackDollar, "name": "Pro" },
        { "id": 3, "icon": faBolt, "name": "Free" },
    ];

    useEffect(() => {
        fetch('/data/icons.json')
            .then(res => res.json())
            .then(data => setIcons(data))
    }, []);

    const handleCategoryClick = (categoryName) => {
        if (selectedCategories.includes(categoryName)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== categoryName));
        } else {
            setSelectedCategories([...selectedCategories, categoryName]);
        }
    }

    // Filter icons based on selected categories or show all icons if no category is selected
    const filteredIcons = icons
        ? selectedCategories.length === 0
            ? icons
            : icons.filter(icon => selectedCategories.includes(icon.category))
        : [];

    return (
        <div className='bg-white py-12 md:py-16'>
            {/* Filter Bar */}
            <div className='max-w-[1476px] mx-auto px-2'>
                <div className='flex gap-4 bg-white justify-between items-center pb-8'>
                    {/* Category */}
                    <div className='w-4/6 flex gap-2'>
                        {category.map(cat => (
                            <div
                                onClick={() => handleCategoryClick(cat.name)}
                                onMouseEnter={() => setHoverCategory(cat.name)}
                                onMouseLeave={() => setHoverCategory(null)}
                                key={cat.id}
                                className={`px-[40px] py-[20px] flex flex-col items-center justify-center gap-4 border-b-4 hover:border-[#146EBE] ${selectedCategories.includes(cat.name) ? 'border-[#146EBE]' : 'border-white'}  cursor-pointer`}

                            >
                                <FontAwesomeIcon
                                    className={`w-full text-3xl ${hoverCategory === cat.name ? 'text-[#146EBE]' : 'text-[#183153]'} ${selectedCategories.includes(cat.name) ? 'text-[#146EBE]' : 'text-[#183153]'}`}
                                    icon={cat.icon}
                                />
                                <h2
                                    className={`w-full  text-center ${hoverCategory === cat.name ? 'text-[#146EBE]' : 'text-[#183153]'} {selectedCategories.includes(cat.name) ? 'text-[#146EBE]' : 'text-[#183153]'}`}
                                >{cat.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                    {/* Sorting */}
                    <div className='w-2/6 h-6 flex items-center justify-end'>
                        <select className='px-6 py-3 border-2 border-[#C3C6D1] rounded-[12px]' id="sortingDropdown">
                            <option value="featured">Featured</option>
                            <option value="alphabetical">Alphabetical</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Icons Showcase */}
            <div className='bg-[#F0F1F3] py-6'>
                <div className='max-w-[1476px] mx-auto px-2'>
                    <div className='flex gap-4 '>
                        {/* Left Panel */}
                        <div className='w-1/6 '>
                            <h2>Left</h2>
                        </div>
                        {/* Right Panel */}
                        <div className='w-5/6 grid grid-cols-3 md:grid-cols-9 gap-4'>
                            {filteredIcons.map(icon => (
                                <div
                                    key={icon.id}
                                    className='px-[12px] py-6 bg-white hover:bg-[#ffd43b] flex flex-col items-center justify-center gap-2 rounded-[10px] cursor-pointer'
                                >
                                    <img className='w-[32px] opacity-[85%]' src={icon.icon} alt="" />
                                    <h2
                                        className='text-[12px] text-center font-light'
                                    >
                                        {icon.name}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
