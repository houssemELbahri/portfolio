import "./activities.css"
import { IoMdFootball } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";



export const Activities = () => {
    return (
        <div className="activities-container">
            <p className="activities-title">Activities I enjoy</p>
            <div className="icon-with-label">
                <h1 className="activity-icon">
                    <IoMdFootball />
                </h1>
                <p className="activity">Football</p>
            </div>
            <div className="icon-with-label">
                <h1 className="activity-icon">
                    <IoGameControllerOutline />
                </h1>
                <p className="activity">Video games</p>
            </div>
            <div className="icon-with-label">
                <h1 className="activity-icon">
                    <FaPersonSwimming />
                </h1>
                <p className="activity">Swimming</p>
            </div>
            <div className="icon-with-label">
                <h1 className="activity-icon">
                    <FaReact />
                </h1>
                <p className="activity">Programming with React</p>
            </div>
        </div>
    )
}