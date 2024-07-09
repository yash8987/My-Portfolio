import React from 'react';
import profileImage from "../Images/IMG-20240401-WA0118.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-[120vh] w-full bg-gradient-to-b from-black via-black to-gray-800 md:h-screen'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl md:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='py-4 max-w-md text-green-500'>
            I am a Fresher and looking for the great opportunity.
            Currently, I love to work on web application using technologies
            like React JS, Tailwind.css, Bootstrap, Node JS, Express JS, MongoDB and SQL.
          </p>
          <div>
            <Link to={"portfolio"} smooth duration={500}>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={25}/></span>
            </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={profileImage} alt="my profile" className='rounded-2xl mx-auto w-2/3'/>
        </div>
      </div>
    </div>
  )
}

export default Home
