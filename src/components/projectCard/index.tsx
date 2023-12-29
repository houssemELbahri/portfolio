import "./project-card.css"
import { Project } from "../Main"






export const ProjectCard = ({id,name,fromDate,toDate,company,technologies,image}:Project) => {
    return (
        <div className="card-container">
            <img className="image-container" src={image}/>
            <p>{name}</p>
            <p>{company}</p>
            <p>{fromDate} {toDate}</p>
            {technologies.map(tech => {
                return (
                    <p className="inline-p">{tech}</p>
                )
            })
                }
        </div>
    )
}