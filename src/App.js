import './App.css';
import {Routes, Route} from 'react-router-dom';
import {Paths} from "./path";
import GamePage from "./Pages/game Page";
import MainPage from "./Pages/mainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route key={Paths[0].id} path={Paths[0].path} element={<MainPage/>}/>
        <Route key={Paths[1].id} path={Paths[1].path} element={<GamePage/>}/>
      </Routes>
    </div>
  );
}

export default App;