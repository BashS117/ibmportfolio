import React from 'react';
import aboutmeibm from '../../assets/aboutmeibm.png'
const AboutMe = () => {
  return (
    <div className="flex items-center justify-center p-[150px] pb-[50px] bg-white">
      <div className="flex items-center space-x-8"> 
        {/* Left Side: Image */}
        <div className="flex-shrink-0 w-[300px]">
          <img
            src={aboutmeibm} // Imagen reemplazable
            alt="Developer Illustration"
            className="w-[350px] h-[350px] rounded-full"
          />
        </div>

        {/* Right Side: Text */}
        <div>
          <h1 className="text-[50px] font-bold text-purple-700 mb-2 flex items-center">
            Hi, I'm Jane Doe! <span className="ml-2">👋</span>
          </h1>
          <p className="text-gray-600 text-[20px] text-left">
            I am a full stack developer with 2 years of experience in both
            application and presentation layers. I have worked on applications
            and microservices deployed on IBM Cloud. I am an avid user of IBM
            Watson Services and have worked on Watson Assistant, NLU, Sentiment
            analyzer to name a few.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
