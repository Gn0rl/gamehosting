import Top from "../Components/Top";
import { GamesComponent} from "../Components/GamesComponent";

export function GamesPage() {

    return (
        <>
            <Top/>
            <div className="container">
                <GamesComponent/>
            </div>
        </>
    )
}