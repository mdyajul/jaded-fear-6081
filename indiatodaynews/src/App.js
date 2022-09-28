import { Icon, Box, Image, Link, Grid, GridItem, HStack } from '@chakra-ui/react'
 
import './App.css';
import MiddleSide from './Middle/MiddleSide';
import NavbarA from './Navbar/NavbarA';
import NavbarB from './Navbar/NavbarB';


function App() {
  
   
  return (
    <div className="App">
  <NavbarA/>
  <NavbarB/>
  <MiddleSide/>
    </div>
  );
}

export default App;
