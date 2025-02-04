import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5';
import {useRouter} from 'next/router';
import Link from 'next/link';


export default function Modal({isOpen, onClose}){
    const [isMounted, setIsMounted] = useState(false);
    
    if(!isOpen) return null;// Don't render the modal if it isn't open
  return (
    <>
    
    <div className='fixed bg-red-300 p-6 rounded-lg w-80 mt-80 z-50 h-auto'
    onClick={(e) => e.stopPropagation()}
    style={{
        pointerEvents: "auto",
        top:"20%",
        left:"50%",
        transform:"translate(-50%, -50%)"
        }}
    >
     <div className=' flex justify-between items-center mb-4'>
        <h2 className='text-xl font-semibold'>Login</h2>
        <button className='text-gray-500' onClick={onClose} style={{pointerEvents:"auto"}}>
            X
        </button>
        </div>
        {/*Login Options*/}
        <div className='space-y-4'>
            <Link href="/foryou">
            <button
            onClick={() => {alert("Loggin in as Guest");
            router.push("/foryou");
            }}
            className='w-full py-2 bg-blue-300 text-gray rounded-lg'
            >
            Login as Guest
            </button>
            </Link>
            
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