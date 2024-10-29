import React from 'react'

const forgotPwd = () => {
    return (

        <div className='space-y-6'>

            <h2 className="text-3xl font-semibold text-center text-white">Forgot Password</h2>
            <form className="space-y-6">
                <div>
                    <label className="block text-lg text-white">New Password</label>
                    <input
                        type="text"
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter New Password"
                    />
                </div>
                <div>
                    <label className="block text-lg text-white">Confirm New Password</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Re-Enter New Password"
                    />
                </div>
                <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none  ">Update Password
                </button>
            </form>

        </div>


    )
}

export default forgotPwd