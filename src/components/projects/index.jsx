import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col px-[100px] pb-[80px] '>
    <h1 className='text-purple-700 font-semibold text-start '>Projects</h1>
    <div className=' pl-[60px] pt-4 flex text-start flex-col h-[300px] justify-between'>
    
        <h2 className='font-bold text-[22px] pt-4'>Chatbot</h2>
        <p className=' mt-4 pl-8 font-bold text-[17px]'>• Developed a secure website with chatbot for an automobile cpent using HTML, CSS, Javascript and IBM Watson Assistant</p>
        <p className='w-[full] border-b-[3px] mx-20 mt-4 '></p>
    
    
        <h2 className='font-bold text-[22px]  pt-4'>Sentiment Analyzer </h2>
        <p className=' mt-4 pl-8 font-bold text-[18px]' >•  Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU</p>
        <p className='w-[full] border-b-[3px] mx-20 mt-4'></p>
    
       <h2 className='font-bold text-[22px]  pt-4'>Fashion Website</h2>
        <p className=' mt-4 pl-8 font-bold text-[17px]'> • Created a styled multi-page website fora new player in the fashion industry and integrated it whit a shopping cart, using stripe for payment gateway</p>
    </div>
    
</div>
  )
}

export default Projects