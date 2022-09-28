import {Link, Outlet} from "react-router-dom"

function Layout(){
    return (
    <>
     <nav>
        <ul>
            <li><Link to="">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/home">Home</Link></li>
        </ul>
     </nav>
     <Outlet/>
     </>
    )
}
export default Layout