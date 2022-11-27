import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Products from "../../Pages/Products/Products";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import DashboardLayout from "../../layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard";


const router = createBrowserRouter([
    {
        path : '/',
        errorElement: <ErrorPage></ErrorPage>,
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/products/:category',
                element : <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader : ({params}) => fetch(`http://localhost:5000/products/${params.category}`)
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path : '/register',
                element: <Register></Register>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            
        ]
    },
    {
        path : '/dashboard',
        element : <DashboardLayout></DashboardLayout>,
        children : [
            {
                path : '/dashboard',
                element : <Dashboard></Dashboard>
            }
        ]
    }
])

export default router;