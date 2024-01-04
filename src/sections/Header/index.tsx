import './header.css'
import { useEffect, useState } from 'react'
import { IoMdFootball } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";



const LINKS = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://linkedin.com/in/houssem-bahri"
    },
    {
        id: 2,
        name: "Github",
        link: "https://github.com/houssemELbahri"
    },
    {
        id: 3,
        name: "Twitter",
        link: "https://twitter.com/el__Bahri"
    },
]


export const Header = () => {
    const [theme, setTheme] = useState<string>(localStorage.getItem("currentTheme") ?? "light")


    useEffect(() => {
        if (theme == "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
        else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
        document.body.classList.add(theme)
    }, [theme])

    const toggleTheme = () => {
        localStorage.setItem("currentMode", theme == "dark" ? "light" : "dark")
        setTheme(localStorage.getItem("currentMode"))
    }
    return (
        <header className='header'>
            <div className='header-container'>
                <p className='me'>@ElBahri</p>
                <div className='links-with-theme'>
                    <div>
                        <ul className='networks flex'>
                            {LINKS.map(el => {
                                return (
                                    <li key={el.id}>
                                        <a className='linkTo' href={el.link} target='_blank' >
                                            {el.name}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className='mode'>
                        <button
                            className='button-mode'
                            onClick={toggleTheme}>
                            <h1 className='mode-icon'>
                                {theme == "light" ?
                                    <LuSun style={{color:'rgb(233,169,8)',padding:"5px",width:"25px",height:"25px",borderRadius:"30px"}} />
                                    :
                                    <MdDarkMode style={{color:'#000000',padding:"5px",width:"25px",height:"25px",borderRadius:"30px"}} />
                                }
                            </h1>
                        </button>
                    </div>
                </div>
                {/* <div className='mode'>
                <button onClick={toggleTheme}>{theme}</button>
                </div> */}
            </div>
        </header>
    )
}

