import React from 'react';
import arcade from '../images/icons/arcade.png'
import StructureTwo from './Containts/StructureTwo'
const SixthSection = () => {
  return (
    <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={arcade}/>
                                    </div>
                                </div>
                                <div className="description-wraper white">
                                    Agent 8 is a small hero on a big mission.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Play now<sup>2</sup></a></li>
                                        <li><a href="">Learn about Apple Arcade</a></li>
                                    </ul> 
                                </div>						
                            </div>
                        </div>
                        <StructureTwo wrapperClass="right-side-wrapper"
                            innerClassName="right-side-container" 
                            title="Apple Card Monthly Installments"
                            description="The simplicity of Apple In a credit card."link="Apply now"><a href="">Learn more</a></StructureTwo>
                    </div>
                </div> 
            </section>
        );
    }


export default SixthSection;
