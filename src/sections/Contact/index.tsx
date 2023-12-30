import { useForm, ValidationError } from '@formspree/react';
import './contact.css'
import { FORM_KEY } from '../../constants';



export const Contact = () => {
    const [state, handleSubmit] = useForm(FORM_KEY);


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
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor='message'>Your message:</label>
                        <textarea
                            required
                            name='message'
                            id="message">

                        </textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button className='submit' type='submit' disabled={state.submitting}>{state.submitting ? "submitting ... " : "Submit"}</button>
                    {state.succeeded && (
                        <p style={{fontSize:"18px",marginTop:"1.7rem",color:"#000000"}}>Your message has been sent successfuly </p>
                    )}
                </form>
                {/* <div className='animation'>
                    animation
                </div> */}
            </div>
        </section>
    )
}