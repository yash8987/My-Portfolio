import React from 'react'
import weather from "../Images/weather.jpeg";
import caseChanger from "../Images/casechanger.jpg";
import todo from "../Images/todo.png";
import github from "../Images/github.png";

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:weather,
            title:"Weather App",
            code:"https://github.com/yash8987/weather-app",
            link:"https://yash8987.github.io/weather-app/"
        },
        {
            id:2,
            src:caseChanger,
            title:"Case Changer",
            code:"https://github.com/yash8987/case-changer",
            link:"https://yash8987.github.io/case-changer/"
        },
        {
            id:3,
            src:todo,
            title:"Todo List",
            code:"https://github.com/yash8987/To-Do-List-",
            link:"https://yash8987.github.io/To-Do-List-/"
        },
        {
            id:4,
            src:github,
            title:"Github Api",
            code:"https://github.com/yash8987/github-api",
            link:"https://yash8987.github.io/github-api/"
        }
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from bg-gray-800 to-black w-full text-white md:h-[100vh]'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out my some of work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id,src,title,code,link})=>{
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col items-center gap-3'>
                                <p className='text-xl font-bold inline border-gray-500'>{title}</p>
                                <img src={src} alt="weather app" className='rounded=md duration-200 hover:scale-105 w-2/3 mx-auto h-2/3'/>
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scalw-105 bg-cyan-300 font-bold text-red-400 rounded-lg'><a href={link} target='_blank' rel="noreferrer">Demo</a></button>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scalw-105 bg-cyan-300 font-bold text-red-400 rounded-lg'><a href={code} target='_blank' rel="noreferrer">Code</a></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
