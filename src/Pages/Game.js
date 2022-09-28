import ReactPlayer from 'react-player';
import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import {Paths} from '../path';

export const Game = (props) => {
    let [load, setLoad] = useState(true);
    
 
    useEffect(()=> {
        setTimeout(() => {
            setLoad(false)
        }, 10000)
    }, [])

    return (
        <div className='container'>
            {load && <h1 className='Video' style={{color: 'white'}}>трейлер загружается...</h1>}
            <Link to={Paths[5].path}><button className='exit'>X</button></Link>
            <ReactPlayer className='Video'
                url={props.Trealer} controls={false} />
            <div style={{display: "flex", marginTop: "1rem"}}>
                <div className="mainGameBlock">
                    <div className='ImgBlockImg'>
                        <img src={props.img} alt={'a'} className={'GameImg'}/>
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
                    <button className="BtnDonload"><a href={props.url}>
                                Скачать</a></button>
                    </div>
                </div>
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

