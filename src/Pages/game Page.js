import GameComponent from "../Components/GameComponent";
import GameImg1 from '../Images/imageInGame1.jpeg';
import GameImg2 from '../Images/imageInGame2.jpeg';
import GameImg3 from '../Images/imageInGame3.jpeg';

let text = () => {
    let text = 'длинное описание игры Terraria';
    for (let i = 0; i < 150; i++) {
        text = `${text} длинное описание игры Terraria`
    }
    return text
} 

const GamePage = (props) => {
    return (
        <>
            <div className="container">
                <GameComponent GameName={props.name} description={props.description} version={props.version}
                 plathorms={props.plathorms} Images={props.Images}
                  genre={props.genre} longDiscription={props.longDiscription} image={props.img} Trealer={props.Trealer}/>
            </div>
        </>
    );
};

export default GamePage;