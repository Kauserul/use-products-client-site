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
import MyOrders from "../../Pages/Dashboard/MyOrders";
import AddAProduct from "../../Pages/Dashboard/AddAProduct";
import AllSellers from "../../Pages/Dashboard/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import MyProducts from "../../Pages/Dashboard/MyProducts";
import SellerRoutes from "../SellerRoutes/SellerRoutes";


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
                element : <MyOrders></MyOrders>
            },
            {
                path : '/dashboard/myorders',
                element : <MyOrders></MyOrders>
            },
            {
                path : '/dashboard/addproduct',
                element : <SellerRoutes><AddAProduct></AddAProduct></SellerRoutes>
            },
            {
                path : '/dashboard/myproducts',
                element : <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path : '/dashboard/allsellers',
                element : <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path : '/dashboard/allbuyers',
                element : <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
        ]
    }
])

export default router;