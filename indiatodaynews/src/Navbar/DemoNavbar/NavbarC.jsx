 
import { useContext } from 'react';
import {useRef} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import AllRoutes from '../AllRoutes';
import DrawerExample from '../Drawer';
import '../Styles/main.css';
import {Box} from "@chakra-ui/react"

function NavbarC() {
    const navRef = useRef();
     
   const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

    return (
        <>
      
        <header>

              <DrawerExample/>  
        
       
        <nav ref={navRef}>
        <Link _hover={{color:'orange'}} to='/'>HOME</Link>

        <Link color='orange' to='/myfeed'>MY FEED</Link>

        <Link _hover={{color:'orange'}} to='/india'>INDIA</Link>

        <Link _hover={{color:'orange'}} to='/world'>WORLD</Link>
        <Link _hover={{color:'orange'}} to='/business'>BUSINESS</Link>
        <Link _hover={{color:'orange'}} to='/tech'>TECH</Link>
        <Link _hover={{color:'orange'}} to='/movies'>MOVIES</Link>
        <Link _hover={{color:'orange'}} to='/sports'>SPORTS</Link>
        <Link _hover={{color:'orange'}} to='/science'>SCIENCE</Link>

            <button
                className="nav-btn nav-close-btn"
                onClick={showNavbar}>
                <FaTimes />
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
        </button>
    </header>
    <AllRoutes/>
    </>
    )
}
export default NavbarC