import '../css/top.css';
import User from '../Images/User.png';
import Logo from '../Images/Logo.png';
import {Link} from 'react-router-dom';
import { Paths } from '../path';

export default function Top()
{
    return(
        <div>
            <div style={{display: 'inline-flex'}}>
                <div className='logo'>
                    <div>
                        <img src={Logo} alt='GAYPORNO'/>
                    </div>
                    <div className='logoname'>
                        <span>GAMEHOSTING</span>
                    </div>
                </div>
                <div>
                    <img scr={User} alt='asd'/>
                </div>
            </div>
            <div style={{border: '1px solid #004d40'}}></div>
        <nav className='navLink'>
            <Link className='navLink' to={Paths[1].path}>Terraria</Link>
            <Link className='navLink' to={Paths[1].path}>Terraria2</Link>
            <Link className='navLink' to={Paths[1].path}>Terraria3</Link>
        </nav>
        </div>
    );
}
