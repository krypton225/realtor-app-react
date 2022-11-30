import { useState } from "react";

import { browserName } from "react-device-detect";

import KeysImage from "../assets/images/keys.jpg";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {

    const [showEye, setShowEye] = useState(false);

    const changeEyeIcon = () => setShowEye(!showEye);

    const checkBrowserName = () => browserName.toLowerCase() === "edge";

    return (
        <section className="container">
            <h3 className="mt-8 text-center text-lg sm:text-3xl capitalize font-semibold">sign in</h3>

            <div className="w-full mt-10 flex flex-col lg:flex-row justify-between items-center space-x-6">
                <div className="sm:w-3/4 md:w-1/2 rounded-md">
                    <img src={KeysImage} className="w-full rounded-md" alt="Keys" />
                </div>

                <div className="w-1/2 mt-10 lg:mt-0">
                    <form className="w-full flex flex-col justify-center items-center space-y-8">
                        <input className="w-full py-1 px-2 border border-slate-400 rounded-md placeholder:capitalize"
                            type="email" name="email" id="email" placeholder="enter email" />

                        <div className="w-full relative cursor-pointer">
                            <input className="w-full py-1 px-2 border border-slate-400 rounded-md placeholder:capitalize"
                                type={`${showEye ? "text" : "password"}`} name="password" id="password" placeholder="enter password" />
                            {
                                checkBrowserName() ? "" :
                                    <i className="absolute p-2 right-1 top-1/2 -translate-y-1/2 text-lg text-gray-600" onClick={changeEyeIcon}>
                                        {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </i>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;