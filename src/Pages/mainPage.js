import MainComponent from "../Main Components/MainComponent";
import Top from '../Main Components/Top';


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