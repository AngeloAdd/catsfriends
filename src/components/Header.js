import React from 'react';
import SearcBox from './SearchBox'

const Header = ({onSearchChange}) => {
    return (
        <header className="flex justify-center items-center flex-column shadow-5 pv4 header-style-custom">
            <h1 className="heading-style-custom f1 mb4 mt0">Cats Friends</h1>
            <SearcBox onSearchChange={onSearchChange} />
        </header>
    )
}

export default Header