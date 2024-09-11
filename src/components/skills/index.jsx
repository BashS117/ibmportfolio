import React from 'react'
import htmlimg from '../../assets/html.svg'
import jsimg from '../../assets/js.svg'
import javaimg from '../../assets/java.svg'
import react from '../../assets/reactimg.svg'
import nodeimg from '../../assets/nodeimg.svg'
import cssimg from '../../assets/css.svg'


const Skills = () => {
    const skillsCards = [
        {
            'svg': htmlimg,
            'name': 'HTML',
            'experience': '2 years of experience',

        },
        {
            'svg': jsimg,
            'name': 'Javascript',
            'experience': '1.5 years experience',

        },
        {
            'svg': javaimg,
            'name': 'Java',
            'experience': '.5 years experience',

        },
        {
            
            'svg': react,
            'name': 'React',
            'experience': '1 year experience',

        },
        {
            'svg': nodeimg,
            'name': 'Node.js',
            'experience': '1 years experience',

        },
        {   
            
            'svg': cssimg,
            'name': 'CSS',
            'experience':'2 years experience',

        }
    ]
  return (
    <div className='flex flex-col px-[100px] '>
        <h1 className='text-purple-700 font-semibold text-start '>Skills</h1>
        <div className='flex gap-20 flex-wrap py-[80px] '>
            {skillsCards.map((card, index)=>(
                
                  <div
                  className='shadow-md pb-4 pt-2 shadow-[#2e2b2b] w-[190px] h-[150px] rounded-[6px] flex flex-col justify-between'
                   key={index}>
                    <img src={card.svg} alt={card.svg} />
                  <h2 className='text-[12px]'>{card.name}</h2>
                  <p>{card.experience}</p>
              </div>
              ))}
        </div>
    </div>
  )
}

export default Skills