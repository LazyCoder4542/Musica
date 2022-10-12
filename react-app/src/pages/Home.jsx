import React, { Component } from 'react';

import { ReactComponent as Heart} from "./../assets/icons/Heart-lined.svg";
import { ReactComponent as CardBG} from "./../assets/icons/card-bg.svg";
import  "./Home.css"
class Home extends Component {
    state = {  } 
    render() { 
        return (
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
        );
    }
}
 
export default Home;