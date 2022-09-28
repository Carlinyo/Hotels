import {BrowserRouter, Route, Routes} from "react-router-dom"
import { HomeLayout} from "./Layout/HomeLayout"
import Layout from "./Layout/Layout"
import Home from "./pages/HomePage/Home"
import Login from "./pages/LoginPage/Login"
import { MainPage } from "./pages/MainPage/MainPage"
import SignUp from "./pages/SignUpPage/SignUp"

function Router({}){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="" element={<Layout/>}>
                        <Route path="" element={<SignUp/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Route>
                    <Route path="/home" element={<HomeLayout/>}>
                        <Route path="/home" element={<MainPage/>}/>
                        <Route path="/home/:id" element={<Home/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router