import Logo from '../Images/Logo.png';
import '../css/main.css';
import ReactPlayer from 'react-player';

export default function MainComponent(props)
{
    return(
        <div className="conteiner">
            <div className='Logos' >
                <img className='mainLogo' src={Logo} alt='$'/>
                <div className='mainText'>
                <span>GAMEHOSTING</span>
                </div>
            </div>
            <span className='CompanyInfo'>
                <div className='Make'>
                    <div className='InfoListt'>
                        <div className='MakeLogo'>

                        </div>
                        <div className='MakeText'>
                            <h1>Соревнуйся!</h1>
                            <h2>Coming Soon</h2>
                        </div>
                    </div>
                    <div className='InfoListt'>
                        <div className='MakeLogo'>
                            
                        </div>
                        <div className='MakeText'>
                        <h1>Создавай!</h1>
                            <div>Создай любую игру</div>
                            <div>Отправь ссылку на облоко с игрой</div>
                            <div>Жди проверки и получай коментарии</div>
                            <div>Повышай свой рейтинг комментируя игры</div>
                        </div>
                    </div>
                    <div className='InfoListt'>
                        <div className='MakeLogo'>
                        
                        </div>
                        <div className='MakeText'>
                            <h1>Играй!</h1>
                            <div>Играй в игры других разработчиков!</div>
                            <div>Оценивай чужые игры</div>
                            <div>Повышай свой рейтинг комментируя игры</div>
                        </div>
                    </div>
                </div>
            </span>
        </div>
    )

}