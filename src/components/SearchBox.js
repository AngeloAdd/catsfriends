import React from 'react'

const SearchBox = ({onSearchChange}) => {
    return (
        <input
            className="input-style-custom br3 pa2 input-reset shadow-2"
            type="search"
            placeholder="Search Cats"
            onChange={onSearchChange}
        />
    )
}

export default SearchBox