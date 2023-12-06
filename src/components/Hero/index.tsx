import { MdDatasetLinked, MdMenu } from 'react-icons/md'
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import './hero.css'



export const Hero = () => {
    return (
        <section className='hero'>
            <section className=' image-container'>
                <img className='image' alt='Houssem Bahri' src='/houssem_algeria.jpg' />
            </section>
            <section className='title-container'>
                    Software Engineer, React/React Native
            </section>
            <section className='description-container'>Passionate about software development and technological innovation, I have acquired a strong experience in developing cross- platform mobile applications, enabling me to successfully tackle all the missions entrusted to me.    </section>
            <section className='flex    buttons-container'>
                <button className='SN-icon'>
                    <FaLinkedinIn size={35} />
                </button>
                <button className='SN-icon'>
                    <FaGithub size={35} />
                </button>
                <button className='SN-icon'>
                    <FaFacebookF size={35} />
                </button>
                <button className='SN-icon'>
                    <FaTwitter size={35} />
                </button>
            </section>
        </section>
    )
}