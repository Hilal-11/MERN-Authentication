import React from 'react'
import './Button.css'
import { useNavigate } from 'react-router-dom'
import home_image from '../assets/home_image.webp'
import { useContext } from 'react'
import AppContext from '../Context/AppContext'
function Header() {
    const navigate = useNavigate('')
    const { userData , isLoggedin} = useContext(AppContext)
  return (
    <div>
        <div className='flex justify-between py-6 px-10'>
            <div>
                <img className='w-16' src="https://cdn-icons-png.freepik.com/256/7733/7733518.png?ga=GA1.1.1304505363.1745871602" alt="" />
            </div>
            <div className='relative'>
                {
                    (!isLoggedin) ? (
                        <button className="cssbuttons-io px-14 py-3 text-white"
                            onClick={() => { navigate('/login')}}>
                                Login
                        </button>
                    ) : (
                        <div className='rounded-full bg-white px-3 py-2 text-indigo-700 poppins-extrabold flex justify-center items-center cursor-pointer group'>
                            <p>{userData[0]}</p>


                            <div className='p-5 hidden text-sm w-[120px] absolute top-[36px] left-[-28px] my-2 group-hover:block space-y-0 poppins-bold px-0 py-0 bg-slate-100 rounded-xl text-black'>
                                <h1 className='text-center cursor-pointer py-2 hover:bg-slate-300'>Varify Email</h1>
                                <h1 className='text-center cursor-pointer py-2 hover:bg-slate-300'>Logout</h1>
                            </div>
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
                    <h1 className='poppins-extrabold text-center text-4xl lg:text-6xl'>{ userData ? `Hello ${userData} how can i help you` : `MERN Authentication and Autherization`}! </h1>
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