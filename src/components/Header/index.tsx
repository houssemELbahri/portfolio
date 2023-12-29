import './header.css'


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
    return (
        <header className='header-container'>
            <p className='me'>@Bahrouch</p>
            <div>
                <ul className='networks flex'>
                    {LINKS.map(el => {
                        return (
                            <li key={el.id}>
                                <a href={el.link} target='_blank' >
                                    {el.name}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* <p className='links'>LinkedIn Github Twitter</p> */}
        </header>
    )
}

