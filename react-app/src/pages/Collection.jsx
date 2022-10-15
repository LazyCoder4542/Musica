import React, { Component } from 'react';

import { ReactComponent as PlayIcon} from "./../assets/icons/Vector.svg";
import './Collection.css'
class Collection extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="main">
                    <nav>
                        <div><span>My collection</span></div>
                        <div><span>Likes</span></div>
                    </nav>
                    <div className="wrapper">
                        <div className="cards">
                            <div className="card">
                                <div className="bg">
                                    <img src="/assets/images/image6.png" alt=""/>
                                </div>
                                <div className="music">
                                    <span>Limit</span>
                                    <span className="text-sm">John Dillion</span>
                                </div>
                                <div className="likes">
                                    <span className="text-md">2.3m Likes</span>
                                </div>
                                <div className="play">
                                    <span>
                                        <PlayIcon />
                                    </span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="bg">
                                    <img src="/assets/images/image8.png" alt=""/>
                                </div>
                                <div className="music">
                                    <span>Cancelled</span>
                                    <span className="text-sm">Eminem</span>
                                </div>
                                <div className="likes">
                                    <span className="text-md">2.3m Likes</span>
                                </div>
                                <div className="play">
                                    <span>
                                        <PlayIcon />
                                    </span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="bg">
                                    <img src="/assets/images/image4.png" alt=""/>
                                </div>
                                <div className="music">
                                    <span>Life in a bubble</span>
                                    <span className="text-sm">The van</span>
                                </div>
                                <div className="likes">
                                    <span className="text-md">2.3m Likes</span>
                                </div>
                                <div className="play">
                                    <span>
                                        <PlayIcon />
                                    </span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="bg">
                                    <img src="/assets/images/image11.png" alt=""/>
                                </div>
                                <div className="music">
                                    <span>Seasons in</span>
                                    <span className="text-sm">James</span>
                                </div>
                                <div className="likes">
                                    <span className="text-md">2.3m Likes</span>
                                </div>
                                <div className="play">
                                    <span>
                                        <PlayIcon />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default Collection;