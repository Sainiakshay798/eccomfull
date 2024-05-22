import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ForgotPassword from '../pages/ForgotPassword'
import SingUp from '../pages/SingUp'

const router = createBrowserRouter([
{
    path : "/",
    element : <App/>,
    children:[
        {
            path : "",
            element : <Home/>
        },
        {
          path : "Login",
          element : <Login/> 

        },
        {
            path : "forgot-password",
            element : <ForgotPassword/>
        },
        {
            path:"sign-up",
            element:<SingUp/>
        }

    ]

    }

])


export default router;