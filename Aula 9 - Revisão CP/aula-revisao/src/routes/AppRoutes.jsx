import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import App from "../App";
import PageNotFound from "../pages/PageNotFound";


export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement: <PageNotFound/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            }
        ]
    }
    
])