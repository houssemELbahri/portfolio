import { ITech } from '../../types'
import './tech-card.css'




export const TechCard = ({name}:ITech) => {
    return (
        <div className="tech-card">
            <p className="technology">
            {name}
            </p>
        </div>
    )
}