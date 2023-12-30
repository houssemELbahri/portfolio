import { PROJECTS } from '../../constants'
import './projects.css'



export const Projects = () => {
    return (
        <div className='main'>
            <p className="projects-title">Projects I worked on</p>
            <div className='projects-container' >
                {PROJECTS.map(project => {
                    return (
                        <div>
                            <div className='one-project'>
                                <div className='flex'>
                                    <img className='project-icon' src={project.image} />
                                    <p className='project-name'>{project.name} - {project.fromDate} - {project.toDate}</p>
                                </div>
                                <p className='project-description'>{project.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}