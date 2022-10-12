import React, { Component } from 'react';

import { ReactComponent as Heart} from "./../assets/icons/Heart-lined.svg";
import { ReactComponent as CardBG} from "./../assets/icons/card-bg.svg";

import  "./Home.css"
class Home extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <section id="intro">
                    <div className="bg">
                        <CardBG />
                    </div>
                    <span className="text-sm">Curated playlist</span>
                    <header>
                        <h1>R & B Hits</h1>
                        <p className="text-md">All mine, Lie again, Petty call me everyday,<br />Out of time, No love, Bad habit,<br />and so much more</p>
                    </header>
                    <div className="info">
                        <div className="profile-pics">
                            <span>
                                <img src="/assets/images/profile1.png" alt="" />
                            </span>
                            <span>
                                <img src="/assets/images/profile2.png" alt="" />
                            </span>
                            <span>
                                <img src="/assets/images/profile3.png" alt="" />
                            </span>
                            <span>
                                <img src="/assets/images/profile4.png" alt="" />
                            </span>
                            <span>
                                <img src="/assets/images/profile5.png" alt="" />
                            </span>
                        </div>
                        <div className="likes">
                            <span>
                                <Heart />
                            </span>
                            <span>33k Likes</span>
                        </div>
                    </div>
                </section>
                <section id="top-charts">
                    <header>
                        <h3>Top charts</h3>
                    </header>
                    <div className="box">
                        <div className="list">
                            <div className="card">
                                <div className="img">
                                    <img src="/assets/images/image1.png" alt="" />
                                </div>
                                <div className="info">
                                    <span>Golden age of 80's</span>
                                    <span className="text-sm">Sean swadder</span>
                                    <span className="text-md">2:34:45</span>
                                </div>
                                <div className="add">
                                    <span>
                                        <Heart />
                                    </span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src="/assets/images/image2.png" alt="" />
                                </div>
                                <div className="info">
                                    <span>Reggae "n" blues</span>
                                    <span className="text-sm">Dj YK mule</span>
                                    <span className="text-md">1:02:42</span>
                                </div>
                                <div className="add">
                                    <span>
                                        <Heart />
                                    </span>
                                </div>
                            </div>
                            <div className="card">
                                <div className="img">
                                    <img src="/assets/images/image3.png" alt="" />
                                </div>
                                <div className="info">
                                    <span>Tomorrow's tunes</span>
                                    <span className="text-sm">Obi Datti</span>
                                    <span className="text-md">2:01:25</span>
                                </div>
                                <div className="add">
                                    <span>
                                        <Heart />
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
 
export default Home;