import GenerateID from "./MainCountingIDs";

import { ErrorPage, ForgetPassword, Home, Offers, Profile, SignIn, SignUp } from "../pages";

const routesApp = [
    { routePath: "/", routeElement: <Home /> },
    { routePath: "/signup", routeElement: <SignUp /> },
    { routePath: "/signin", routeElement: <SignIn /> },
    { routePath: "/profile", routeElement: <Profile /> },
    { routePath: "/forget-password", routeElement: <ForgetPassword /> },
    { routePath: "/offers", routeElement: <Offers /> },
    { routePath: "*", routeElement: <ErrorPage /> }
];

(() => GenerateID.insert(GenerateID.counting, routesApp))();

export default routesApp;