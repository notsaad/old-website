import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGitAlt, faHtml5, faJava, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'

const aboutArray = "About Me".split("")

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000)

        return () => clearTimeout(timer)
    }, []);

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={aboutArray}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm an extremely ambitious developer looking for internships, and opportunities to broaden my skillset
                    by working on challenging, new projects.
                </p>
                <p>
                    I would describe myself as curious, confident, and a natural leader who is always looking to learn new things
                    and implement them into my upcoming projects.
                </p>
                <p>
                    I am entering the 3rd year of my Honours Computer Science Major here at the University of Ottawa, however,
                    I have been coding and tinkering with technology as early as I can remember.
                </p>
                <p>
                    Feel free to contact me, or connect on LinkedIn for any questions, inquiries, opportunities, or
                    if you just want to chat!
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faPython} color="#ffde57" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJava} color="#1fbde6" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About
