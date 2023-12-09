import { DataSkill } from '../data/DataSkill';
import Skill from './little/Skill';
interface Props {
    id: string,
}

const About = (props: Props) => {
    return (
        <div className="min-h-screen pt-20" id={props.id}>
            <div className="text-2xl md:text-4xl font-bold text-center text-gray-300">
                <u>About Me</u>  👨‍💻
            </div>

            <div className="md:flex mt-10 h-full">
                <div className="w-full md:w-1/3 ">
                    <div
                        data-aos="fade-right"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1500"
                        className="flex justify-center items-center p-14 h-[250px] md:h-[580px]"
                    >
                        <div className="bg-blue-600 rounded-lg group" >
                            <img src="/assets/about/dodi3.jpg" alt="Dodi A" className="rounded-lg w-[200px] h-[200px] md:h-[300px] md:w-[300px] origin-bottom-right -rotate-[8deg] group-hover:rotate-0 transition-all duration-500" />
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-2/3 px-3 py-5">
                    <div 
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                    >
                        <div className="text-xl md:text-2xl font-bold text-blue-500">Mari Berkenalan</div>
                        <div className="mt-5 text-base md:text-xl font-medium text-gray-300">
                            Hello, I'm Dodi Ardiansyah! I'm a fresh graduate majoring in D3 Computer Technology at Telkom University Bandung. I have a strong interest in the field of web development, especially front-end developers. I'm dedicated to continuing to expand my knowledge and skills in the field of web development while learning new technologies.
                        </div>
                    </div>
                    <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1500"
                    data-aos-delay="1000"
                    >
                        <div className="text-xl md:text-2xl font-bold mt-8 text-blue-500">My Skill 🎯</div>
                        <div className="grid grid-cols-6 gap-5 w-full mt-5">
                            {DataSkill.map((skill, index: number) => (
                                <Skill key={index} name={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About