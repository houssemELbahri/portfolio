import './projects.css'
import { PROJECTS } from '../../constants'
import { MdPhoneIphone } from 'react-icons/md'
import { GrAndroid } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { FaNpm } from "react-icons/fa6";



export const Projects = () => {
    return (
        <div className='main'>
            <p className="title">Projects I worked on</p>
            <div className='projects-container' >
                {PROJECTS.map(project => {
                    return (
                        <div>
                            <div className='one-project'>
                                <div className='flex'>
                                    {project.image.length > 0 ?
                                        <img className='project-icon' src={project.image} />
                                        :
                                        // 
                                        null
                                    }
                                    <p className='sub-title'>{project.name} - {project.fromDate} - {project.toDate}</p>
                                </div>
                                <p className='description'>{project.description}</p>
                                <div className='flex platforms-container'>
                                    {project?.appStoreLink && <a href={project?.appStoreLink} target='_blank'>
                                        <h1 className='app-platform'>
                                            <MdPhoneIphone />
                                        </h1>
                                    </a>
                                    }
                                    {project?.googlePlayLink && <a href={project?.googlePlayLink} target='_blank'>
                                        <h1 className='app-platform'>
                                            <GrAndroid />
                                        </h1>
                                    </a>
                                    }
                                    {project?.npmLink && <a href={project?.npmLink} target='_blank'>
                                        <h1 className='app-platform'>
                                            <FaNpm />
                                        </h1>
                                    </a>
                                    }
                                    {project?.githubLink && <a href={project?.githubLink} target='_blank'>
                                        <h1 className='app-platform'>
                                            <GrGithub />
                                        </h1>
                                    </a>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}