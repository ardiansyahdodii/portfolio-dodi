import CardProject from "./little/CardProject"
import { DataProject } from "../data/DataProject"

interface Props{
    id: string
}


const Project = (props:Props) => {

    return (
        <div className="min-h-screen pt-20" id={props.id}>
            <div className="text-2xl md:text-4xl font-bold text-center text-gray-300">
                <u>My Project</u> 🚀
            </div>
            <div 
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 md:px-0"
            >
                {DataProject.map((project) => (
                    <CardProject key={project.id} name={project.name} link={project.link} technology={project.technology} style={'bg-blue-500'} />
                ))}
                
            </div>
        </div>
    )
}

export default Project