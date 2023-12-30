import { ITech } from "../Technologies"
import './tech.css'




export const TechCard = ({name}:ITech) => {
    return (
        <div className="tech-card">
            <p className="technology">
            {name}
            </p>
        </div>
    )
}