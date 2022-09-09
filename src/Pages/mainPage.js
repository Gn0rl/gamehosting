import MainComponent from "../Components/MainComponent";
import Top from '../Components/Top';


const GamePage = () => {
    return (
        <div>
            <Top/>
            <div className={"Container"}>
                <MainComponent/>
            </div>
        </div>
    );
};

export default GamePage;