import React from 'react'
import { useState } from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'

function Header({OpenSidebar}) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('Searching for:', query);
    };

    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" onClick={OpenSidebar} />
            </div>
            <div className="header-left">
                <BsSearch className="icon two" />
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="button" onClick={handleSearch}>
                        Search
                    </button>
                    </div>

            </div>
            <div className="header-right">
                <BsFillBellFill className="icon one" style={{marginRight:"25px"}} />
                <BsFillEnvelopeFill className="icon one" style={{marginLeft:"13px"}} />
                <BsPersonCircle className="icon one" style={{marginLeft:"30px"}} />
            </div>
        </header>
    )
}

export default Header