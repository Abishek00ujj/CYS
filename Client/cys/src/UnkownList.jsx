import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const unknownList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const notify=(message)=>toast.success(message);
    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await axios.get("https://cys.onrender.com/api/v1/getInvalid");
                setUsers(res.data.data); 
                console.log(users);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch users");
                setLoading(false);
            }
        };
        
        FetchData();  
    }, []); 
    if (loading)
    {
        return <div className='w-screen h-screen flex justify-center items-center'><div className='animate-spin'><Loader2/></div></div>;
    }
    if (error) 
    {
        return <div>{error}</div>;
    }
    return (
        <>
        <ToastContainer/>
        <div className='w-screen h-auto bg-slate-300'>
            <p className='text-3xl text-center p-5 text-red-400'>INVALID USERS LIST</p>
            <p className='text-2xl text-red-400'>Total users: {users.length}</p>
        <div className='w-screen h-auto flex justify-center items-center'>
            <div className=''>
                <table className=''>
                    <thead>
                <tr className='border border-black '>
                    <th className='border border-black p-5'>EMAIL</th>
                    <th className='border border-black p-5'>PASSWORD</th>
                    <th className='border border-black p-5'>BREACH TIME</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user, index) => (
                    <tr key={index} className='border border-black p-5'><td className='border border-black p-5'>{user.email}</td><td className='border border-black p-5'>{user.password}</td><td className='border border-black p-5'>{user.time}</td></tr> 
                ))}
                </tbody>
                </table>
            </div>
        </div>
        </div>
        </>
    );
};

export default unknownList;
