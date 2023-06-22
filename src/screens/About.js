import React, { useEffect } from 'react'
import "./AllPages.css"
import "./About.css"
import YoutubeEmbed from "../components/YoutubeEmbed.js";
import AOS from "aos"
import "aos/dist/aos.css"

export const About = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

  return (

    <div className=''>
      <div className='cycVideo'>
            <video width="100%" height="100%" autoPlay="true" controls>
                <source src={process.env.PUBLIC_URL+"/videos/workshopVideo.mp4"} type="video/mp4" />
            </video>
        </div>
      {/* <div className='mainAbout'>
        <h2 className='headingAbout'>INSPIRING A NEW GENERATION OF LEADERS</h2>
      </div> */}
        <h2 className='headingBlue topAboutHeading'>INSPIRING A NEW GENERATION OF LEADERS</h2>
        <YoutubeEmbed embedId="PWjksZ0JkBM"/>
        <div className='aboutInfo'>
          <div className='basicInfoAbout' data-AOS="fade-up">
            <h3 className='headingOrange'>WHAT IS CYC?</h3>
            <p className='basicPara'>
            Code Your Chances (CYC) is a nonprofit organization that introduces young girls to the creative uses of computer science and how they can apply their unique creativity to tech. Our mission is to inspire a new generation of diverse leaders in computer science by focusing on how computer science is used in creative industries, such as film production, game development, AR, VR, and creative uses of AI. CYC works with communities that have limited access to tech education.</p>
          </div>
          <img data-AOS="fade-up" src={process.env.PUBLIC_URL + "/images/aboutImg.webp"} alt="image" className='aboutImg'></img>
        </div>
        <h2 className='headingBlue'>WHY IS OUR MISSION SO IMPORTANT?</h2>
        {/* data graphics */}
        <p className='aboutInfoSmall' data-AOS="fade-up">So much of the world around us is run by technology. If women are not contributing to these systems and products, bias becomes imbedded in the algorithms, data sets and designs that influence our future.</p>
        <div className='aboutInfo NYTimes' data-AOS="fade-up">
          <p className='NYTimesData'>"Many artificial intelligence technologies, like face-recognition services and conversational systems, are designed to learn from large amounts of data, such as thousands of photos of faces. The biases of researchers can easily be introduced into the technology, reinforcing the importance of diversity among the people working on it."</p>
          <p className='NYTimesSign'>- Cade Metz, The New York Times</p>
        </div>

        <h2 className='headingOrange'>WHAT CYC IS DOING TO HELP</h2>
        <div className='aboutInfo'>
          <p className='cycHelpText' data-AOS="fade-up">CYC generates enthusiasm for computer science through interactive workshops that focus on the many creative uses of code. Girls learn firsthand how computer science is used in movies, video games, virtual reality, augmented reality and more. Our hands-on projects aim to build confidence and show our students that anyone can learn to code!</p>
          <div className='workshopStats' data-AOS="fade-up">
            On average, girls show a 72.3% improvement on our knowledge survey after a workshop!
          </div>
        </div>

        <div className='button-53' data-AOS="fade-up"><a href="mailto: info@codeyourchances.com?subject=I would like to know more!" target='blank' className='scheduleBtnTxt'>SCHEDULE A WORKSHOP WITH US TODAY</a></div>
    </div>

  )
}