import React, { useState } from 'react';
import Logo from './assets/logo.svg';



const login = () => {
  const [username,setusername]=useState();
  const [password,setpassword]=useState();
  

  const  savedata=()=>
  {
     fetch('http://localhost:5005/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
      })
  }

  return (
    <>
    <div className='flex w-full max-sm:flex-col bg-white'>
      <div className="flex flex-col w-1\2  mx-20 my-10 justify-start">
       <div className='w-70'> <img src={Logo} className=' w-50 h-20'></img></div>
       <div className='font-semibold py-1 pr-40'>
       <h2 className="text-2xl">Facebook helps you connect and share with the people in your life.</h2>
       </div> 
      </div>
     <div className='flex flex-col  w-1\2 p-10 mr-10 my-10 ' id='menu'> 
       <input type='text' className='border-solid border-2 border-black-200 my-3 ' placeholder='Enter email address or phone number' onChange={(e)=>setusername(e.target.value)}></input>
       <input type='text' className='border-solid border-2 border-black-200 my-3' placeholder='Enter pssword' onChange={(e)=>setpassword(e.target.value)} ></input>

       <button className="w-96 py-3 text-xl font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-lg" onClick={savedata}>
        <a href='home'>Login</a></button>
       <h3 className='text-xl justify-items-center mx-auto my-4 text-blue-500'>Forgotten password?</h3>
       <hr>
       </hr>
       <button className=' bg-green-500 h-10 px-3 rounded-lg mx-auto my-4 text-white text-xl font-bold'>Create New Acount</button>
    </div>
   </div>
   
      
    </>
  )
}

export default login
