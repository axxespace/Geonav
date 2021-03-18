import React, {useEffect, useState} from "react";
import './Page1.css';
import video from './video.mp4';


function Page1() {
    const [button, setButton] = useState();

    const func = (e) => {
        setButton(e.target.value);
    }

    const func1 = () => {
        setButton(0);
    }

    return(
        <div className="Container">
            <video className='background' autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video>
            <div className="Container1">
                <div className="logoCont">
                    <img style={button ? {"visibility":"hidden", "opacity":"0"} : null} className="logo"  src='flooop.png' alt="img"/>
                    <div style={button==1 ? {"visibility":"visible", "opacity":"1"} : null} className="pop-button">
                        <h1 className="paragraph">TELEMATICS</h1>
                        <div className="line2"/>
                        <div className="description">
                            Develop mutual trust and respect with flexible Electronics Manufacturing Services & Original
                            Design Manufacturer partner on demanding market.
                        </div>
                    </div>
                    <div style={button==2 ? {"visibility":"visible", "opacity":"1"} : null} className="pop-button">
                        <h1 className="paragraph">NETWORKS</h1>
                        <div className="line2"/>
                        <div className="description">
                            Develop mutual trust and respect with flexible Electronics Manufacturing Services & Original
                            Design Manufacturer partner on demanding market.
                        </div>
                    </div>
                    <div style={button==3 ? {"visibility":"visible", "opacity":"1"} : null} className="pop-button">
                        <h1 className="paragraph">SMART AUTONOMOUS SOLUTIONS</h1>
                        <div className="line2"/>
                        <div className="description">
                            Develop mutual trust and respect with flexible Electronics Manufacturing Services & Original
                            Design Manufacturer partner on demanding market.
                        </div>
                    </div>
                    <div style={button==4 ? {"visibility":"visible", "opacity":"1"} : null} className="pop-button">
                        <h1 className="paragraph">TELEMEDIC</h1>
                        <div className="line2"/>
                        <div className="description">
                            Develop mutual trust and respect with flexible Electronics Manufacturing Services & Original
                            Design Manufacturer partner on demanding market.
                        </div>
                    </div>
                    <div style={button==5 ? {"visibility":"visible", "opacity":"1"} : null} className="pop-button">
                        <h1 className="paragraph">ELECTRONICS MANUFACTURING SERVICES</h1>
                        <div className="line2"/>
                        <div className="description">
                            Develop mutual trust and respect with flexible Electronics Manufacturing Services & Original
                            Design Manufacturer partner on demanding market.
                        </div>
                    </div>
                </div>
                <div className="cont">
                    <button value="1"  onMouseEnter={func} onMouseLeave={func1}><a className="button"  href='/'>TELEMATICS</a></button>
                    <div className="line1"/>
                    <button value="2"  onMouseEnter={func} onMouseLeave={func1}><a className="button" href='/'>NETWORKS</a></button>
                    <div className="line1"/>
                    <button value="3"  onMouseEnter={func} onMouseLeave={func1}><a className="button" href='/'>SMART AUTONOMOUS SOLUTIONS</a></button>
                    <div className="line1"/>
                    <button value="4"  onMouseEnter={func} onMouseLeave={func1}><a className="button" href='/'>TELEMEDIC</a></button>
                    <div className="line1"/>
                    <button value="5"  onMouseEnter={func} onMouseLeave={func1}><a className="button" href='/'>ELECTONICS MANUFACTURING SERVICES</a></button>
                </div>
            </div>
        </div>
    );
}

export default Page1;
