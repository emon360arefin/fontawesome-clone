import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {

    const handleSearch = (e) => {
        e.preventDefault()

        console.log(e.target.value);

    }

    return (
        <form
            onChange={(e) => handleSearch(e)}
            className='flex items-center justify-center'>
            <div className='border-2 border-[#183153] w-[650px] px-8 py-4 rounded-full flex items-center gap-4' >

                <FontAwesomeIcon className='text-lg text-[#183153]' icon={faMagnifyingGlass} />

                <input
                    type="text"
                    className='border-0  focus:outline-none'
                    placeholder='Search Icons' />
            </div>

        </form>
    );
};

export default Search;