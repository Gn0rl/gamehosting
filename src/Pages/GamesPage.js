import Top from "../Components/Top";
import { GamesComponent} from "../Components/GamesComponent";
import '../css/Games.css'
import { Games } from "../Images/stateGame";
export function GamesPage() {

    return (
        <>
            <Top/>
            <div className="container">
                <GamesComponent games={Games}/>
            </div>
        </>
    )
}