import terrariaImg from '../Images/terraria.jpeg';
import ReactPlayer from 'react-player';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import {Paths} from '../path';

const GameComponent = (props) => {
    let [donload, setDonload] = useState(false),
    [load, setLoad] = useState(true);
        
    useEffect(()=> {
        setLoad(false)
    }, [])

    return (
        <div>
            {load && <h1>трейлер загружается...</h1>}
            <Link to={Paths[5].path}><button style={{borderRadius: "50%", width: "3rem", height: "3rem", fontSize: '1.7rem', marginLeft: "10%"}}>X</button></Link>
            <div id="Trealer">
                <ReactPlayer width={'100%'} height={'100%'} className='Video'
                    url={props.Trealer} controls={false} />
            </div>
            <div style={{display: "flex", marginTop: "1rem"}}>
                <div className="mainGameBlock">
                    <div className='ImgBlockImg'>
                        <img src={props.image} alt={'a'} className={'GameImg'}/>
                    </div>
                    <div className='TextBlockText'>
                    <span><h1 className={'gameName'}>{props.GameName}</h1></span>
                    <p className="description">{props.description}</p>
                    <span className={'info'}>
                        <h1 className={'gameVersion'}>v. {props.version}</h1>
                        {props.plathorms.map(plathorm => {
                            return <h2 className={'gameVersion plathorm'}>{plathorm}</h2>
                        })}
                        <h2 className={'gameVersion'}>{props.genre}</h2>
                    </span>
                    <button className="BtnDonload" onClick={() => {setDonload(!donload)}}>Скачать</button>
                    </div>
                </div>
                {donload &&
                    <div className="donloadWin">
                        <div>
                            <h1>Скачать на PC</h1>
                            <button className="BtnDonload BtnDonloadOn"><a href='https://disk.yandex.ru'>
                                Скачать</a></button>
                        </div>
                        <div>
                            <h1>Скачать на Android</h1>
                            <button className="BtnDonload BtnDonloadOn"><a href='https://disk.yandex.ru'>
                                Скачать</a></button>
                        </div>

                    </div>}
            </div>
            <div></div>
            <div className="images">
                {props.Images.map(image => {
                    return  <img src={image} className="img" alt=' '/>
                })}
            </div>
            <p>{props.longDiscription}</p>
        </div>
    );

};

export default GameComponent;