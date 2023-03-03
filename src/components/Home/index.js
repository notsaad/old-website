import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';

const Home = () => {

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                <img src={LogoTitle} alt='developer'/>
                <br/>Saad Mazhar<br/>honours CS student</h1>
                <h2>@ the University of Ottawa, open to work!</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );

}

export default Home