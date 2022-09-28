import { Outlet } from "react-router-dom"
import Footer from "../components/HomeComponents/Footer/Footer"
import Label1 from "../components/HomeComponents/LabelComponents/Label1"
import Label2 from "../components/HomeComponents/LabelComponents/Label2"
import Label3 from "../components/HomeComponents/LabelComponents/Label3"

export const HomeLayout=()=>{
    return (
        <>
            <header>
                <Label1/>
                <Label2/>
                <Label3/>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}