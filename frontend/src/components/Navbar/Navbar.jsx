import React from 'react'
import "./Navbar.css"


const Navbar = () => {
     
    const [menu,setMenu] = useState("Led");

    return (
        <div className="navbar">
        <div className="nav-logo">
            <img src="{logo}" alt="" />
            <p>MYROOM.ke</p>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Led")}}>Led{menu==="Led"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Tapestry")}}>Tapestry{menu==="Tapestry"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("Stickers")}}>Stickers{menu==="Stickers"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("AOB")}}>AOB{menu==="AOB"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src="{cart-icon}" alt="" />

            </div>
        </div>
        </div>
    )
}

export default Navbar