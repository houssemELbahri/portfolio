import { useForm, ValidationError, } from '@formspree/react';
import './contact.css'
import { FORM_KEY } from '../../constants';
import { useEffect } from 'react';



export const Contact = () => {
    const [state, handleSubmit, reset] = useForm(FORM_KEY);

    useEffect(()=> {
        if(state.succeeded){
            setTimeout(()=> {
                reset()
                set
            },2000)
        }
    },[state.succeeded])




    return (
        <section className='contact-container'>
            <h1 className='title'>Contact me</h1>
            <p className='description'>Contact me for more information and get notified when i publish something new .</p>
            <div className='flex form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='label-input'>
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
                    <div className='label-input' style={{ marginTop: "24px" }}>
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
            </div>
        </section>
    )
}