import { Link } from "react-scroll"
import { TypeAnimation } from "react-type-animation"
import Button from "./little/Button"
// import {useEffect} from 'react'

interface Props {
    id: string
}

const Home = (props: Props) => {
    return (
        <div className="md:min-h-screen pt-20" id={props.id}>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1500"
                className="md:flex"
            >
                {/* ringkasan probadi */}
                <div className="flex justify-start items-center w-full md:w-1/2">
                    <div className="flex flex-col justify-start w-full md:w-5/6">
                        <div className="text-base md:text-xl font-bold text-white">Hello 👋, I'm</div>
                        <div className="text-3xl md:text-5xl font-bold text-sky-600 mt-5">Dodi Ardiansyah</div>
                        <div className="text-xl md:text-2xl font-semibold text-white mt-5">
                            <TypeAnimation
                                sequence={[
                                    1500,
                                    'Web Developer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                ]}
                                wrapper="div"
                                speed={40}
                                repeat={Infinity}
                            />
                        </div>
                        <marquee
                            direction="left"
                            scrollamount="8"
                            className="text-xl md:text-2xl w-4/5 md:w-full font-bold mt-5 text-sky-600"
                        >
                            HTML - CSS - JAVASCRIPT - REACT JS - TAILWIND CSS - NODE JS - NEXT JS - MYSQL
                        </marquee>
                        <div className="text-sm md:text-lg font-medium text-white mt-5">I'm a fresh graduate who has an interest in web development. </div>
                        <div className="mt-5">
                            <Link
                                to="contact"
                                smooth={true}
                                className="group"
                            >
                                <Button text={"Call Me"} type="button" classname="group-hover:scale-110 transition-all duration-500" />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 p-10 md:p-20">
                    {/* <div className="w-[500px] h-[500px] bg-slate-700"> */}
                    <img src="/assets/home/hero.svg" alt="hero" />
                    {/* </div> */}

                </div>
            </div>

        </div>
    )
}

export default Home