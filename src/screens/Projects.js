import React, { useEffect } from 'react'
import "./AllPages.css"
import "./Projects.css"
import AOS from 'aos'
import "aos/dist/aos.css"
import Carousel from 'react-bootstrap/Carousel';

export const Projects = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

  return (

    <div>
        <div className='mainProjects'>

            <h1 className='headingAbout'>CODE + CREATIVITY</h1>
            
        </div>

        <div className='mainSection'>
          <p>Our fun and interactive workshops focus on the many creative uses of code. Our tailor-made curriculum covers a range of topics including Introduction to Computer Science, Computer Science in Movies, Game Development, Artificial Intelligence, Virtual Reality and Augmented Reality. </p>
          
          <div className='button-53' data-AOS="fade-up"><a href="mailto: info@codeyourchances.com?subject=I would like to know more!" target='blank' className='scheduleBtnTxt'>SCHEDULE A WORKSHOP WITH US TODAY</a></div>
          
          <h1 className='headingOrange'>AS SEEN ON</h1>

          <div className='allVideos'>

            <div data-AOS="fade-up">
              <h1 className='headingBlue'>NBC</h1>
              <video width="100%" height="100%"controls>
                <source src={process.env.PUBLIC_URL+"/videos/nbc.mp4"} type="video/mp4" />
              </video>
            </div>

            <div data-AOS="fade-up">
              <h1 className='headingBlue'>CBS</h1>
              <video width="100%" height="100%" controls>
                <source src={process.env.PUBLIC_URL+"/videos/CBS.mp4"} type="video/mp4" />
              </video>
            </div>

            <div data-AOS="fade-up">
              <h1 className='headingBlue'>FOX</h1>
              <video width="100%" height="100%" controls>
                <source src={process.env.PUBLIC_URL+"/videos/fox.mp4"} type="video/mp4" />
              </video>
            </div>

          </div>

          <h1 className='headingOrange'>FAR-REACHING</h1>
          <p>Code Your Chances has reached girls all over the world, from our hometown of Chicago all the way to Southern India. No matter where you live or what your background is, you can code your chances!</p>

          <div className='projectItem' data-AOS="fade-up">
            <div className='projectDetails'>
              <h1 className='headingBlue'>CHICAGO, IL</h1>
              <p>Code Your Chances works with many schools, after school programs, and summer camps in the Chicagoland area. Some of the many great organizations we have partnered with include the Boys and Girls Clubs of Chicago, TechGirlz, CompileHer, Christopher House and Lester School. </p>
            </div>
            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/images/chicagoWorkshop/chicago1.jpg"}
                    alt="First slide"
                  />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/chicagoWorkshop/chicago2.jpg"}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/chicagoWorkshop/chicago3.jpg"}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/chicagoWorkshop/chicago4.jpg"}
                  alt="Third slide"
                />
              </Carousel.Item>
              </Carousel>
            </div>
          </div>


          <div className='projectItem' data-AOS="fade-up">

          <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/images/ukWorkshop/uk1.jpg"}
                    alt="First slide"
                  />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/ukWorkshop/uk2.jpg"}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/ukWorkshop/uk3.jpg"}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/ukWorkshop/uk4.jpg"}
                  alt="Third slide"
                />
              </Carousel.Item>
              </Carousel>
            </div>

            <div className='projectDetails2 projectDetails'>
              <h1 className='headingBlue'>UNITED KINGOM</h1>
              <p>Code Your Chances recently hosted a workshop at the Northampton's Historic Guildhall in honor of International Women's Day!</p>
            </div>

          </div>

          <div className='projectItem' data-AOS="fade-up">
          <div className='projectDetails'>
              <h1 className='headingBlue'>INDIA</h1>
              <p>Code Your Chances has a dedicated CYC India team to design and teach workshops to our students based in India. Previous partnerships in India include Educate to Empower, Seed Academy, Cornerstone International College, Teach for India, Associate of British Scholars and the British Council.</p>
            </div>

            <div>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL+"/images/indiaWorkshop/india1.jpeg"}
                    alt="First slide"
                  />
                </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/indiaWorkshop/india2.jpeg"}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/indiaWorkshop/india3.jpeg"}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/images/indiaWorkshop/india4.jpeg"}
                  alt="Third slide"
                />
              </Carousel.Item>
              </Carousel>
            </div>
          </div>

        </div>
    </div>

  )
}