import Top from "../Main Components/Top";
import { GamesComponent} from "../Main Components/GamesComponent";
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