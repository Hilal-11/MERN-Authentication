import React from 'react'

function Home() {
  return (
    <div>
      <div>

        {/* HEADER */}
        <div className='flex justify-between py-6 px-10'>
          <div>
            <img className='w-16' src="https://cdn-icons-png.freepik.com/256/7733/7733518.png?ga=GA1.1.1304505363.1745871602" alt="" />
          </div>
          <div>
            <button className='text-white shadow-2xl shadow-blue-800 px-12 py-3 rounded-full poppins-semibold ring-1 ring-amber-500'>Login</button>
          </div>
        </div>

      {/* BODY MAIN CONTENT */}
        <div className='w-full mx-auto'>
           <div className='mx-auto'>
              <div className='flex justify-center'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/software-development-illustration-download-in-svg-png-gif-file-formats--programming-web-developer-design-app-layout-and-pack-people-illustrations-3726908.png" alt="" />
              </div>
              <div>
                <h1 className='poppins-extrabold text-center text-4xl lg:text-6xl'>MERN Authentication and Autherization</h1>
              </div>
              <p className='lg:px-20 poppins-regular text-center py-5 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime. Numquam autem architecto voluptate reprehenderit ratione? Aliquam perspiciatis iusto explicabo, beatae consectetur provident voluptas. Iure, nisi fuga! Aliquam unde velit corporis eius sunt ipsam, doloremque fugit itaque alias blanditiis at eligendi voluptate doloribus dolore possimus quasi iste voluptatum consequatur sint et eaque! Eveniet voluptatem praesentium ipsa cupiditate ipsam ullam? Libero.</p>

              <div className='flex justify-center py-10'>
                <button className='bg-white text-black shadow-2xl shadow-blue-800 px-20 py-4 rounded-full poppins-semibold'>Get Started</button>
              </div>
           </div>
        </div>


      </div>
    </div>
  )
}

export default Home