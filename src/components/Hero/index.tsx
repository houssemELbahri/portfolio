import profile from '../../public/combo.png'
import './hero.css'



export const Hero = () => {
    return (
        <section className='hero'>
            <div className='left-container'>
                <p className='greeting'>Hello !</p>
                <section className='description'>
                    I am Houssem Bahri, also known as @bahrouch, a front-end and mobile developer living in Nabeul, Tunisia.
                    I enjoy using the React ecosystem, especially to develop iOS and Android native applications. I also like working on open source projects or giving public talks.
                </section>
            </div>
            <div className='right-container'>
                <img className='image-container' src={profile} />
            </div>
        </section>
    )
}