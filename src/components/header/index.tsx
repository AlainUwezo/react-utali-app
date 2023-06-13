import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import "./header.css"

const Header: FunctionComponent = () => {
    return (
        <div className="header">
            <Link to="/hotels" className="nav__link">
                Hotels
            </Link>
            <Link to="/events" className="nav__link">
                Evenements
            </Link>
        </div>
    )
}

export default Header
