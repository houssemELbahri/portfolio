import { useState } from 'react'
import './header.css'

import {
    FaWindows,
    FaApple,
    FaSun,
    FaCloudMoon,
    FaMoon,
} from 'react-icons/fa'
import { MdCloseFullscreen, MdMenu, MdClose, MdSunny } from 'react-icons/md'
// import { SiNintendo } from 'react-icons/si'
// import { BsGlobe } from 'react-icons/bs'
// import { IconType } from "react-icons"
import {BsCloudSleet} from 'react-icons/bs'



export const Header = () => {
    const [showModal, setshowModal] = useState<boolean>(false)
    return (
        <header className='flex'>
            <button onClick={() => setshowModal(true)} className='menu'>
                {/* Menu */}
                <MdMenu size={35} />
            </button>
            <div />
            <nav>
                <ul className='flex'>
                    <li>
                        <a href="About">About</a>
                    </li>
                    <li>
                        <a href="Articles">Articles</a>
                    </li>
                    <li>
                        <a href="Projects">Projects</a>
                    </li>
                    <li>
                        <a href="Speaking">Speaking</a>
                    </li>
                    <li>
                        <a href="Contrat">Contact</a>
                    </li>
                </ul>
            </nav>
            <button>
                <MdSunny size={35} />
            </button>
            {showModal && <div className="fixed">
                <ul className='modal'>
                    <li>
                        <button onClick={() => setshowModal(false)}>
                            <MdClose size={28} />
                        </button>
                    </li>
                    <li>
                        <a href="About">About</a>
                    </li>
                    <li>
                        <a href="Articles">Articles</a>
                    </li>
                    <li>
                        <a href="Projects">Projects</a>
                    </li>
                    <li>
                        <a href="Speaking">Speaking</a>
                    </li>
                    <li>
                        <a href="Contrat">Contact</a>
                    </li>
                </ul>
            </div>}
        </header>
    )
}