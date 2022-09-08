import GameComponent from "../Components/GameComponent";
import GameImg1 from '../Images/imageInGame1.jpeg';
import GameImg2 from '../Images/imageInGame2.jpeg';
import GameImg3 from '../Images/imageInGame3.jpeg';
import Top from '../Components/Top';


const GamePage = () => {
    return (
        <div>
            <Top/>
            <div className="container">
                <GameComponent GameName={'Terraria'} description={'Описание игры terraria'} version={'1.4'} plathorm={'PC, Android'} Images={[GameImg1, GameImg2, GameImg3]}/>
            </div>
        </div>
    );
};

export default GamePage;