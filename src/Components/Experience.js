import React from 'react'
import html from "../Images/html.png";
import css from "../Images/css.png";
import js from "../Images/js.png";
import react from "../Images/react.png";
import node from "../Images/node.png";
import express from "../Images/express.png";
import mongodb from "../Images/mongodb.png";
import sql from "../Images/sql.jpg";
import python from "../Images/python.png";
import tailwind from "../Images/tailwind.png";
import bootstrap from "../Images/bootstrap.png";
import dsa from "../Images/dsa.png";
import c from "../Images/c.png";

const Experience = () => {

    const experiences = [
        {
            id:1,
            src:html,
            name:"HTML",
            style:"shadow-orange-500"   
        },
        {
            id:2,
            src:css,
            name:"CSS",
            style:"shadow-blue-500"    
        },
        {
            id:3,
            src:js,
            name:"JS",
            style:"shadow-yellow-500"     
        },
        {
            id:4,
            src:react,
            name:"React JS",
            style:"shadow-blue-600"       
        },
        {
            id:5,
            src:node,
            name:"Node JS",
            style:"shadow-green-500"      
        },
        {
            id:6,
            src:express,
            name:"Express JS",
            style:"shadow-blue-500"        
        },
        {
            id:7,
            src:mongodb,
            name:"MongoDB",
            style:"shadow-green-500"        
        },
        {
            id:8,
            src:sql,
            name:"SQL",
            style:"shadow-yellow-500"        
        },
        {
            id:9,
            src:tailwind,
            name:"Tailwind CSS",
            style:"shadow-sky-400"      
        },
        {
            id:10,
            src:bootstrap,
            name:"Bootstrap",
            style:"shadow-violet-500"        
        },
        {
            id:11,
            src:python,
            name:"Python",
            style:"shadow-yellow-500"        
        },
        {
            id:12,
            src:dsa,
            name:"DSA",
            style:"shadow-gray-500"       
        },
        {
            id:13,
            src:c,
            name:"C",
            style:"shadow-blue-500"        
        }
    ]

  return (
    <div name="experience" className='bg-gradient-to-b from bg-gray-800 to-black w-full h-[220vh]'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl border-b-4 border-gray-500 font-bold p-2 inline'>Experience</p>
            <p className='py-6'>Those are the technologies I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {
                experiences.map(({id,src,name,style})=>{
                    return (
                        <div key={id} className={`h-[22vh] shadow-md py-2 rounded-lg flex flex-col ${style}`}>
                            <img src={src} alt="experience" className='w-20 h-2/3 mx-auto rounded-lg hover:scale-105'/>
                            <p className='mt-4'>{name}</p>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Experience
