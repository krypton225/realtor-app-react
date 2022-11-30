import { useState } from "react";

import { browserName } from "react-device-detect";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import KeysImage from "../assets/images/keys.jpg";
import Input from "../components/Input";
import MainButton from "../components/MainButton";

const SignIn = () => {

    const [showEye, setShowEye] = useState(false);

    const changeEyeIcon = () => setShowEye(!showEye);

    const checkBrowserName = () => browserName.toLowerCase() === "edge";

    return (
        <section className="container px-6">
            <h3 className="mt-14 sm:mt-[4.6rem] text-center text-2xl sm:text-3xl capitalize font-semibold">sign in</h3>

            <div className="w-full mt-10 flex flex-col lg:flex-row justify-between items-center space-x-6">
                <div className="sm:w-3/4 md:w-1/2 rounded-md">
                    <img src={KeysImage} className="w-full rounded-md" alt="Keys" />
                </div>

                <div className="w-full sm:w-3/4 md:w-1/2 mt-10 lg:mt-0">
                    <form className="w-[97%] flex flex-col justify-center items-center space-y-8">
                        <Input idInput={"email"} typeInput={"email"} nameInput={"email"} placeHolderText={"enter email"} />

                        <div className="w-full relative cursor-pointer">
                            <Input idInput={"password"} typeInput={`${showEye ? "text" : "password"}`}
                                nameInput={"password"} placeHolderText={"enter password"} />

                            {
                                checkBrowserName() ? "" :
                                    <i className="absolute p-2 right-1 top-1/2 -translate-y-1/2 text-lg text-gray-600" onClick={changeEyeIcon}>
                                        {showEye ? <AiFillEye /> : <AiFillEyeInvisible />}
                                    </i>
                            }
                        </div>

                        <MainButton typeBtn="submit" btnBg="blue" btnTextColor="white" btnInnerText="sign in" />

                        <div className="w-full relative before:content-[''] before:absolute before:h-[2px] before:w-[45%] before:bg-slate-800 before:top-1/2 before:left-0 after:content-[''] after:absolute after:h-[2px] after:w-[45%] after:bg-slate-800 after:top-1/2 after:right-0 select-none">
                            <p className="text-center uppercase text-sm">or</p>
                        </div>

                        <MainButton btnBg="red" btnTextColor="white" customStyles="flex justify-center items-center" btnInnerText="sign up with google account">
                            {<FcGoogle className="w-4 h-4 mr-4 bg-white rounded-full" />}
                        </MainButton>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn;