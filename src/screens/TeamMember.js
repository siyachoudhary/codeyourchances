import React, {useEffect} from 'react';
import AOS from "aos";
import "./Team.css"
import { useNavigate, useLocation } from "react-router-dom";

export const TeamMember = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

    console.log(location.state.memberImg)
  
    return (
      <div className="containerMember">
        <div className='memberDiv'>
            <img src={process.env.PUBLIC_URL + "/teamImages/" + location.state.memberImg} className='memberImg'></img>

            <div className='memberDescription'>
                <h5 className='blueHeading2'> {location.state.memberName} </h5>
                <p> {location.state.memberDescription} </p> 
                <div><a href={"mailto:"+location.state.memberEmail} target='blank' className='memberEmail'>{location.state.memberEmail}</a></div>
            </div>
        </div>
        
        <div className='button-53'><a href={"/codeyourchances/"+location.state.backPath} className='scheduleBtnTxt'>BACK TO TEAM</a></div>

      </div>
    );
  };