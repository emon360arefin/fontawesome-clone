import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCircle, faCircleHalfStroke, faIcons, faSackDollar, faXmark } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [icons, setIcons] = useState(null);
    const [hoverCategory, setHoverCategory] = useState(null);
    const [hoverStyle, setHoverStyle] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [tags, setTags] = useState([]);
    const [sortOrder, setSortOrder] = useState('featured'); // Added sorting state
    const [sortedIcons, setSortedIcons] = useState([]);

    const category = [
        { "id": 1, "icon": faIcons, "name": "Classic" },
        { "id": 2, "icon": faSackDollar, "name": "Pro" },
        { "id": 3, "icon": faBolt, "name": "Free" },
    ];

    const style = [
        { "id": 1, "icon": faCircle, "name": "Solid" },
        { "id": 2, "icon": faCircleHalfStroke, "name": "Regular" }
    ]

    useEffect(() => {
        fetch('/data/icons.json')
            .then(res => res.json())
            .then(data => {
                setIcons(data);
                setSortedIcons(data); // Initialize sortedIcons with the default data
            });
    }, []);

    const handleCategoryClick = (categoryName) => {
        if (selectedCategories.includes(categoryName)) {
            setSelectedCategories(selectedCategories.filter(cat => cat !== categoryName));
            setTags(tags.filter(tag => tag !== categoryName));

        } else {
            setSelectedCategories([...selectedCategories, categoryName]);
            setTags([...tags, categoryName])

        }

        handleSortingChange({ target: { value: sortOrder } });
    }


    const toggleStyle = (styleName) => {
        if (selectedStyles.includes(styleName)) {
            setSelectedStyles(selectedStyles.filter(style => style !== styleName));
            setTags(tags.filter(tag => tag !== styleName));
        } else {
            setSelectedStyles([...selectedStyles, styleName]);
            setTags([...tags, styleName])
        }

        handleSortingChange({ target: { value: sortOrder } });
    }

    const handleTags = (tagName) => {
        if (tags.includes(tagName)) {
            if (selectedCategories.includes(tagName)) {
                setSelectedCategories(selectedCategories.filter(cat => cat !== tagName));
            }
            if (selectedStyles.includes(tagName)) {
                setSelectedStyles(selectedStyles.filter(style => style !== tagName));
            }
            setTags(tags.filter(tag => tag !== tagName));


        } else {
            setTags([...tags, tagName])

        }

        handleSortingChange({ target: { value: sortOrder } });
    }

    const handleReset = () => {
        setSortOrder("featured");
        handleSortingChange({ target: { value: sortOrder } });
        setTags([]);
        setSelectedCategories([]);
        setSelectedStyles([])
    }

    const isStyleSelected = (styleName) => selectedStyles.includes(styleName);

    // Filter icons based on selected style
    const filteredIconsByStyle = icons
        ? selectedStyles.length === 0
            ? icons
            : icons.filter(icon => selectedStyles.includes(icon.style))
        : [];

    // Filter icons based on selected categories
    const filteredIcons = useMemo(() => {
        if (!icons) return [];

        let filtered = [...icons];

        if (selectedStyles.length > 0) {
            filtered = filtered.filter(icon => selectedStyles.includes(icon.style));
        }

        if (selectedCategories.length > 0) {
            filtered = filtered.filter(icon => selectedCategories.includes(icon.category));
        }

        return filtered;
    }, [icons, selectedStyles, selectedCategories]);

    useEffect(() => {
        setSortedIcons(filteredIcons)
    }, [filteredIcons])


    const handleSortingChange = (event) => {
        if (event.target.value === "ascending") {
            setSortOrder("ascending");
            const sortedIconsAscending = [...filteredIcons].sort((a, b) => a.name.localeCompare(b.name));
            setSortedIcons(sortedIconsAscending);
        } else {
            setSortOrder("featured");
            setSortedIcons(filteredIcons); // Reset to the original unsorted state
        }
    }

    useEffect(() => {
        // Sort the icons whenever filteredIcons or sortOrder changes
        if (sortOrder === "ascending") {
            const sortedIconsAscending = [...filteredIcons].sort((a, b) => a.name.localeCompare(b.name));
            setSortedIcons(sortedIconsAscending);
        } else {
            setSortedIcons(filteredIcons);
        }
    }, [filteredIcons, sortOrder]);




    return (
        <div className='bg-white py-12 md:py-16'>
            {/* Filter Bar */}
            <div className='max-w-[1476px] mx-auto px-2'>
                <div className='flex flex-col md:flex-row gap-6 bg-white justify-between items-center pb-8'>
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
                                    className={`w-full text-3xl ${hoverCategory === cat.name ? 'text-[#146EBD]' : 'text-[#183153]'} ${selectedCategories.includes(cat.name) ? 'text-[#146EBD]' : 'text-[#183153]'}`}
                                    icon={cat.icon}
                                />
                                <h2
                                    className={`w-full  text-center ${hoverCategory === cat.name ? 'text-[#146EBE]' : 'text-[#183153]'} ${selectedCategories.includes(cat.name) ? 'text-[#146EBE]' : 'text-[#183153]'}`}
                                >{cat.name}
                                </h2>
                            </div>
                        ))}
                    </div>

                    {/* Sorting */}
                    <div className='w-2/6 h-6 flex items-center justify-end'>
                        <select
                            className='px-6 py-3 border-2 border-[#C3C6D1] rounded-[12px]'
                            id="sortingDropdown"
                            onChange={handleSortingChange}
                            value={sortOrder}
                        >
                            <option value="featured">Featured</option>
                            <option value="ascending">Alphabetical</option>
                        </select>
                    </div>
                </div>
            </div>
            {/* Icons Showcase */}
            <div className='bg-[#F0F1F3] py-6'>
                <div className='max-w-[1476px] mx-auto px-2'>
                    <div className='flex flex-col md:flex-row gap-6 '>

                        {/* Left Panel */}
                        <div className='w-full md:w-1/6 '>
                            <h2 className='text-[12px] font-semibold text-[#616d8a]'>STYLE</h2>

                            <div className='flex flex-wrap flex-row md:flex-col gap-4 mt-4'>
                                {style.map(sty => (
                                    <div
                                        onClick={() => toggleStyle(sty.name)} // Toggle the style when clicked
                                        onMouseEnter={() => setHoverStyle(sty.id)}
                                        onMouseLeave={() => setHoverStyle(null)}
                                        key={sty.id}
                                        className={`flex items-center  justify-between gap-4 w-40 md:w-full border border-transparent hover:border-[#62697a] px-4 py-2 rounded-lg cursor-pointer ${selectedStyles.includes(sty.name) ? 'bg-[#146EBE]' : 'text-[#183153]'}`}
                                    >
                                        <div className='flex items-center gap-4'>
                                            {selectedStyles.includes(sty.name) ? (
                                                <div className='w-6'>
                                                    <input

                                                        type="checkbox"
                                                        id={sty.name}
                                                        name="myCheckbox"
                                                        value={sty.name}
                                                        checked={true}
                                                        onChange={() => toggleStyle(sty.name)}
                                                    />
                                                </div>
                                            ) : hoverStyle === sty.id ? (
                                                <div className='w-6'>
                                                    <input
                                                        className='bg-white '
                                                        type="checkbox"
                                                        id={sty.name}
                                                        name="myCheckbox"
                                                        value={sty.name}
                                                        checked={false}
                                                        onChange={() => toggleStyle(sty.name)}
                                                    />
                                                </div>
                                            ) : (
                                                <div className='w-6'>
                                                    <FontAwesomeIcon
                                                        className={`-ml-[1px] text-[#616D8A]`}
                                                        icon={sty.icon}
                                                    />
                                                </div>
                                            )}
                                            <h2 className={`text-[14px] ${isStyleSelected(sty.name) ? 'text-white' : 'text-[#183153]'}`}>{sty.name}</h2>
                                        </div>


                                        <h2 className={`text-[14px] ${isStyleSelected(sty.name) ? 'text-white' : 'text-[#183153]'}`}>
                                            {filteredIconsByStyle && filteredIconsByStyle.filter(icon => icon.style === sty.name).length}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Panel */}
                        <div className='w-full md:w-5/6 '>

                            <div className='flex flex-col md:flex-row  gap-4'>
                                <h2 className='text-[20px] text-start text-[#183153] font-semibold'>{sortedIcons && sortedIcons.length} Icons</h2>

                                <div className='flex items-center gap-4 flex-wrap'>
                                    {
                                        tags.length != 0 && tags.map((tag, index) =>
                                            <h2
                                                onClick={() => handleTags(tag)}
                                                className='cursor-pointer items-center px-4 py-1 rounded-full bg-white hover:text-[#183153] inline'
                                                key={index}
                                            >{tag} <FontAwesomeIcon
                                                    className={`-mb-[1px] ml-[2px] text-[#616D8A] hover:text-red-400 cursor-pointer`}
                                                    icon={faXmark}
                                                /> </h2>)
                                    }
                                    {
                                        tags.length != 0 && <h2
                                            onClick={handleReset}
                                            className='cursor-pointer items-center px-4 py-1 rounded-full border text-[16px] border-[#C3C6D1] hover:border-[#183153] inline hover:text-[#183153] '
                                        >Reset</h2>
                                    }

                                </div>
                            </div>

                            <div className='grid grid-cols-3 md:grid-cols-9 gap-4 mt-6'>
                                {sortedIcons.map(icon => (
                                    <div
                                        key={icon.id}
                                        className='px-[12px] py-6 bg-white hover:bg-[#ffd43b] flex flex-col items-center justify-center gap-2 rounded-[10px] cursor-pointer relative'
                                    >
                                        <img className='w-[32px] opacity-[85%]' src={icon.icon} alt="" />
                                        <h2 className='text-[12px] text-center font-light'>{icon.name}</h2>


                                        {
                                            icon.category === 'Pro' ? <h2 className='absolute -top-2 bg-[#FFD43B] px-3 flex items-center rounded-lg pt-[2px]  text-[12px] font-medium'>PRO</h2> : ''
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
