import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";


interface Props {
    style: string,
    name: string,
    link: {
        github: string,
        live: string
    },
    technology: string[]
}

const CardProject = (props: Props) => {
    return (
        <div className={`${props.style} h-[250px] md:h-[300px] bg-cyan-900 p-7 rounded-md hover:scale-110 hover:bg-slate-900 hover:border-2 transition-all duration-500 group`}>
            <div className="flex justify-end items-center w-full space-x-3 text-2xl group-hover:text-gray-300 transition-all duration-500">
                {props.link.github && <a href={props.link.github} target="_blank">
                    <FaGithub />
                </a>}
                {props.link.live && <a href={props.link.live} target="_blank">
                    <FaExternalLinkAlt />
                </a>}
            </div>
            <div className="flex justify-center items-center h-4/5 text-2xl md:text-3xl font-bold group-hover:text-gray-300 transition-all duration-500">{props.name}</div>
            <div className="flex justify-center items-center h-1/5 text-base md:text-lg font-semibold group-hover:text-gray-300 transition-all duration-500">
                {props.technology.join(' - ')}
            </div>



        </div>
    )
}

export default CardProject