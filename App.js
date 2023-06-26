import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurentMenu from "./src/components/RestaurentMenu";
import Error from "./src/components/Error";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

const AppLayout = () => {
    return (
        <>
           <Header/>
           <Outlet/>
           <Footer/>
        </>
    );
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/About",
                element: <About />,
                errorElement: <Error />
            },
            {
                path: "/Contact",
                element: <Contact />,
                errorElement: <Error />
            },
            {
                path: "/restaurent/:resId",
                element: <RestaurentMenu />,
                errorElement: <Error/>
            }
        ],
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={ appRouter} />);

