//  Features of parcel .....

// HMR --> Hot Module Replacement
// File Watcher Algorithmn written in C++
// Bundling
// Cleaning our code
// Minify our code
// DEV and Production Build
// Super fast build algorithmn
// Image Optimization
// Caching while development
// Compression
// Compatible with older version of any browser
// DEV with https
// port number changes
// Consistent Hashing Algorithmn
// Zero Configuration
// Transitive Dependencies
//Tree Shaking - removing unwanted code

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurentMenu from "./components/RestaurentMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//const heading = React.createElement("h1", {}, "Hello Everyone !");

// Lazy loading
// On Demand loading
// Dynamic import
// Chunking
// Code Splitting

const Instamart = lazy(() => import("./components/Instamart"));
// Upon on demand loading -> upon render -> suspend loading

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Yuvraj Singh Chouhan",
    email: "yuvraj@gmail.com",
  });

  return (
    <React.Fragment>
      <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        {/* {Outlet} */}
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile name={"Yuvi"} />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurent/:id",
        element: <RestaurentMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path:"/cart",
        element:<Cart />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
