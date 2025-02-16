import { Link } from "react-router-dom";
export function GamesComponent(props) {

    return (
        <>
            <div style={{textAlign: "center"}}>
                <h1>Игры</h1>
            </div>
            <div className="games">
                {props.games.map(game => {
                    if ( game.id === 4 ) {
                        return (
                            <div className="gameElement" key={ game.id }>
                            <Link to={ `/game/${ game.name.replace( ' ', '_' ) }` }>
                                { game.img && <img src={ game.img } className=" LongGameImg "/> }
                            </Link>
                        </div>
                        )
                    }
                    return (
                        
                        <div className="gameElement" key={ game.id }>
                            <Link to={ `/game/${ game.name.replace( ' ', '_' ) }` }>
                                { game.img && <img src={ game.img } className=" GameImg "/> }
                                <h1> { game.name } </h1>
                                { game.price && <h1> { game.price }₽ </h1> }
                            </Link>
                        </div>   
                    )
                })}
            </div>
        </>
    )
}