import React, { useState } from 'react'
import { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Adduser = () => {
    const notify=(message)=>toast.success(message);
    const [getdata,setdata]=useState(false);
    const [getuserdata,setuserdata]=useState(false);
    const emailref=useRef(null);
    const passwordref=useRef(null);
    let Datu=0;
    const Handleadduser=()=>{
        notify("user added successfully!");
         const obj={
            email:emailref.current.value,
            password:passwordref.current.value
         }
         setuserdata(obj);
         console.log(getuserdata)
         setdata(true);
        //  console.log(obj); 
    }
  return (
    <>
    <ToastContainer/>
       <div className='w-screen h-screen bg-slate-400 flex justify-center items-center'>
            <div className='flex flex-col w-[400px] h-[400px] space-y-5 '>
                <p className='text-2xl'>ADD USER</p>
                 <input ref={emailref} type="text" className='border border-black p-3 rounded-xl' placeholder='Email'/>
                 <input ref={passwordref} type="text" className='border border-black p-3 rounded-xl' placeholder='Password'/>
                 <button className='bg-black text-white p-2' onClick={Handleadduser}>ADD USER</button>
                 <div className=''>
            {
              getdata&&(
                <div className='w-[400px] h-[200px]'>
                    <table className='border border-black'>
                        <thead className='border border-black'>
                        <tr className=''>
                            <th className='border border-black p-3'>EMAIL</th>
                            <th className='border border-black p-3'>PASSWORD</th>
                        </tr>
                        </thead>
                        <tbody className='border border-black'> 
                        <tr>
                            <td className='border border-black p-3'>{getuserdata.email}</td>
                            <td className='border border-black p-3'>{getuserdata.password}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
              )
            }
            </div>
            </div>
            </div>
    </>
  )
}

export default Adduser