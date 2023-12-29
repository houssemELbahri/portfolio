import {  TechCard } from '../Tech';
import './technologies.css'




export interface ITech {
    id: number;
    name: string
}


const TECHNOLOGIES: ITech[] = [
    {
        id: 1,
        name: "React",
    },
    {
        id: 2,
        name: "React Native",
    },
    {
        id: 3,
        name: "JavaScript",
    },
    {
        id: 4,
        name: "TypeScript",
    },
    {
        id: 5,
        name: "Redux",
    },
    {
        id: 6,
        name: "Mobx",
    },
    {
        id: 7,
        name: "git",
    },
    {
        id: 8,
        name: "firebase",
    },
    {
        id: 9,
        name: "Fastlane",
    }
]

export const Technologies = () => {
    return (
        <div>
            <p className="title">Things I work with</p>
            <div className='flex techs-container'>
                {TECHNOLOGIES.map(tech => {
                    return (
                        <TechCard {...tech} />
                    )
                })}
            </div>
        </div>
    )
}