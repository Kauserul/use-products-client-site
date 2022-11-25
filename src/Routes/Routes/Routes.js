import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import HomeBanner from "../../Pages/Home/HomeBanner/HomeBanner";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <HomeBanner></HomeBanner>
            }
        ]
    }
])

export default router;