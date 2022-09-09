import terrariaImg from '../Images/terraria.jpeg';
import trealerTerraria from '../Images/Terraria Journeys End (720p).mp4'
import YouTube from "react-youtube";

const GameComponent = (props) => {
    return (
        <div>
            <video autoPlay='autoplay' preload="auto" className="traler" controls>
                <source src={trealerTerraria} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'/>
            </video>
            {/*<YouTube videoId="H77Zfzy4LWw" className="traler"/>*/}
            <div className="mainGameBlock">
                <img src={terrariaImg} alt={'a'} className={'GameImg'}/>
                <span><h1 className={'gameName'}>{props.GameName}</h1></span>
                <p className="description">{props.description}</p>
                <span className={'info'}>
                    <h1 className={'gameVersion'}>v. {props.version}</h1>
                    <h2 className={'gameVersion plathorm'}>{props.plathorm}</h2>
                </span>
                <button className="BtnDonload"><a href='https://disk.yandex.ru/d/EOHk86vIT9XVEQ'>Скачать</a></button>
            </div>
            <div className="images">
                <img src={props.Images[0]} className="img"/>
                <img src={props.Images[1]} className="img"/>
                <img src={props.Images[2]} className="img"/>
            </div>
        </div>
    );
};

export default GameComponent;