import { Link, useLocation } from "react-router-dom";

import NavbarItems from "../data/navbarItems";

import { Logo } from "./";

const Navbar = () => {

    let currLocation = useLocation().pathname;

    return (
        <nav className="bg-white w-full h-16 border-b-2 shadow-sm sticky top-0 left-0 z-50 px-2 sm:px-2.5">
            <div className="container w-full h-full flex justify-between items-center">
                <Link to={"/"} className="cursor-pointer py-4">
                    <Logo />
                </Link>

                <ul className="py-4 flex justify-evenly items-center md:space-x-12 space-x-4 capitalize font-semibold">
                    {
                        NavbarItems.map(({ id, itemLinkRoute, itemText }) => (
                            <li key={id}>
                                <Link className={`py-4 text-sm sm:text-lg transition duration-300 text-gray-400 hover:text-slate-700
                                    ${currLocation === itemLinkRoute ? "text-slate-900 border-b-red-700 border-b-[3px] rounded-b-sm" : ""}`}
                                    to={itemLinkRoute}>
                                    {itemText}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;