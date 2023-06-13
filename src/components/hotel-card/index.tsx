import { FunctionComponent } from "react"
import Hotel from "../../models/hotel"
import "./hotel-card.css"
import { NavLink } from "react-router-dom"

type Props = {
    hotel: Hotel
}

const HotelCard: FunctionComponent<Props> = ({ hotel }) => {
    return (
        <div className="hotel-card" style={{ padding: "10px" }}>
            <p>Nom Hotel : {hotel.name}</p>
            <p>Place : {hotel.place}</p>
            <img src={hotel.picture} alt={hotel.name} height={100} />
            <br />
            <br />
            <NavLink
                to={`/hotels/${hotel.id}`}
                style={{
                    background: "black",
                    padding: "5px 10px",
                    color: "white",
                    cursor: "pointer",
                    textDecoration: "none",
                }}
            >
                View Detail
            </NavLink>
        </div>
    )
}

export default HotelCard
