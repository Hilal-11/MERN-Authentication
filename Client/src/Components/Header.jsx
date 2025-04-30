import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
import home_image from '../assets/home_image.webp'
import { useContext } from 'react'
import AppContext from '../Context/AppContext'
function Header() {
    const navigate = useNavigate('')
    const { username , isLoggedin } = useContext(AppContext)

  return (
    <div>
        <div className='flex justify-between py-6 px-10'>
            <div>
                <img className='w-16' src="https://cdn-icons-png.freepik.com/256/7733/7733518.png?ga=GA1.1.1304505363.1745871602" alt="" />
            </div>
            <div>
                {
                    (!isLoggedin) ? (
                        <button className="cssbuttons-io px-14 py-3 text-white"
                            onClick={() => { navigate('/login')}}>
                                Login
                        </button>
                    ) : (
                        <div>
                            <p>{username[0]}</p>
                        </div>
                    )
                }
                
            </div>
            </div>
            {/* BODY MAIN CONTENT */}
            <div className='w-full mx-auto'>
            <div className='mx-auto'>
                <div className='flex justify-center'>
                    <img src={home_image} alt="" />
                </div>
                <div>
                    <h1 className='poppins-extrabold text-center text-4xl lg:text-6xl'>MERN Authentication and Autherization</h1>
                </div>
                <p className='lg:px-20 poppins-regular text-center py-5 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, maxime. Numquam autem architecto voluptate reprehenderit ratione? Aliquam perspiciatis iusto explicabo, beatae consectetur provident voluptas. Iure, nisi fuga! Aliquam unde velit corporis eius sunt ipsam, doloremque fugit itaque alias blanditiis at eligendi voluptate doloribus dolore possimus quasi iste voluptatum consequatur sint et eaque! Eveniet voluptatem praesentium ipsa cupiditate ipsam ullam? Libero.</p>

                <div className='flex justify-center py-10'>
                    <button className='bg-white text-black shadow-2xl shadow-blue-800 px-20 py-4 rounded-full poppins-semibold cursor-pointer' onClick={() => { navigate('/login')}}>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header