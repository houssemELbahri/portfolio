import './technologies.css'
import {  TechCard } from '../../components/TechCard';
import { TECHNOLOGIES } from '../../constants';



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