import React_logo from '../../../public/react.svg'
import './hero.css'



export const Hero = () => {
    return (
        <section className='hero'>
            <div className='hero-container'>
                <div className='left-container'>
                    <p className='greeting'>Hello !</p>
                    <section className='description'>
                        I am <strong>Houssem Bahri</strong> , also known as <strong>@ElBahri</strong>, a front-end and mobile developer living in Nabeul, Tunisia.
                        I enjoy using the React ecosystem, especially to develop iOS and Android  applications. I also like working on web projects .
                    </section>
                </div>
                <div className='right-container'>
                    <img className='image-container' src={React_logo} />
                </div>
            </div>
        </section>
    )
}