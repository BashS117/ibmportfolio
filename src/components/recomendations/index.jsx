import React from 'react'

const Recommendations = () => {
  return (
    <div className='px-[100px] mt-10'>
      <h1 className='text-purple-700 font-semibold text-start'>Recommendations</h1>
      <div className='grid grid-cols-3 gap-4 px-[60px] pb-4 pt-8'>
        <p className='border-[#e5e7eb] border-[2px] rounded-[6px] font-bold text-[14px] text-start p-4'>
          "Sebastián is a quick learner who rapidly grasps essential concepts in web development. His positive attitude and teamwork skills make him an asset to any group. He asks insightful questions and takes initiative, showing leadership potential."
        </p>
        <p className='border-[#e5e7eb] border-[2px] rounded-[6px] font-bold text-[14px] text-start p-4'>
          "Working with Sebastián has been a fantastic experience. He is highly knowledgeable and always ensures everything is completed with great attention to detail. I would love to collaborate with him again on future projects."
        </p>
        <p className='border-[#e5e7eb] border-[2px] rounded-[6px] font-bold text-[14px] text-start p-4'>
          "Sebastián was a key part of our web development efforts in the early stages of our project. His dedication and in-depth knowledge make him a valuable team member. He would be an asset to any organization."
        </p>
      </div>
    </div>
  )
}

export default Recommendations
