import { Icon, Box, Image, Link, Grid, GridItem, HStack } from '@chakra-ui/react'
 
import './App.css';
import Headline from './Headline/Headline';
import MiddleSide from './Middle/MiddleSide';
import NavbarA from './Navbar/NavbarA';
import NavbarB from './Navbar/NavbarB';
import NavbarC from './Navbar/DemoNavbar/NavbarC';
import React from 'react';
import AllRoutes from './Navbar/AllRoutes';

function App() {
  
   
  return (
    <>
  <NavbarA/>
  {/* <NavbarB/> */}
  <React.Fragment>
    <NavbarC/>
    
  </React.Fragment>
  

  
    </>
  );
}

export default App;
