import React from 'react';

const Header = () => {
  return (
    <header className="bg-purple-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section */}
        <div className="flex  space-x-4 mt-8">
          <div className='text-start'>
            <h1 className="text-[28px] font-semibold ">Sebastian Rodriguez </h1>
            <div className="flex flex-col">
              <span className="flex gap-3 items-center">
                <figure className='bg-white rounded-[14px] h-7 w-7 content-center flex justify-center'>
                <img width="22" height="12" src="https://img.icons8.com/color/48/new-post.png" alt="new-post"/>

                </figure>
                sebasrm2000@gmail.com
              </span>
              <span className="flex gap-3 items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>

                +13456764598
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <nav className="flex space-x-6">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#recommendations" className="hover:underline">Recommendations</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
