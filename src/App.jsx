import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllRoutes from "./data/routes-app";

import { Navbar } from "./components";

const App = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            {
                AllRoutes.map(({ id, routePath, routeElement }) => (
                    <Route key={id} path={routePath} element={routeElement} />
                ))
            }
        </Routes>
    </BrowserRouter>
);

export default App;