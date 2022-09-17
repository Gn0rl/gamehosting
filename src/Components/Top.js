import '../css/top.css';
import Logo from '../Images/Logo.png';
import Logo2 from './User.png';
import {Link} from 'react-router-dom';
import { Paths } from '../path';

export default function Top()
{
    return(
        <div className='Container'>
            <div style={{display: 'inline'}}>
                <div className='logo'>
                    <div>
                    <Link to={Paths[0].path}><img src={Logo} alt='GAYPORNO'/></Link>
                    </div>
                    <div className='logoname'>
                        <span>GAMEHOSTING</span>
                    </div>
                </div>
                <div style={{display: 'inline'}}>
                    <Link to={Paths[3].path} className='Profile'><img src={Logo2} alt='GAYPORNO'/></Link>
                </div>
            </div>
            <div style={{border: '1px solid #004d40', marginBottom: '2rem'}}></div>
        </div>
    );
}
