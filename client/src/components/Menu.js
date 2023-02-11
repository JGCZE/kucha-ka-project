import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext/GlobalContext"

const Menu = () => {
    const {surovina} = useContext(GlobalContext)
    
    return (
        <div className="menu">
            <Link to="/">Hlavní menu</Link>
            <Link to="/add-material">Přidání materialu</Link>
            <div>{surovina}</div>
        </div>
    )
}

export default Menu
