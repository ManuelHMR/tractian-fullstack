import { BrowserRouter, Routes, Route } from "react-router-dom";

import UnitsPage from "../pages/UnitsPage";
import HomePage from "../pages/HomePage";

export default function App(){
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage/> } />
                <Route path="/company/:companyId" element={ <UnitsPage/> } />
            </Routes>
        </BrowserRouter>  
    );
};