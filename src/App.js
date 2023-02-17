import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./App.css"
import Banner from "./components/banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {action, originals, horror, comedy, documentaries} from './urls'



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Banner />
      <RowPost  url={originals} title='Netflix Origin' />
      <RowPost  url={action} title='Action Movies' isSmall />
      <RowPost  url={horror} title='Horror Movies' isSmall />
      <RowPost  url={comedy} title='Comedy Movies' isSmall />
      <RowPost  url={documentaries} title='Documentaries Movies' isSmall />
      </header>
    </div>
  );
}

export default App;
