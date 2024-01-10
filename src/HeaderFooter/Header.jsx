import React from 'react';

import Logo1 from '../assets/logo.svg';
import Logo2 from '../assets/logo-2.svg';

function Header() {
    return ( 
        <header id="headerArea">
            <div className="headerContainer">
                <a href="./" className="navBrand">
                    <img src={Logo1} className='logo-1' alt="Logo" />
                    <img src={Logo2} className='logo-2' alt="Logo" />
                </a>
                <a href="#" className='LaunchdApp'>Launch dApp</a>
            </div>
        </header>
     );
}

export default Header;