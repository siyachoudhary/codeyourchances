import logo from './logo.svg';
import './App.css';
import { MyNav } from './components/MyNav';
import { Footer } from './components/Footer';

import { BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import {HomePage} from "./screens/HomePage"
import {About} from "./screens/About"
import {Apps} from "./screens/Apps"
import {Team} from "./screens/Team"
import {Projects} from "./screens/Projects"
import {Donate} from "./screens/Donate"
import { Privacy } from './screens/Privacy';
import { TeamMember } from './screens/TeamMember';
import { Apply } from './screens/Apply';
import { ProjectsFilms } from './screens/ProjectsFilms';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav/>
            <Routes>
                <Route path='/codeyourchances/' element={<HomePage/>}></Route>
                <Route path='/codeyourchances/about/' element={<About/>}></Route>
                <Route path='/codeyourchances/apps/' element={<Apps/>}></Route>
                <Route path='/codeyourchances/team/' element={<Team/>}></Route>
                <Route path='/codeyourchances/projects/' element={<Projects/>}></Route>
                <Route path='/codeyourchances/film-festivals/' element={<ProjectsFilms/>}></Route>
                <Route path='/codeyourchances/donate/' element={<Donate/>}></Route>
                <Route path='/codeyourchances/teamMember/' element={<TeamMember/>}></Route>
                <Route path='/codeyourchances/apply/' element={<Apply/>}></Route>
                <Route path='/codeyourchances/privacy/' element={<Privacy/>}></Route>
            </Routes>
          
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
