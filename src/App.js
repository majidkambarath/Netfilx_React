
import React from "react";
import './App.css'
import { original , action } from './url'
import Banner from "./componets/Banner/Banner";
import NavBar from "./componets/NavBar/NavBar";
import RowPost from "./componets/RowPoster/RowPost";
import SubRow from "./componets/RowPoster/SubRow";



function App() {
  return (
    <div className="home">
     <NavBar/>
     <Banner/>
     <RowPost url={original} title='Netflix Originals' />
     {/* <RowPost url={action} title='Action' isSmall /> */}
     <SubRow url={action} />
    
    </div>
  );
}
export default App;
