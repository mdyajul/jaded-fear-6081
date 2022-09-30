import {Route, Routes, Link} from 'react-router-dom'
import Headline from "../Headline/Headline"
import MiddleSide from "../Middle/MiddleSide"
import Business from "../Pages/Business"
import India from "../Pages/India"
import Movies from "../Pages/Movies"
import MyFeed from "../Pages/MyFeed"
import Science from "../Pages/Science"
import Sports from "../Pages/Sports"
import World from "../Pages/World"
import Tech from "../Pages/Tech"
import PrivateRoute from '../Context/PrivateRoute'
import SingleUserPage from '../Middle/SinglePage'

function AllRoutes() {

    return <div>
         <Routes>
     <Route path='/' element ={
     <PrivateRoute>
         <MiddleSide/>
     </PrivateRoute>
    
     }>Home</Route>
     <Route path="/myfeed" element={
         
              <MyFeed/>
         
   
     } >My feed</Route>
     <Route path="/india" element={
        <PrivateRoute>
           <India/> 
        </PrivateRoute>
     
     } >INDIA</Route>
     <Route path="/world" element={
     <PrivateRoute>
        <World/>
     </PrivateRoute>
     
     } >WORLD</Route>
     <Route path="/business" element={
     <PrivateRoute>
        <Business/>
     </PrivateRoute>
     
     } >BUSINESS</Route>
     <Route path="/tech" element={
     <PrivateRoute>
        <Tech/>
     </PrivateRoute>
     
     } >TECH</Route>
     <Route path="/movies" element={
     <PrivateRoute>
        <Movies/>
     </PrivateRoute>
     
     } >MOVIES</Route>
     <Route path="/sports" element={
     <PrivateRoute>
        <Sports/>
     </PrivateRoute>
     
     } >SPORTS</Route>
     <Route path="/science" element={
     <PrivateRoute>
        <Science/>
     </PrivateRoute>
     
     } >SCIENCE</Route>
    <Route path="/everything/:user_id" element={
        <SingleUserPage/>
    }></Route>
    </Routes> 
    </div>
}

export default AllRoutes