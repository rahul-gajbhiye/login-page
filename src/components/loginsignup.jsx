import React, { useState } from 'react';
import ForgotPwd from './forgotPwd';

const LoginSignupPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showForgotPwd, setShowForgotPdw] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const showForgotPassword = () => {
        setShowForgotPdw(true)
    }


    return (
        
        <div className="bg-custom-image bg-cover flex items-center justify-center min-h-screen">
            <div className="bg-transparent w-full max-w-md p-8 space-y-6 rounded-lg shadow-lg">
                {showForgotPwd ? (<ForgotPwd />) : (
                    
                <><h2 className="text-3xl font-semibold text-center text-white">
                    {isLogin ? 'Login' : 'Sign Up'}
                </h2>
                <form className="space-y-6">
                    {/* 1 when !isLogin is true (i.e., when isLogin is false) 
                        2 The && allows this block to render only when the condition (!isLogin) is true.
                        3 Conditionally renders a username input field only if isLogin is false 
                        4 Not login then renders username */}
                    {!isLogin && (

                        <div>
                            <label className="block text-lg text-white">Username</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your username"
                            />
                        </div>


                    )}
                    <div>
                        <label className="block text-lg text-white">Email address</label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div>
                        <label className="block text-lg text-white">Password</label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none "
                            placeholder="Enter your password"
                        />
                    </div>
                    {!isLogin && (
                        <div>
                            <label className="block text-lg text-white">Confirm Password*</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none "
                                placeholder="Confirm Password"
                            />
                        </div>
                    )}
                    
                    <div className="space-y-2">
                    
                    {isLogin && (
                    <>
                    {/* In this Button we have not given any style that's its looking like only text button */}
                    
                    <button
                        className="text-blue-500 hover:underline focus:outline-none"
                        onClick={showForgotPassword}
                    >
                        Forgot Password?
                    </button>
                    </>
                    )}
                    
                        

                    {/* In this button,  we gave width full and gaves color bg-blue-500 and 
                    gaves proper padding that's why its looking like proper button */}
                    <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none  ">
                        {isLogin ? 'Login' : 'Sign Up'}
                    </button>
                    
                    </div>
                    
                </form>
                
                <div className="text-lg text-center text-white">
                    {/* isLogin ? (...) : (...): This ternary expression checks the value of isLogin.
                      If isLogin is true, it shows the “Sign Up” prompt.
                      If isLogin is false, it shows the “Login” prompt. */}
                    {isLogin ? (
                        <>
                            {/* this curly brackets with single quotes just adding space between this line and button */}
                            Don’t have an account?{' '}
                            <button
                                className="text-blue-500 hover:underline focus:outline-none"
                                onClick={toggleForm}
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                className="text-blue-500 hover:underline focus:outline-none"
                                onClick={toggleForm}
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
                </>
                )}
    
            </div>
            
        </div>
        
    );
}

export default LoginSignupPage;
