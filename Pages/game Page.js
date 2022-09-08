import GameComponent from "../Components/GameComponent";

const GamePage = () => {
    return (
        <div className="container">
            <GameComponent GameName={'Terraria'} description={'Описание игры terraria'}/>
        </div>
    );
};

export default GamePage;