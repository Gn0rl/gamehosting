import './css/App.css';
import {Routes, Route} from 'react-router-dom';
import {Paths} from "./path";
import GamePage from "./Pages/game Page";
import MainPage from "./Pages/mainPage";
import CreatePanel from "./Pages/CreatePanel";
import Profile from "./Pages/Profile";
import LoginPage from "./Pages/LoginPage";
import { GamesPage } from './Pages/GamesPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route key={Paths[0].id} path={Paths[0].path} element={<MainPage/>}/>
          <Route key={Paths[1].id} path={Paths[1].path} element={<GamePage/>}/>
          <Route key={Paths[2].id} path={Paths[2].path} element={<CreatePanel/>}/>
          <Route key={Paths[3].id} path={Paths[3].path} element={<Profile/>}/>
          <Route key={Paths[4].id} path={Paths[4].path} element={<LoginPage/>}/>
          <Route key={Paths[5].id} path={Paths[5].path} element={<GamesPage/>}/>
      </Routes>
    </div>
  );
}

export default App;