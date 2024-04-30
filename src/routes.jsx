import { Route, Routes } from "react-router-dom";
import AllNews from "./All";
import Home from "./home";

const AppRouter = ()=>{
    return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/all" element={<AllNews/>}/>
        </Routes>
    )
}

export default AppRouter