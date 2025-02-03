import React from 'react'
import { IoClose } from 'react-icons/io5';

export default function Modal({isOpen, onClose}){
    if(!isOpen) return null;// Don't render the modal if it isn't open
  return (
    <>
    <div className='fixed inset-0 bg-gray-950 bg-opacity-50 flex justify-center items-center z-40'
    onClick={onClose}>
    </div>
    <div className='bg-white p-6 rounded-lg w-80 m-auto mt-80 z-50 h-auto'
    onClick={(e) => e.stopPropagation()}
    style={{pointerEvents: "auto"}}
    >
     <div className='flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>Login</h2>
        <button onClick={onClose} className='text-gray-500'>
            <IoClose size={24}/>
        </button>
        </div>
        {/*Login Options*/}
        <div className='space-y-4'>
            <button
            onClick={() => alert("Loggin in as Guest")}
            className='w-full py-2 bg-blue-300 text-gray rounded-lg'
            >
            Login as Guest
            </button>
            
            <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                    <input
                    type="email"
                    placeholder='Email'
                    className='w-full px-4 py-2 border rounded-lg'
                    
                    ></input>
                </div>
                <div className='flex items-center space-x-2'>
                    <input
                    type="password"
                    placeholder='Password'
                    className='w-full px-4 py-2 border rounded-lg'
                    >
                    </input>
                </div>
                <button
                onClick={() => alert("Logging in with email and password")}
                className='w-full py-2 bg-green-500 text-white rounded-lg'
                >
                    Login with Email/Password
                </button>
            </div>
                <div className='flex justify-between text-sm text-gray-600 mt-4'>
                    <button onClick={() => alert("Email reset functionality")}
                        className='hover:underline'>
                        Forgot Email?
                    </button>
                </div>
        </div>   
    </div>
    </>
  )
}