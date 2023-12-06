import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"

interface Props{
    name: string,
    icon: string,
    link: string,
}

function CardContact(props: Props) {
    return (
        <a 
        href={props.link}
        target="_blank" 
        className="flex justify-between h-16 p-2 border-x-2 border-x-zinc-200 border-b-[6px] border-b-cyan-800 border-t-2 border-t-zinc-200">
            <div className="flex items-end text-base md:text-xl font-semibold text-zinc-200">{props.name}</div>
            <div className="text-xl md:text-3xl text-zinc-200">
                {props.icon === "Github" && <FaGithub />}
                {props.icon === "Instagram" && <FaInstagram />}
                {props.icon === "Linkedin" && <FaLinkedin />}
                {props.icon === "Twitter" && <FaTwitter />}
            </div>
        </a>
    )
}

export default CardContact