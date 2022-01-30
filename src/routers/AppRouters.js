import { BrowserRouter, Routes, Route } from "react-router-dom";
import Caja from "../containers/Caja";


const AppRouters = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Caja />} />
            </Routes>        
        </BrowserRouter>
    )
}

export default AppRouters