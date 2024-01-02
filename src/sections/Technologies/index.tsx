import './technologies.css'
import {  TechCard } from '../../components/TechCard';
import { ITech } from '../../types';










const TECHNOLOGIES: ITech[] = [
    {
        id: 1,
        name: "React",
        icon:"FaReact"
    },
    {
        id: 2,
        name: "React Native",
        icon:"ReactNative"
    },
    {
        id: 3,
        name: "JavaScript",
        icon:"IoLogoJavascript"
    },
    {
        id: 4,
        name: "TypeScript",
        icon:"SiTypescript"
    },
    {
        id: 5,
        name: "Redux",
        icon:"SiRedux"
    },
    {
        id: 6,
        name: "Mobx",
        icon:"SiMobx"
    },
    {
        id: 7,
        name: "git",
        icon:"FaGitAlt"
    },
    {
        id: 8,
        name: "Android Studio",
        icon:"SiAndroidstudio"
    },
    {
        id: 9,
        name: "Xcode",
        icon:"SiXcode"
    }
]

export const Technologies = () => {
    return (
        <div className='technologies'>
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