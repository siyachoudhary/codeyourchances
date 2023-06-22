import React, {useEffect} from 'react';
import "./MemberCard.css"
import AOS from "aos";
import { useNavigate } from "react-router-dom";

function MemberCard(props) {
    const navigate = useNavigate();

    useEffect(()=>{
        AOS.init({duration: 1000, easing:"ease-in-out"});
    }, []);

    return (
        <div className='userCard' onClick={()=>navigate("/codeyourchances/teamMember", {
            state:{
                memberName: props.memberName,
                memberDescription: props.description,
                memberImg: props.imgUrl,
                memberEmail: props.email,
                backPath: props.backPath
            },
        })}>
            <img src={process.env.PUBLIC_URL + "/teamImages/" + props.imgUrl}></img>
            <h1>{props.memberName}</h1>
            <p>{props.role}</p>
        </div>
    );
}

export default MemberCard;
