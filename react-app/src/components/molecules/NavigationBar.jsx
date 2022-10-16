import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ReactComponent as MenuIcon} from './../../assets/icons/menu 1.svg';
import { ReactComponent as HomeIcon} from './../../assets/icons/Home.svg';
import { ReactComponent as MusicLibraryIcon} from './../../assets/icons/music-library-2.svg';
import { ReactComponent as RadioIcon} from './../../assets/icons/radio.svg';
import { ReactComponent as VideoIcon} from './../../assets/icons/video-horizontal.svg';
import { ReactComponent as ProfileIcon} from './../../assets/icons/frame.svg';
import { ReactComponent as LogoutIcon} from './../../assets/icons/Logout.svg';
class NavigationBar extends Component {
    state = {  } 
    render() { 
        return (
            <div id="navigation-bar">
                <div className="nav-icon">
                    <MenuIcon />
                </div>
                <div className="wrapper">
                    <ul>
                        <NavLink to="/" end>
                            <li>
                                <span>
                                    <HomeIcon />
                                </span>
                                <span>
                                    Home
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to="/collection">
                            <li>
                                <span>
                                    <MusicLibraryIcon />
                                </span>
                                <span>
                                    My collection
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to="/radio">
                            <li>
                                <span>
                                    <RadioIcon />
                                </span>
                                <span>
                                    Radio
                                </span>
                            </li>
                        </NavLink>
                        <NavLink to="/videos">
                            <li>
                                <span>
                                    <VideoIcon />
                                </span>
                                <span>
                                    Music videos
                                </span>
                            </li>
                        </NavLink>
                    </ul>
                    <ul>
                        <NavLink to="/profile">
                            <li>
                                <span>
                                    <ProfileIcon />
                                </span>
                                <span>
                                    Profile
                                </span>
                            </li>
                        </NavLink>
                        <Link to="/" reloadDocument={true}>
                            <li>
                                <span>
                                    <LogoutIcon />
                                </span>
                                <span>
                                    Log out
                                </span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        );
    }
}
 
export default NavigationBar;