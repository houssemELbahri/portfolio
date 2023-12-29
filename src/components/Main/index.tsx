import { ProjectCard } from '../projectCard'
import './main.css'
import ESPEROO from "../../public/esperoo.png"
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
    image: string
}

const Projects: Project[] = [
    {
        id: "1",
        name: "Actif Planner",
        fromDate: "string",
        toDate: "string",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: BNA
    },
    {
        id: "2",
        name: "AuditTab",
        fromDate: "string",
        toDate: "string",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: POPINA
    },
    {
        id: "3",
        name: "Kafu Games",
        fromDate: "string",
        toDate: "string",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: CHESS
    },
    {
        id: "4",
        name: "Esperoo Pointeuse",
        fromDate: "string",
        toDate: "string",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: COMBO
    },
    {
        id: "5",
        name: "Esperoo",
        fromDate: "string",
        toDate: "string",
        company: "FullStack Ltd",
        technologies: ["React native", "typescript", "Mobx"],
        image: ESPEROO
    },
    {
        id: "6",
        name: "Rapido Car",
        fromDate: "string",
        toDate: "string",
        company: "Esperoo",
        technologies: ["React native", "typescript", "Mobx"],
        image: APEC
    },
    // {
    //     id: "7",
    //     name: "Esperoo Pointeuse",
    //     fromDate: "string",
    //     toDate: "string",
    //     company: "Esperoo",
    //     technologies: ["React native", "typescript", "Mobx"]
    // }
]

export const Main = () => {
    return (
        <div>
            <p className="projects-title">Projects I worked on</p>
            <div className='projects-container'>
                {Projects.map(project => {
                    return (
                        <ProjectCard key={project.id} {...project} />
                    )
                })}
            </div>
        </div>
    )
}