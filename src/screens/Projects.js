import React, { useEffect } from 'react'
import "./AllPages.css"
import "./Projects.css"
import AOS from 'aos'
import "aos/dist/aos.css"

const chicago = ["/images/chicagoWorkshop/chicago1.jpg", "/images/chicagoWorkshop/chicago2.jpg", "/images/chicagoWorkshop/chicago3.jpg", "/images/chicagoWorkshop/chicago4.JPG"];
const uk = ["/images/ukWorkshop/uk1.JPG", "/images/ukWorkshop/uk2.JPG", "/images/ukWorkshop/uk3.JPG", "/images/ukWorkshop/uk4.JPG"];
const india = ["/images/indiaWorkshop/india1.jpeg", "/images/indiaWorkshop/india2.jpeg", "/images/indiaWorkshop/india3.jpeg", "/images/indiaWorkshop/india4.jpeg"];

const delay = 2500;

export const Projects = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === chicago.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

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

            <div>
              <h1 className='headingBlue'>NBC</h1>
              <video width="100%" height="100%"controls>
                <source src={process.env.PUBLIC_URL+"/videos/NBC.mp4"} type="video/mp4" />
              </video>
            </div>

            <div>
              <h1 className='headingBlue'>CBS</h1>
              <video width="100%" height="100%" controls>
                <source src={process.env.PUBLIC_URL+"/videos/CBS.mp4"} type="video/mp4" />
              </video>
            </div>

            <div>
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
              <p>Code Your Chances works with many schools and after school programs in the Chicagoland area. Some of the many great organizations we have partnered with include the Boys and Girls Clubs of Chicago, TechGirlz, CompileHer, Christopher House and Lester School. </p>
            </div>
          
            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {chicago.map((backgroundColor, index) => (
                  <div
                    className="slide"
                    key={index}
                    style={{ backgroundColor }}
                  ><img src={process.env.PUBLIC_URL + chicago[index]}></img></div>
                ))}
              </div>

              <div className="slideshowDots">
                {chicago.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>


          <div className='projectItem' data-AOS="fade-up">

            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {uk.map((backgroundColor, index) => (
                  <div
                    className="slide"
                    key={index}
                    style={{ backgroundColor }}
                  ><img src={process.env.PUBLIC_URL + uk[index]}></img></div>
                ))}
              </div>

              <div className="slideshowDots">
                {uk.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
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

            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {india.map((backgroundColor, index) => (
                  <div
                    className="slide"
                    key={index}
                    style={{ backgroundColor }}
                  ><img src={process.env.PUBLIC_URL + india[index]}></img></div>
                ))}
              </div>

              <div className="slideshowDots">
                {india.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div>
            </div>


          </div>

        </div>
    </div>

  )
}