import './css/App.css';
import {Routes, Route} from 'react-router-dom';
import {Paths} from "./path";
import MainPage from "./Pages/mainPage";
import CreatePanel from "./Pages/CreatePanel";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import { GamesPage } from './Pages/GamesPage';
import { Games } from './Images/stateGame';
import { Game } from './Pages/Game';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route key={Paths[0].id} path={Paths[0].path} element={<MainPage/>}/>
          <Route key={Paths[2].id} path={Paths[2].path} element={<CreatePanel/>}/>
          <Route key={Paths[3].id} path={Paths[3].path} element={<Profile/>}/>
          <Route key={Paths[4].id} path={Paths[4].path} element={<LoginPage/>}/>
          <Route key={Paths[5].id} path={Paths[5].path} element={<GamesPage/>}/>
          {Games.map(game => {
            return (
            <>
              <Route key={game.id + 10} path={ `/game/${ game.name.replace( ' ', '_' ) }`} 
            element={<Game name={game.name} img={game.img} 
            discription={game.description} longDiscription={game.longDiscription} Images={game.images} 
            version={game.version} genre={game.genre} plathorms={game.platforms} Trealer={game.Trealer} url={game.url}/>}/>
            </>
          )})}
      </Routes>
    </div>
  );
}

export default App;