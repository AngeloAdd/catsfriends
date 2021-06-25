import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <input
            className="input-style-custom br3 pa2 input-reset shadow-2"
            type="search"
            placeholder="Search Cats"
            onChange={searchChange}
        />
    )
}

export default SearchBox;