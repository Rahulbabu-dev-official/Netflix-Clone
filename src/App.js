import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {Orginals,Action_Movies,Comedy_Movies,Horrer_Movies,Romantic_Movies,Documentries} from './Urls'
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost url={Orginals} title='Netflix Orginals'    />
        <RowPost url={Action_Movies} title='Action Movies' isSmall  />
        <RowPost url={Comedy_Movies} title='Comedy Movies'isSmall/>
        <RowPost url={Horrer_Movies} title='Horrer Movies'isSmall/>
        <RowPost url={Romantic_Movies} title='Romantic Movies'isSmall/>
        <RowPost url={Documentries} title='Documentries'isSmall/>

    </div>
  );
}

export default App;
