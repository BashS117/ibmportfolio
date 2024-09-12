import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col px-[100px] pb-[80px] '>
    <h1 className='text-purple-700 font-semibold text-start '>Projects</h1>
    <div className=' pl-[60px] pt-4 flex text-start flex-col  justify-between'>
    
        <h2 className='font-bold text-[22px] pt-4'>Anonimous Questions</h2>
        <p className=' mt-4 pl-8 font-bold text-[17px]'>• An anonymous question submission web app allows users send questions, questions persist on page reload, enabling viewing of other users. Each question has a dedicated route and a share button for shares on social media as a open-graph image.</p>
        <p className='w-[full] border-b-[3px] mx-20 mt-4 '></p>
    
    
        <h2 className='font-bold text-[22px]  pt-4'>Sentiment Url-Shortening   </h2>
        <p className=' mt-4 pl-8 font-bold text-[18px]' >• A web application allows users to shorten valid URLs and manage a list of their shortened links. It supports easy link copying and provides error messages for empty input submissions. The interface is responsive, adapting to different screen sizes, and includes hover and focus states for interactive elements.</p>
        <p className='w-[full] border-b-[3px] mx-20 mt-4'></p>
    
       <h2 className='font-bold text-[22px]  pt-4'>Todo app</h2>
        <p className=' mt-4 pl-8 font-bold text-[17px]'> • The classic todo app with a few twists! This app includes a dark/light theme toggle and drag & drop reordering for anyone wanting an extra test.</p>
    </div>
    
</div>
  )
}

export default Projects