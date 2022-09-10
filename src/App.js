import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Paths} from "./path";
import GamePage from "./Pages/game Page";
import MainPage from "./Pages/mainPage";
import CreatePanel from "./Pages/CreatePanel";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route key={Paths[0].id} path={Paths[0].path} element={<MainPage/>}/>
          <Route key={Paths[1].id} path={Paths[1].path} element={<GamePage/>}/>
          <Route key={Paths[2].id} path={Paths[2].path} element={<CreatePanel/>}/>
          <Route key={Paths[3].id} path={Paths[3].path} element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;