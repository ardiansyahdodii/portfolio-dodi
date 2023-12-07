import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [hamburger, setHamburger] = useState(false)


    return (

        <nav className="flex justify-between w-full px-10 py-3 md:py-0 md:px-20 bg-slate-900/90 z-10 fixed">
            <Link
                to="home"
                smooth={true}
                className="flex justify-start items-center cursor-pointer text-zinc-300"
            >
                <img src="/assets/navbar/dark.png" alt="Dodi Ardiansyah" className='w-[130px] md:w-[200px]' />
            </Link>
            <div className='md:hidden flex justify-center items-center'>
                {/* hamburger menu */}
                <div
                    className='text-2xl p-2 text-zinc-200 cursor-pointer'
                    onClick={() => setHamburger(!hamburger)}
                >
                    {hamburger ? <FaX /> : <FaBars />}
                </div>
            </div>
            <div
                className="hidden md:flex flex-row items-center py-5 px-3 space-x-10 text-2xl font-semibold text-blue-500">
                <Link
                    activeStyle={{ color: "rgb(228 228 231)" }}
                    to="home"
                    smooth={true}
                    spy={true}
                    className="hover:underline cursor-pointer"
                >
                    Home
                </Link>
                <Link
                    activeStyle={{ color: "rgb(228 228 231)" }}
                    to="about"
                    smooth={true}
                    spy={true}
                    className="hover:underline cursor-pointer"
                >
                    About
                </Link>
                <Link
                    activeStyle={{ color: "rgb(228 228 231)" }}
                    to="project"
                    smooth={true}
                    spy={true}
                    className="hover:underline cursor-pointer"
                >
                    Project
                </Link>
                <Link
                    activeStyle={{ color: "rgb(228 228 231)" }}
                    to="contact"
                    smooth={true}
                    spy={true}
                    className="hover:underline cursor-pointer"
                >
                    Contact
                </Link>
            </div>

            {/* Navlink Hamburger */}
            <div
                    className={`${hamburger ? "flex" : "hidden"} md:hidden flex-col justify-center items-center space-y-3 p-3 text-2xl font-semibold text-blue-500 bg-slate-600 fixed z-10 mt-[52px] right-10 rounded-lg`}>
                    <Link
                        activeStyle={{ color: "rgb(228 228 231)" }}
                        to="home"
                        smooth={true}
                        spy={true}
                        className="hover:underline cursor-pointer"
                        onClick={() => setHamburger(!hamburger)}
                    >
                        Home
                    </Link>
                    <Link
                        activeStyle={{ color: "rgb(228 228 231)" }}
                        to="about"
                        smooth={true}
                        spy={true}
                        className="hover:underline cursor-pointer"
                        onClick={() => setHamburger(!hamburger)}
                    >
                        About
                    </Link>
                    <Link
                        activeStyle={{ color: "rgb(228 228 231)" }}
                        to="project"
                        smooth={true}
                        spy={true}
                        className="hover:underline cursor-pointer"
                        onClick={() => setHamburger(!hamburger)}
                    >
                        Project
                    </Link>
                    <Link
                        activeStyle={{ color: "rgb(228 228 231)" }}
                        to="contact"
                        smooth={true}
                        spy={true}
                        className="hover:underline cursor-pointer"
                        onClick={() => setHamburger(!hamburger)}
                    >
                        Contact
                    </Link>
                </div>
        </nav>
    )
}

export default Navbar