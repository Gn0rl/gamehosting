import terrariaImg from '../Images/terraria.jpeg';
const GameComponent = (props) => {
    return (
        <div>
            <div className="mainGameBlock">
                <img src={terrariaImg} alt={'a'} className={'GameImg'}/>
                <span><h1 className={'gameName'}>{props.GameName}</h1></span>
                <p className="description">{props.description}</p>
                <button className="BtnDonload"><a href='https://disk.yandex.ru/d/EOHk86vIT9XVEQ'>Скачать</a></button>
            </div>
        </div>
    );
};

export default GameComponent;