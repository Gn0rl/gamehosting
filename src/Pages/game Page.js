import GameComponent from "../Components/GameComponent";
import Top from "../Components/Top.js"

const GamePage = () => {
    return (
        <div className="container">
            <Top/>
            <GameComponent GameName={'Terraria'} description={'Описание игры terraria'}/>
        </div>
    );
};

export default GamePage;