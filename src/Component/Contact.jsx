import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"

export default function Contact() {

    let [show, setShow] = useState(false)
    let [err, setErr] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, {
                publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setShow(true)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setErr(true)
                },
            );
    };


    return (
        <>
            <section id="contact" className="contact sec-pad dynamicBg">
                <div className="main-container">
                    <h2 className="heading heading-sec heading-sec__mb-med">
                        <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                        <span className="heading-sec__sub heading-sec__sub--lt">
                            Feel free to Contact me by submitting the form below and I will get
                            back to you as soon as possible
                        </span>
                    </h2>
                    <div className="contact__form-container">
                        {
                            show ? <h2 className='heading-sec__sub heading-sec__sub--lt green'>Thanks For Contacting Me. I'll Get Back To You Soon !!! </h2> : ""
                        }
                        {
                            err ? <h2 className='heading-sec__sub heading-sec__sub--lt red'>Message Not Send. Please Try Again Later !!!</h2> : ""
                        }
                        <form className='contact__form' ref={form} onSubmit={sendEmail}>
                            <input type='hidden' name='form-name' value='form 1' />
                            <div className="contact__form-field">
                                <label className="contact__form-label" htmlFor="name">Name</label>
                                <input required placeholder="Enter Your Name" type="text" className="contact__form-input" name="user_name" id="name" />
                            </div>
                            <div className="contact__form-field">
                                <label className="contact__form-label" htmlFor="email">Email</label>
                                <input required placeholder="Enter Your Email" type="email" className="contact__form-input" name="user_email" id="email" />
                            </div>
                            <div className="contact__form-field">
                                <label className="contact__form-label" htmlFor="message">Message</label>
                                <textarea required cols="30" rows="10" className="contact__form-input" placeholder="Enter Your Message" name="message" id="message"> </textarea>
                            </div>
                            <button type="submit" className="btn btn--theme contact__btn">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
