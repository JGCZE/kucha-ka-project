import { Link } from "react-router-dom"

const Menu = () => {
    return (
        <div>
            <Link to="/">Hlavní menu</Link>
            <Link to="/add-material">Přidání materialu</Link>
           
        </div>
    )
}

export default Menu
