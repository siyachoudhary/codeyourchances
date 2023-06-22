import React, { useEffect, useRef,  useState, useMemo } from 'react'
import "./AllPages.css"
import "./Team.css"
import MemberCard from "../components/MemberCard.js"
import AOS from 'aos'
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom";

export const Team = () => {
  useEffect(()=>{
    AOS.init({duration: 500, easing:"ease-in-out"});
  }, []);

  const ref = useRef(null);

  const navigate = useNavigate();

  const isInViewport = useIsInViewport(ref);

  useEffect(() => {
    // if (document.activeElement === ref.current) {
    //   console.log('element has focus');
    // } else {
    //   console.log('element does NOT have focus');
    // }
    if(isInViewport){
      console.log("VISIBLE")
    }
  });

  return (
    <div>
        <div className='mainTeam' id='mainTeam'>
            <h1 className='headingAbout'>MEET THE TEAM</h1>
        </div>

        {isInViewport?
          <div className='button-53 skipToYLB' onClick={()=>navigate("/codeyourchances/team#mainTeam")}><a href={"/codeyourchances/team#mainTeam"} className='scheduleBtnTxt'>CYC TEAM</a></div>
          :
          <div className='button-53 skipToYLB' onClick={()=>navigate("/codeyourchances/team#youthBoard")}><a href={"/codeyourchances/team#youthBoard"} className='scheduleBtnTxt'>YOUTH LEADERSHIP BOARD</a></div>
        }

        <div className='CYCMainBoard'>
          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="DOMINIQUE ROBERTS" imgUrl="Dominique.webp" backPath="team" email="dominique@codeyourchances.com" description="
            Dominique is a graduate of Harvard Law School, New York University Tisch School of the Arts and holds a masters in history from Oxford University where she completed her dissertation on the role of women in the creation of the film industry. Dominique is a lawyer admitted to practice in England, Wales and California, and previously worked in the Corporate and International Arbitration teams of Sidley Austin’s London and Hong Kong offices. She recently spent time at the National Committee on U.S. - China Relations in NYC as a Harvard East Asian Legal Studies visiting scholar.
            Dominique is also the co-founder of Paper Starship Studios. Her film work has been featured in Women’s Way magazine and screened at festivals around the world. Dominique is the creator of the historical podcast Wonder Women, which aims to address the gender imbalance in traditional historiography by telling the stories of inspirational and unknown women in history."
            ></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="GABRIELLE ROBERTS" imgUrl="Ella.webp" backPath="team" email="ella@codeyourchances.com" description="
            Gabrielle studied Film & Television Production and Computer Science at the University of Southern California. She also recently received a master's in Global Affairs from Tsinghua University as a Schwarzman Scholar where she conducted thesis research on the development of the Chinese visual effects industry and China-U.S. co-productions. She is one of very few women working in virtual production and is using her advanced technical and creative skillset to revolutionize the film industry. She studied machine learning through Oxford University and presented her published Machine Learning research project at MIT’s 2019 Institute of Electrical and Electronics Engineers (IEEE) conference. She has worked with Oscar-winning filmmakers, helped evolve work in virtual humans at the LA startup Brud, screened her films globally, and currently works for the Emmy and Academy award-winning international VFX company Pixomondo.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="PETER ZHONG" imgUrl="Peter.webp" backPath="team" email="peter@codeyourchances.com " description="
            Technology and Entrepreneurship have been Peter's long lasting passion. As an aspiring Computer Scientist from Australia, he is interested in leveraging his technology skill sets to impact the greater community positively, be it through imparting knowledge or creating meaningful products. In industry, he has worked on his own startups, providing him with experience in user-centred software design; in school, he worked as a TA responsible for supporting students who have no or virtually no experience in coding making their first foray to the world of programming; in academia, he worked as a research assistant focusing on how to use CS concepts to interpret data in an interdisciplinary context. Currently, he is pursuing a Bachelor of Science in Engineering (Computer Science & Industrial Engineering) at Northwestern University.
            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="ANDREW SPATAFORA" imgUrl="andrew.webp" backPath="team" email="andrew@codeyourchances.com" description="
            Andrew earned an MSc from Imperial College London where he completed his dissertation on the unrealized potential of AI and Virtual Personal Assistants in Marketing. While at Imperial, he won the Marketing Plan Competition by developing and pitching LEV: a luxury bracelet with design functions that both empower and protect women. Andrew specializes in the development of multi-channel marketing campaigns and recently worked as an external project consultant at Arla UK. In 2019, Andrew ran the Chicago Marathon and also served as a fundraiser and consultant for the Chicago Women's Health Center whose aim is to provide health care and services to women and trans individuals in Chicago. Andrew works at Facebook and hopes that CYC is the catalyst for many young girls' careers in technology and beyond."
            ></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="CHELSEA CELISTAN" imgUrl="chelsea.webp" backPath="team" email="chelsea@codeyourchances.com" description="
            Chelsea earned an MBA from Harvard Business School, where she was Co-President of Women in Investing as well as a Forté Fellow and Toigo Fellow, representing organizations that promote diversity in business. Passionate about improving educational and career outcomes for women, Chelsea was on the Board of both Smart Woman Securities and Circle of Women at Harvard College. In those capacities, she spearheaded and executed a project to fund an all-girls boarding school in Malawi and created programming to introduce undergraduate women to careers in finance. Chelsea is a private equity investor and graduated cum laude from Harvard College.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="NIMISHA SARA PHILIP" imgUrl="nimisha.webp" backPath="team" email="" description="
             Nimisha adorns various hats as an impact investment lawyer, international feature writer at the UN and Indulge (New Indian Express), Founder of a creative festival – The Spoken Wave and Audacious (a women empowerment venture), and plays a pivotal role on the advisory board of various NGOs with a special interest in gender lens investment, women and child rights. She is currently vice president, legal and strategy at an Impact Investment advisory firm and has previously worked in India’s leading law firm, Cyril and Shardul Amarchand Mangaldas. She holds a law degree from The London School of Economics and SOAS, University of London and a Literature degree from St. Stephens, Delhi University. She has been featured in various newspapers, magazines and online publications for her diverse ventures in law, literature, arts, leadership and social impact.
            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="MADHAVI Ramakrishnan" imgUrl="madhavi.webp" backPath="team" email="madhavi@codeyourchances.com" description="
            Madhavi graduated from the University of Illinois in Urbana-Champaign with a degree in Accounting and is a CPA. Madhavi currently works in Chicago as a Portfolio Analyst at Antares Capital. She has been involved with various nonprofits and volunteer work, such as after school mentorship, teaching basic financial literacy, and fundraising for children’s hospitals. She is a classically trained dancer in Bharatanatyam, an Indian dance form, and is passionate about South Indian culture and history."
            ></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="molly liu" imgUrl="molly.webp" backPath="team" email="" description="
            Molly is a master’s student in Data Science at Harvard University and earned a BA in Statistics and German from Northwestern University. Fascinated by the intersection of innovation and data, she co-founded a fintech startup, backed by Village Global, building income stabilization services for rideshare workers. She has worked on data science projects with companies spanning various industries: visual intelligence products at an early-stage mobility startup in Berlin, alarm prediction for Schneider Electric, and pest management for Wadhwani AI. She was awarded the DAAD fellowship in 2020 to conduct research on the optimization of solar energy distribution. Molly will be joining Temasek as an investment associate next summer, covering the technology and consumer sector and working closely with the investment data science team.            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Harry gao" imgUrl="harry.webp" backPath="team" email="" description="
            Harry is currently studying Computer Science and Neuroscience at Washington University in St. Louis. There, he works towards his goal of becoming a computer science researcher, using computer science to bring about positive change.

            So far, he's worked as a teaching assistant and a Student Technology Coordinator, where he's gained skills in working and communicating with others, as well as technical skills in programming and working with technology. Currently, he is working as a student researcher, implementing a project and writing a paper on a method of using machine learning that can advance the field of medical imaging.            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Alberta Yoo" imgUrl="alberta.webp" backPath="team" email="" description="
            Alberta is currently pursuing a Computer Science degree at McCormick school of Engineering at Northwestern University. She has taken great interest in positively reflecting the pervasiveness of technology. Alberta participated at Serif Project, which created a class scheduler used by over 7,000 Northwestern students, and joined a research sponsored by NSF developing mobile devices to help children with disabilities. This summer, she mentored students from different states to compose music by using the Python programming language, a project called, 'TunePad.' She has also taught NU students a computer programming language class as a peer-mentor (TA).

            Alebrta has played violin at Northwestern Philharmonia and other youth orchestras. She likes to play mobile games and loves hot cheetos. Alberta also works as an Executive Producer & DJ at K-Sound Radio show at WNUR 89.3 FM, and gets passionately involved with environment & youth economic empowerment campaigns.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Chetan Popli" imgUrl="chetan.webp" backPath="team" email="" description="
            Chetan is currently pursuing a Bachelor’s degree in electronics and telecommunications, with honours in artificial intelligence and machine learning certified by IBM) at Mukesh Patel School of Technology Management and Engineering at NMIMS University, Mumbai. He has been a proactive member of various college committees and an integral part of the organizing committees for national events like Social Conclave 2019 and the first edition of India Automation Games 2020. Apart from his interest in coding, Chetan has worked as a DJ across a number of clubs in Mumbai and he thoroughly enjoys exploring underrated genres like techno, dubstep and lo-fi.            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Ashvika Venkatesan" imgUrl="ashvika.webp" backPath="team" email="" description="
            An aspiring software developer, Ashvika is currently pursuing a bachelor’s degree in Computer Science and Engineering at Saveetha School of Engineering, Chennai. Always eager to meet new people and explore any opportunities that come her way, she lives by the phrase ‘There is no failure except in no longer trying’. She believes learning is a continuous process and is always open to learning. She loves working on aptitude problems, going on treks, writing and dogs. Latest addition to her learning mission: Learning French!
            "></MemberCard></div>
          </div>

          <div className='row'>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Afreen Akthar" imgUrl="afreen.webp" email="" backPath="team" description="
            Afreen is a web application developer with a bachelor's degree in Computer Science from Madras University in Chennai. As a coding instructor, Afreen is passionate about building a strong community for women in tech. She loves programming, designing, travelling and is fascinated by technological trends. As a National Scouter in India, she has been involved with several nonprofits and works to spread awareness for sustainable development. When not behind the computer, Afreen also enjoys trekking, camping and rappelling. She believes that tech is the way to go and every girl should have a chance at it!
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Braden Kobeski" imgUrl="braden.webp" email="" backPath="team" description="
            Besides a good whiff of a Yankee Candle, there's nothing Braden enjoys more than learning new skills! After graduating with a degree in Strategic Communications from the University of Missouri, Braden continues to use his free time to take online courses to enhance his knowledge of Motion Graphics, Data Analysis, Social Media Strategy, Online Marketing, and surely many more topics to come.
            "></MemberCard></div>
            <div className='column' data-AOS="fade-up"><MemberCard memberName="Parmis Mokhari-Dizaji" imgUrl="parmis.webp" backPath="team" email="" description="
            Parmis is a student at Phillips Exeter Academy. She is passionate about innovative design and advocacy as means to empower and help vulnerable individuals. This passion has driven her to be actively involved in Model UN and Debate, and spending her free time being a Maker. She has also been involved with various volunteer work and fundraising efforts, most of which have been focused on education and creativity.            "></MemberCard></div>
          </div>
        </div>

      <div id='youthBoard'>
        <div className='mainTeam2'>
            <h1 className='headingAbout'>MEET THE YOUTH LEADERSHIP BOARD</h1>
        </div>

        <div className='CYCYouthBoard' ref={ref}>
            <p className='aboutYLB'>The CYC Youth Leadership Board is an international team of young leaders in STEM, selected quarterly through a competitive application process. Our youth leaders work alongside our Board of Directors to create and implement new projects while gaining experience working in a nonprofit organization.</p>
        
            <div className='row'>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Parmis Mokhari-Dizaji" role="YLB President" imgUrl="parmis.webp" email=""  backPath="team#youthBoard" description="
              Parmis is a student at Phillips Exeter Academy. She is passionate about innovative design and advocacy as means to empower and help vulnerable individuals. This passion has driven her to be actively involved in Model UN and Debate, and spending her free time being a Maker. She has also been involved with various volunteer work and fundraising efforts, most of which have been focused on education and creativity.            
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Nicole Luo" imgUrl="nicole.webp" role="community outreach" email="" backPath="team#youthBoard" description="
              Nicole is a rising sophomore at Centennial High School in Maryland and is passionate about providing support and education for young girls in computer science. As an active member of her school’s student council, class board, and debate team, she loves to engage with new people and serve as a leader in her community. Recently, Nicole qualified for the national Tournament of Champions debate tournament, which is considered one of the most prestigious and competitive debate tournaments in the United States. She has also worked with several local non-profit organizations centered around spreading awareness, promoting education, and running fundraisers.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Ria Patel" imgUrl="ria.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
              Ria is a rising junior at James B Conant High School. She has always been interested in the field of math, so tried taking an AP Computer Science class in her sophomore year of high school. The sheer imbalance of the male to female ratio in the class piqued her curiosity about the dynamics of the field, and since then, she has developed a passion for bridging the gender gap in computer science. She is also an editor for her school newspaper, member of the student council executive board, and an involved member of female empowerment and service organizations. Through her involvement in several nonprofit organizations, fundraisers, and volunteer work, Ria hopes to make a lasting impact on her community. Outside of school, Ria enjoys reading, cooking, and spending time with friends and family.              "></MemberCard></div>
          </div>

          <div className='row'>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Tamara Donbraye" role="Youth Leader" imgUrl="tamara.webp" email=""  backPath="team#youthBoard" description="
Tamara is a Year 13 student at Maria Fidelis Secondary School in the UK, where she discovered her passion for computer science. She has developed this passion by completing work experiences and increasing her proficiency in various coding languages. Tamara tutors younger students at her school in Mathematics and is an active member of the debating team. Tamara enjoys drawing, cooking, and socializing in her spare time.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Nikita Agrawal" imgUrl="nikita.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
Nikita is a sophomore at Whitney Young Magnet High School in Chicago and is interested in STEM education. Nikita is a member of her school's Math Team and Science Olympiad Team and has participated in computer programming Hackathon events and received notable recognition. She is passionate about tutoring elementary school students from under-represented communities. She is an avid martial arts practitioner, having received both national and regional level awards. Nikita enjoys water activities and is a certified Scuba diver. She spends her free time solving 1000+ piece jigsaw puzzles, listening to music, and biking.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Tracy Wobil" imgUrl="tracy.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
Tracy is an aspiring Software Engineer. She aims to develop technology that can help improve the lives of others. She is currently, studying Mathematics, Computer Science, Physics and Further Mathematics at A-levels in the UK. She hopes to combine creativity and her love for 3D animation with Computer Science. As a member of her town’s Youth Forum, Tracy works to raise awareness about issues the youth may face and provide solutions. Her passion for equality has also driven her to volunteer in her community.
              "></MemberCard></div>
          </div>

          <div className='row'>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Zeel Patel" role="Youth Leader" imgUrl="zeel.webp" email=""  backPath="team#youthBoard" description="
Zeel is a Junior at James B. Conant High School. She has a very strong passion for computer science and females in engineering and strives to one day help close the gender gap in the field of Computer Science and Engineering. She has always had an interest in coding and math and has taken AP Computer Science courses since her freshman year. She is a board member/leader of her school's Service Club, Cultural Awareness Club and Law Club and uses these platforms to spread awareness about service, diversity and history throughout her school and community. She is a part of her school's CompSciKids club where she is able to teach the subject she loves most to a wide variety of age groups. In her free time, Zeel loves to cook, draw, dance and volunteer around her community.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Kathleen Shea" imgUrl="kathleen.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
Kathleen is a sophomore at Schaumburg High School. She has been interested in computer science since participating in her elementary school’s Hour of Code program and has gone on to take AP computer science courses in high school. With her passion about closing the gender gap in computer science, she has joined her school’s Girls Who Code club. In her free time, she enjoys being a member of Schaumburg Youth Choir, tutoring kids at Eye Level Learning Center, and participating in her school’s badminton team.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Siya Choudhary" imgUrl="siya.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
Siya is a junior at James B. Conant High School where she focuses on STEM fields, especially computer science. For the past three years, she has been developing an interest in computer science and artificial intelligence and wants to pursue these areas in her future. She has been a mentor in Comp Sci Kids since her freshman year and holds a leadership role where she helps students foster a love for computer science by educating and participating in outreach with the local elementary and middle schools. Siya also serves as the social media manager to promote awareness for the club. Recently, she has been exploring machine learning and AI to research preemptive diagnosis of cancerous skin cells by using computer vision and neural networks to classify and analyze skin lesions. Aside from computer science, she loves tennis, the arts and graphic design, for which she has won many awards. Her goal is to utilize her creativity and skills to spread equality and happiness throughout the world one step at a time. In her free time she also enjoys diving into a tub of ice cream as she binges sci-fi movies and shows!
              "></MemberCard></div>
          </div>

          <div className='row'>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Jana Yahya" role="Youth Leader" imgUrl="jana.webp" email=""  backPath="team#youthBoard" description="
Jana is currently an aspiring senior in high school. When not at school, Jana loves learning all kinds of new things ranging from foreign languages to random skills like how to sew, or how plant propagation works.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Athena Rhee" imgUrl="athena.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
Athena is a rising sophomore at Phillips Andover Academy. Passionate about making a difference in people's wellness and serving others, she joined the Health Occupations Students of America organization during her freshman year. Through her own research, she realized that technology has so much to offer to the field of healthcare, which motivated her to dive into biomedical engineering. To pursue her passion for biomedical engineering, she started to become actively involved in computer science, coding and programming during her leisure time, and she wishes to make computer science accessible to all people, regardless of gender.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Arya Jha" imgUrl="arya.webp" role="Youth Leader" email="" backPath="team#youthBoard" description="
Arya is a junior at William Fremd High School in the Chicagoland area. She loves to code and learn about additional topics such as the internet and cybersecurity. She has taken AP Computer Science courses and is currently learning how to develop apps. Along with learning about the different fields in computer science and coding, she is also an active leader and example of a woman in tech at TechGirlz. Through this she empowers young girls to learn computer science and introduces them to the many different options available in STEM. She learned firsthand about the wide gender gap in STEM fields in her computer science courses and is now a lot more involved in empowering girls to join STEM fields. She hopes to inspire young girls to take on challenges in the computer science world. Aside from doing computer science, Arya enjoys dancing, baking, and playing badminton.
              "></MemberCard></div>
          </div>

          <div className='row'>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Tiffany Xavier" role="Youth Leader" imgUrl="tiffany.webp" email=""  backPath="team#youthBoard" description="
Jana is currently an aspiring senior in high school. When not at school, Jana loves learning all kinds of new things ranging from foreign languages to random skills like how to sew, or how plant propagation works.
              "></MemberCard></div>
              <div className='column' data-AOS="fade-up"><MemberCard memberName="Aadhira Satheesh" imgUrl="aadhira.webp" role="Student Ambassador" email="" backPath="team#youthBoard" description="
Athena is a rising sophomore at Phillips Andover Academy. Passionate about making a difference in people's wellness and serving others, she joined the Health Occupations Students of America organization during her freshman year. Through her own research, she realized that technology has so much to offer to the field of healthcare, which motivated her to dive into biomedical engineering. To pursue her passion for biomedical engineering, she started to become actively involved in computer science, coding and programming during her leisure time, and she wishes to make computer science accessible to all people, regardless of gender.
              "></MemberCard></div>
              
          </div>

        </div>
        </div>
    </div>

  )
}

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}