import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Counter from "./components/Counter/Counter.jsx";
import BgChanger from "./components/BgChanger/BgChanger.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/bgchanger" element={<BgChanger />} />
        </Route>
    )
)

export default router