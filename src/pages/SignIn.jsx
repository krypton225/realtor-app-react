import { useState } from "react";

import { browserName } from "react-device-detect";

import KeysImage from "../assets/images/keys.jpg";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { FcGoogle } from "react-icons/fc";

const SignIn = () => {

    const [showEye, setShowEye] = useState(false);

    const changeEyeIcon = () => setShowEye(!showEye);

    const checkBrowserName = () => browserName.toLowerCase() === "edge";

    return (
        <section className="container px-6">
            <h3 className="mt-8 text-center text-lg sm:text-3xl capitalize font-semibold">sign in</h3>

            <div className="w-full mt-10 flex flex-col lg:flex-row justify-between items-center space-x-6">
                <div className="sm:w-3/4 md:w-1/2 rounded-md">
                    <img src={KeysImage} className="w-full rounded-md" alt="Keys" />
                </div>

                <div className="w-full sm:w-3/4 md:w-1/2 mt-10 lg:mt-0">
                    <form className="w-[97%] flex flex-col justify-center items-center space-y-8">
                        <input type="email" className="w-full mx-auto py-1 px-2 border border-slate-400 rounded-md
                            placeholder:capitalize focus:outline-none active:outline-none"
                            name="email" id="email" placeholder="enter email" autoComplete="new-password" />

                        <div className="w-full relative cursor-pointer">
                            <input className="w-full mx-auto py-1 px-2 border border-slate-400
                            rounded-md placeholder:capitalize focus:outline-none active:outline-none" name="password" id="password"
                                type={`${showEye ? "text" : "password"}`} placeholder="enter password" autoComplete="new-password" />
                            {
                                checkBrowserName() ? "" :
                                    <i className="absolute p-2 right-1 top-1/2 -translate-y-1/2 text-lg text-gray-600" onClick={changeEyeIcon}>
                                        {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </i>
                            }
                        </div>

                        <button type="submit"
                            className="w-full py-2 rounded-md bg-blue-500 text-white capitalize font-semibold cursor-pointer transition duration-[0.3s] hover:bg-blue-700">
                            sign in
                        </button>

                        <div className="w-full relative before:content-[''] before:absolute before:h-[2px] before:w-[45%] before:bg-slate-800 before:top-1/2 before:left-0 after:content-[''] after:absolute after:h-[2px] after:w-[45%] after:bg-slate-800 after:top-1/2 after:right-0">
                            <p className="text-center uppercase text-sm">or</p>
                        </div>

                        <button className="w-full py-2 rounded-md flex justify-center items-center bg-red-500 text-white capitalize font-semibold cursor-pointer transition duration-[0.3s] hover:bg-red-700">
                            {<FcGoogle className="w-4 h-4 mr-4 bg-white rounded-full" />}
                            sign up with google account
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;