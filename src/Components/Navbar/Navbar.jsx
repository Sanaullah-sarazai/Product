import { Link } from "react-router-dom";
import "./Navbar.css"


function Navbar(){
    return (
        <div className="Navbar">
      <Link className="link1" to="/">Home</Link> 
      <Link className="link1" to="/about">About</Link>      
      <Link className="link1" to="/product">Product</Link>           
        </div>
    )
}



export default Navbar;
