import terrariaImg from '../Images/terraria.jpeg';
import ReactPlayer from 'react-player';
import {useState} from "react";

const GameComponent = (props) => {
    let [donload, setDonload] = useState(false),
        [heightTraler, setHeightTraler] = useState(40);
    (function Now() {
        if (heightTraler > 0) {
            window.addEventListener("scroll", () => {
                setHeightTraler(heightTraler -= 2)
            })
        }

    }());

    return (
        <div>
                <div style={{height: heightTraler + "rem", marginBottom: "10%"}} id="Trealer">
                    <ReactPlayer width={'100%'} height={'100%'} className='Video' url="https://www.youtube.com/watch?v=H77Zfzy4LWw" controls={false} />
                </div>
            <div style={{display: "flex"}}>
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
                    </span>
                    <button className="BtnDonload" onClick={() => {setDonload(!donload)}}>Скачать</button>
                    </div>
                </div>
                {donload &&
                    <div className="donloadWin">
                        <div>
                            <h1>Скачать на PC</h1>
                            <button className="BtnDonload BtnDonloadOn"><a href='https://disk.yandex.ru/d/EOHk86vIT9XVEQ'>Скачать</a></button>
                        </div>
                        <div>
                            <h1>Скачать на Android</h1>
                            <button className="BtnDonload BtnDonloadOn"><a href='https://disk.yandex.ru/d/EOHk86vIT9XVEQ'>Скачать</a></button>
                        </div>

                    </div>}
            </div>
            <div></div>
            <div className="images">
                <img src={props.Images[0]} className="img" alt=' '/>
                <img src={props.Images[1]} className="img" alt=' '/>
                <img src={props.Images[2]} className="img" alt=' '/>
            </div>
        </div>
    );

};

export default GameComponent;