import '../css/top.css';
import Logo from '../Images/Logo.png';
import Logo2 from './User.png';
import {Link} from 'react-router-dom';
import { Paths } from '../path';

export default function Top()
{
    return(
        <div>
            <div style={{display: 'inline-flex'}}>
                <div className='logo'>
                    <div>
                    <Link to={Paths[0].path}><img src={Logo} alt='GAYPORNO'/></Link>
                    </div>
                    <div className='logoname'>
                        <span>GAMEHOSTING</span>
                    </div>
                </div>
                <div className='Prifle'>
                    <Link to={Paths[1].path}><img src={Logo2} alt='GAYPORNO'/></Link>
                </div>
            </div>
            <div style={{border: '1px solid #004d40'}}></div>
        <nav className='navLink'>
            
            <Link className='navLink' to={Paths[1].path}>Terraria</Link>
        </nav>
        </div>
    );
}
