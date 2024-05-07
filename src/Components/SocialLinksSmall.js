import React from 'react'
import { FaGithub,FaLinkedin, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinksSmall = () => {
  return (
    <div className='flex justify-center items-center bg-gradient-to-b from bg-gray-800 to-black w-full h-[20vh] gap-9 lg:hidden'>
      <ul>
        <li className='flex justify-between items-center rounded-md bg-gray-500'>
            <a href="https://www.linkedin.com/in/yashsharma8987/" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    <FaLinkedin size={50}/>
                </>
            </a>
        </li>
      </ul>
      <ul>
        <li className='flex justify-between items-center rounded-md bg-gray-500'>
            <a href="https://github.com/yash8987" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    <FaGithub size={50}/>
                </>
            </a>
        </li>
      </ul>
      <ul>
        <li className='flex justify-between items-center rounded-md bg-gray-500'>
            <a href="mailto:yash8987@gmail.com" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    <HiOutlineMail size={50}/>
                </>
            </a>
        </li>
      </ul>
      <ul>
        <li className='flex justify-between items-center rounded-md bg-gray-500'>
            <a href="https://drive.google.com/file/d/1qjP0WrVDL7zyNHMhRent3l44CMNpwqWe/view?usp=sharing" target='_blank' rel="noreferrer" className='flex justify-between items-center w-full text-white'>
                <>
                    <BsFillPersonLinesFill size={50}/>
                </>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinksSmall
