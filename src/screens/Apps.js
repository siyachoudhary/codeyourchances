import React, { useEffect } from 'react'
import "./AllPages.css"
import "./Apps.css"

import AOS from "aos"
import "aos/dist/aos.css"

export const Apps = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

  return (

    <div>
        <div className='mainApps'>

            <h1 className='headingAbout'>INTRODUCING THE FREE CYC APPS</h1>
            
        </div>

        <div className='mainInfo'>
          <p className='mainPara'>CYC has developed a portfolio of unique, free applications to help us engage students from all backgrounds and experience levels; including a web app, a mobile AR app, a virtual reality game and a computer game.</p>

          <div className='mobileApp' data-AOS="fade-up">
            <div className='mobileAppAbout'>
              <h1 className='headingOrange appTitle'>THE CYC MOBILE APP</h1>
              <p>The free CYC Augmented Reality mobile app empowers students to learn about the basic concepts of Augmented Reality as well as explore unique Augmented Reality demonstrations within the app for an interactive learning experience using only a mobile phone. This allows CYC to bring hands-on tech education to schools with limited access to computers and show our students how they can apply their unique creativity to tech.</p>
              <p>Our new mobile app helps students connect how the computer science concepts they are learning can be used to create exciting new AR games and tools that can change our world!</p>
            </div>

            <div className='mobileAppImg'>
              <img src = {process.env.PUBLIC_URL + "/images/mobileApp.webp"} alt = "CYC"></img>
            </div>
          </div>

          <div className='mobileApp' data-AOS="fade-up">
            <div className='mobileAppAbout'>
              <h1 className='headingBlue appTitle'>THE CYC WEB APP</h1>
              <p>The CYC web app is a unique free, educational web platform to teach basic coding concepts and allow educators to run computer science lessons using only a web browser. The app features both a teacher platform and a student platform, allowing teachers to ensure all students are viewing the same page, monitor engagement and view students' progress through brief quizzes. This has enabled CYC to reach students all over the world during pandemic-related school closures, including schools without traditional online learning resources.</p>
            </div>

            <div className='mobileAppImg'>
              <img src = {process.env.PUBLIC_URL + "/images/webApp.webp"} alt = "CYC"></img>
            </div>
          </div>

          <div className='computerGame' data-AOS="fade-up">
            <h1 className='headingOrange appTitle'>The CYC COMPUTER GAME</h1>
            <p>The CYC web-based computer game  is a gamified platform where students can learn and practice computer science concepts in a fun, digestible manner. Students progress through various levels and solve coding challenges to earn trophies.</p>
          </div>


          <div className='mobileApp' data-AOS="fade-up">
            <div className='mobileAppAbout'>
              <h1 className='headingBlue appTitle'>THE CYC VIRTUAL REALITY GAME</h1>
              <p>The CYC Virtual Reality game introduces students to exciting VR technology while teaching basic computer science concepts. Students solve in-game puzzles using the same logic applied to writing code.</p>
              <img src = {process.env.PUBLIC_URL + "/images/vr1.webp"} alt = "CYC"></img>
            </div>

            <div className='mobileAppImg2'>
              <img src = {process.env.PUBLIC_URL + "/images/vr2.webp"} alt = "CYC" className='vrImages'></img>
              <img src = {process.env.PUBLIC_URL + "/images/vr3.webp"} alt = "CYC" className='vrImages'></img>
            </div>
          </div>

        </div>
        
    </div>

  )
}