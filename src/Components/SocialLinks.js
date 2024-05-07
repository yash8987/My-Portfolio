import React from 'react'
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a href="https://www.linkedin.com/in/yashsharma8987/" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    Linkedin <FaLinkedin size={30}/>
                </>
            </a>
        </li>
      </ul>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a href="https://github.com/yash8987" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    Github <FaGithub size={30}/>
                </>
            </a>
        </li>
      </ul>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a href="mailto:yash8987@gmail.com" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    Mail <HiOutlineMail size={30}/>
                </>
            </a>
        </li>
      </ul>
      <ul>
        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
            <a href="https://drive.google.com/file/d/1qjP0WrVDL7zyNHMhRent3l44CMNpwqWe/view?usp=sharing" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
