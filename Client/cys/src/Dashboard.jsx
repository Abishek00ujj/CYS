import React from 'react';
import {Footer} from './Footer'
import {Link} from 'react-router-dom'
const Dashboard = () => {
    return (
        <div className="w-full h-screen bg-gray-50">
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold">Learning Platform</h1>
               <Link to='/'><button className="bg-yellow-500 text-white px-6 py-2 rounded-md">Logout</button></Link> 
            </header>
            <div className="flex flex-col lg:flex-row p-8 space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="lg:w-1/4 bg-white shadow-md p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Navigation</h2>
                    <ul className="space-y-3">
                        <li><a href="#" className="text-blue-600 hover:underline">Dashboard</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">My Courses</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">Progress</a></li>
                        <li><a href="#" className="text-blue-600 hover:underline">Settings</a></li>
                    </ul>
                </div>
                <div className="lg:w-3/4 space-y-6">
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">My Courses</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-medium">React for Beginners</h3>
                                    <p className="text-sm text-gray-600">Module 1: Introduction to React</p>
                                </div>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Continue</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-medium">Advanced JavaScript</h3>
                                    <p className="text-sm text-gray-600">Module 3: Asynchronous JS</p>
                                </div>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Continue</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-medium">Web Development Mastery</h3>
                                    <p className="text-sm text-gray-600">Module 5: Full-Stack Project</p>
                                </div>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Continue</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg">React Workshop</p>
                                    <p className="text-sm text-gray-600">December 20, 2024</p>
                                </div>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Join</button>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg">JavaScript Quiz</p>
                                    <p className="text-sm text-gray-600">December 25, 2024</p>
                                </div>
                                <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-md p-6 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4">Recent Notifications</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg">New Course Added: "Advanced CSS Techniques"</p>
                                    <p className="text-sm text-gray-600">December 17, 2024</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="text-lg">Upcoming Deadline: "React Project Submission"</p>
                                    <p className="text-sm text-gray-600">December 19, 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Dashboard;