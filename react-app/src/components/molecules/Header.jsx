import React, { Component } from 'react';

import { ReactComponent as LogoIcon} from './../../assets/icons/logo.svg'
import { ReactComponent as SearchIcon} from './../../assets/icons/search.svg'
class Header extends Component {
    state = {  } 
    render() { 
        return (
            <header id="site-header">
                <div className="logo">
                    <LogoIcon />
                </div>
                <div className="search">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                </div>
            </header>
        );
    }
}
 
export default Header;