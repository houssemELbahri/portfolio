import { useForm, ValidationError } from '@formspree/react';
import './contact.css'



export const Contact = () => {
    const [state, handleSubmit] = useForm('xoqgqqvq');


    return (
        <section className='contact-container'>
            <h1 className='title'>Contact us</h1>
            <p className='sub-title'>Contact us for more information and get notified when i publish something new .</p>
            <div className='flex'>
                <form  onSubmit={handleSubmit}>
                    <div className='flex'>
                        <label htmlFor='email'>Email address:</label>
                        <input
                            required
                            type='email'
                            name='email'
                            id='email'
                            placeholder='your email'
                        />
                    </div>
                    <ValidationError field="email" prefix="Email" errors={state.errors} />
                    <div  className='flex' style={{marginTop:"24px"}}>
                        <label htmlFor='message'>Your message:</label>
                        <textarea
                            required
                            name='message'
                            id="message">

                        </textarea>
                    </div>
                    <button className='submit' disabled={state.submitting}>Submit</button>
                </form>
                {/* <div className='animation'>
                    animation
                </div> */}
            </div>
        </section>
    )
}