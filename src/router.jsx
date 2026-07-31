import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Counter from "./components/Counter/Counter.jsx";
import BgChanger from "./components/BgChanger/BgChanger.jsx";
import PasswordGen from "./components/PasswordGenerator/PasswordGen.jsx";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<App />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/bgchanger" element={<BgChanger />} />
            <Route path="/password-generator" element={<PasswordGen />} />
            <Route path="/currency-converter" element={<CurrencyConverter />} />
        </Route>
    )
)

export default router