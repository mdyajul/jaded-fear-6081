import {useContext} from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from './AppContext'
 


function PrivateRoute({children}) {
    const {authState} = useContext(AppContext)
    if(!authState.isAuth) {
        return <Navigate to="/myfeed" />
         
    }
    return children
}

export default PrivateRoute;