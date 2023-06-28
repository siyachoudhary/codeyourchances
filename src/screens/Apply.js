import React, {useEffect} from 'react';
import AOS from "aos";
import "./Apply.css"

export const Apply = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

    return (
      <div className="containerApply">
        
        <div className='mainApply'>

            <h1 className='headingAbout'>JOIN THE CYC TEAM!</h1>
            
        </div>

        <div className='mainSection'>
          <div className='applyPosters'>
            <div><img src={process.env.PUBLIC_URL + "/images/apply1.webp"}></img></div>
            <div><img src={process.env.PUBLIC_URL + "/images/apply2.webp"}></img></div>
          </div>
          <br></br>

          <div data-AOS="fade-up">
            <h3 className='blueHeading'>INTERESTED IN APPLYING?</h3>
            <p style={{fontSize: 20}}>Fill out the application form below!</p>

            <br></br>
            <div className='button-53'><a href="https://docs.google.com/forms/d/e/1FAIpQLSdnEp8Hu1wNlYhC_a7YpbnXhV1o_yuy47R_bnJ-f89tX6JphQ/viewform" target='blank' className='scheduleBtnTxt'>APPLY NOW</a></div>
            <p>Please contact <a href="mailto: info@codeyourchances.com" target='blank' style={{color: "black"}}>info@codeyourchances.com</a> with any questions.</p>
          </div>
        </div>

      </div>
    );
  };