import { useEffect, useRef, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

const contactArray = "Contact Me".split("")
const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)

        return () => clearTimeout(timer)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_h0vroti',
                'template_n6piz06',
                refForm.current,
                'tvIiG9kTOr1okutYb'
            )
            .then(
                () => {
                    alert('Message Sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send, please try again.')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={contactArray}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am seeking internship opportunities for the 2023 summer and fall terms,
                        and am open to 4/8 month positions. However, feel free to contact me for any other inquiries.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input placeholder='Subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Saad Mazhar
                    <br />
                    Ottawa, ON
                    <br/>
                    <span> saadmazharr@gmail.com </span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[45.4215, -75.6972]} zoom={12}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                        <Marker position={[45.4215, -75.6972]}>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}

export default Contact