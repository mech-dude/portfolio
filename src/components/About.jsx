import React from 'react'
import img from "../../src/assets/about-me.jpg"


function About() {
  return (
    <div className="about flex flex-col items-center pb-32 pt-24">
    <h1 className="about-title text-xl font-bold flex text-white justify-center items-center">About Me</h1>
    <div className='flex  min-[412px]:pt-[2%] min-[412px]:pb-[10%] max-[414px]:contents'>
    <span className="about-subtitle sm:w-full sm:my-0 sm:mr-4 sm:ml-20 text-justify text-[1.5rem] leading-7 max-[414px]:text-[30%] max-[414px]:leading-normal  max-[414px]:p0 max-[414px]:m-10">
      <p className='text-base leading-6'>With a dynamic background in Mechanical Engineering and a newfound passion for Front End Development, I bring a unique blend of analytical problem-solving and creative design to the world of web development. 
        My journey began with a Bachelor's degree in Mechanical Engineering from Universidad Autónoma de Occidente, where I honed my skills in precision engineering and systematic problem-solving. 
        This foundation has proven invaluable as I transitioned into the realm of Front End Development.My fascination with coding and web technologies led me to embark on a new path, and I quickly immersed myself in the world of HTML, CSS, JavaScript, and responsive design. 
        I'm continually expanding my skill set to embrace the latest industry trends and best practices. As a Front End Developer, I thrive on crafting user-friendly, visually appealing websites and applications that not only function seamlessly but also deliver exceptional user experiences. 
        My expertise in design principles and attention to detail ensure that every project I undertake is polished and professional.</p>
    </span>
    <div className="about-container sm:w-full pr-10 max-[414px]:p-0 max-[414px]:m-9">
        <img src={img} alt="juan-victoria" className="about-img relative grayscale w-[420px] h-auto object-cover" />
    </div>
    </div>
    </div>
  )
}

export default About
