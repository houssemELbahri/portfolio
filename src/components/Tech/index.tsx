import { ITech } from "../Technologies"
import './tech.css'




export const TechCard = ({name}:ITech) => {
    return (
        <div className="tech-card">
            {name}
        </div>
    )
}