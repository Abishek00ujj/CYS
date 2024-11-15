import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const notify=(message)=>toast.success(message);
    const emailref=useRef(null);
    const passwordref=useRef(null);
    const HandleLogin=()=>{
        notify("Succesful");
         const obj={
            email:emailref.current.value,
            password:passwordref.current.value
         }
         console.log(obj); 
    }
  return (
    <>
    <ToastContainer/>
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
          <div className='w-[500px] h-[400px] bg-blue-400 rounded-3xl'>
            <div className='w-full flex justify-center items-center font-mono text-3xl m-1'>LOGIN</div>
            <div className='w-full h-full flex flex-col justify-center items-center'>
                <input ref={emailref} type="" name="" id="" className='w-[80%] p-5 rounded-2xl border border-black m-5' placeholder='EMAIL'/>
                <input ref={passwordref}type="text" name="" id="" className='w-[80%] p-5 rounded-2xl border border-black m-5' placeholder='PASSWORD'/>
                <button className='bg-yellow-300 p-5 rounded-2xl' onClick={HandleLogin}>LOGIN</button>
            </div>
          </div>
    </div>
    </>
  )
}

export default Login