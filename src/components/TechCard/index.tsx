import './tech-card.css'
import { ITech } from '../../types'
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import { SiAndroidstudio } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMobx } from "react-icons/si";




export const TechCard = ({ name, icon }: ITech) => {
    return (
        <div className='vertical-list'>
        <div
            className="tech-card"
            >
            <Icon icon={icon} />
        </div>
        <p className='technology-name'>{name}</p>
            </div>
    )
}


interface IconProps {
    icon: string
}


const Icon = ({ icon }: IconProps) => {
    switch (icon) {
        case "FaReact":
            return (
                <div className='tech-react'>
                    <div className='one-tech'>
                        <FaReact
                        />
                    </div>
                </div>
            )
            case "ReactNative":
                return (
                    <div className='tech-react-native'>
                        <div className='one-tech'>
                            <FaReact
                            />
                        </div>
                    </div>
                )
        case "IoLogoJavascript":
            return (
                <div className='tech-js'>
                    <div className='one-tech'>
                        <IoLogoJavascript
                        />
                    </div>
                </div>
            )
        case "SiTypescript":
            return (
                <div className='tech-ts'>
                    <div className='one-tech'>
                        <SiTypescript
                        />
                    </div>
                </div>
            )
        case "SiXcode":
            return (
                <div className='tech-xcode'>
                    <div className='one-tech'>
                        <SiXcode
                        />
                    </div>
                </div>
            )
        case "SiAndroidstudio":
            return (
                <div className='tech-android'>
                    <div className='one-tech'>
                        <SiAndroidstudio
                        />
                    </div>
                </div>
            )
        case "FaGitAlt":
            return (
                <div className='tech-git'>
                    <div className='one-tech'>
                        <FaGitAlt
                        />
                    </div>
                </div>
            )
        case "SiRedux":
            return (
                <div className='tech-redux'>
                    <div className='one-tech'>
                        <SiRedux
                        />
                    </div>
                </div>
            )
        case "SiMobx":
            return (
                <div className='tech-mobx'>
                    <div className='one-tech'>
                        <SiMobx
                        />
                    </div>
                </div>
            )
    }
}


