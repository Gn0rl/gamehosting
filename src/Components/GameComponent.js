import terrariaImg from '../Images/terraria.jpeg';
import ReactPlayer from 'react-player';
import {useMemo, useState} from "react";
import { Link } from 'react-router-dom';
import {Paths} from '../path';

const GameComponent = (props) => {
    let [donload, setDonload] = useState(false),
        [heightTraler, setHeightTraler] = useState(40),
        [widthTraler, setWidthTraler] = useState(60);

    // (function Now() {
    //     window.addEventListener("scroll", () => {

    //         if( window.scrollY > 150 ) {
    //             setHeightTraler(10)
    //             setWidthTraler(10)
    //         } else {
    //             setHeightTraler(40);
    //             setWidthTraler(60);
    //         }
    //         })  
    //     }

    // ());
    let text = () => {
        let text = 'длинное описание игры Terraria';
        for (let i = 0; i < 150; i++) {
            text = text + 'длинное описание игры Terraria'
        }
        return text
    } 

    return (
        <div>
            <Link to={Paths[0].path}><button style={{borderRadius: "50%", width: "3rem", height: "3rem", fontSize: '1.7rem', marginLeft: "10%"}}>X</button></Link>
            <div style={{height: heightTraler + "rem", width: widthTraler + "rem"}} id="Trealer">
                <ReactPlayer width={'100%'} height={'100%'} className='Video'
                    url="https://www.youtube.com/watch?v=H77Zfzy4LWw" controls={false} />
            </div>
            <div style={{display: "flex", marginTop: "1rem"}}>
                <div className="mainGameBlock">
                    <div className='ImgBlockImg'>
                        <img src={terrariaImg} alt={'a'} className={'GameImg'}/>
                    </div>
                    <div className='TextBlockText'>
                    <span><h1 className={'gameName'}>{props.GameName}</h1></span>
                    <p className="description">{props.description}</p>
                    <span className={'info'}>
                        <h1 className={'gameVersion'}>v. {props.version}</h1>
                        <h2 className={'gameVersion plathorm'}>{props.plathorm}</h2>
                        <h2 className={'gameVersion'}>{props.genre}</h2>
                    </span>
                    <button className="BtnDonload" onClick={() => {setDonload(!donload)}}>Скачать</button>
                    </div>
                </div>
                {donload &&
                    <div className="donloadWin">
                        <div>
                            <h1>Скачать на PC</h1>
                            <button className="BtnDonload BtnDonloadOn"><a href='https://disk.yandex.ru/d/EOHk86vIT9XVEQ'>
                                Скачать</a></button>
                        </div>
                        <div>
                            <h1>Скачать на Android</h1>
                            <button className="BtnDonload BtnDonloadOn"><a href='https://disk.yandex.ru/d/EOHk86vIT9XVEQ'>
                                Скачать</a></button>
                        </div>

                    </div>}
            </div>
            <div></div>
            <div className="images">
                <img src={props.Images[0]} className="img" alt=' '/>
                <img src={props.Images[1]} className="img" alt=' '/>
                <img src={props.Images[2]} className="img" alt=' '/>
            </div>
            <p>{text()}
             
            </p>
        </div>
    );

};

export default GameComponent;