import { ProjectCard } from '../projectCard'
import './main.css'
import ESPEROO from "../../public/esperoo.png"
import ESPEROO2 from "../../public/logo.png"
import APEC from "../../public/apec.png"
import BNA from "../../public/bna.png"
import CHESS from "../../public/chess.png"
import COMBO from "../../public/combo.png"
import POPINA from "../../public/popina.png"




export interface Project {
    id: string,
    name: string,
    fromDate: string,
    toDate: string,
    company: string,
    technologies: string[],
    image: string,
    description:string
}

const Projects: Project[] = [
    {
        id: "6",
        name: "Rapido Car",
        fromDate: "10/2023",
        toDate: "Present",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: APEC,
        description:"Enables users to simplify car rental by checking availability, booking and accessing the best deals in real time."
    },
    {
        id: "5",
        name: "Esperoo",
        fromDate: "10/2022",
        toDate: "Present",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: ESPEROO2,
        description:"Esperoo, with its 2 mobile applications Esperoo and Esperoo Pointeuse, offers a complete solution for scheduling, timekeeping and team management."
    },
    {
        id: "4",
        name: "Esperoo Pointeuse",
        fromDate: "10/2022",
        toDate: "Present",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: COMBO,
        description:"Esperoo, with its 2 mobile applications Esperoo and Esperoo Pointeuse, offers a complete solution for scheduling, timekeeping and team management."
    },
    {
        id: "3",
        name: "Kafu Games",
        fromDate: "07/2022",
        toDate: "09/2022",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: CHESS,
        description:"Is an elite gaming mobile app that organizes esports tournaments for the most renowned game titles."
    },
    {
        id: "2",
        name: "AuditTab",
        fromDate: "03/2021",
        toDate: "09/2022",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: POPINA,
        description:"Facilitates the performance of technical quality and safety audits, the management of defect rework requests, and the tracking of non-conformance costs and action plans on web and mobile."
    },
    {
        id: "1",
        name: "Actif Planner",
        fromDate: "11/2020",
        toDate: "03/2021",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: BNA,
        description:"Enables simplified scheduling of tasks and provides real-time monitoring for proactive management of delays."
    },
]

export const Main = () => {
    return (
        <div className='main'>
            <p className="projects-title">Projects I worked on</p>
            <div className='projects-container' >
                {Projects.map(project => {
                    return (
                        <div>
                            <div className='one-project'>
                            <p className='project-name'>{project.name} - {project.fromDate} - {project.toDate}</p>
                            <p className='project-description'>{project.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* <div className='projects-container'>
                {Projects.map(project => {
                    return (
                        <ProjectCard key={project.id} {...project} />
                    )
                })}
            </div> */}
        </div>
    )
}