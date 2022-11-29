import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllRoutes from "./data/routes-app";

const App = () => (
    <BrowserRouter>
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