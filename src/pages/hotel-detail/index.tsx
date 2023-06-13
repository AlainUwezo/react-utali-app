import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import HotelService from "../../services/hotel-service"
import Hotel from "../../models/hotel"
import { NavLink } from "react-router-dom"

const HotelDetail = () => {
    const [hotel, setHotel] = useState<Hotel>()
    const params = useParams()

    useEffect(() => {
        const id = params.id
        if (id) {
            HotelService.getHotelById(+id)
                .then((hotel) => setHotel(hotel))
                .catch((error) => console.log(error))
        }
    })

    return (
        <div>
            {hotel ? (
                <div>
                    <p>Nom Hotel : {hotel.name}</p>
                    <p>Place : {hotel.place}</p>
                    <p>
                        <img
                            src={hotel.picture}
                            alt={hotel.name}
                            height={100}
                        />
                    </p>
                    {hotel.picture360 && (
                        <NavLink
                            to={`/hotels/${hotel.id}/view360`}
                            style={{
                                background: "black",
                                padding: "5px 10px",
                                color: "white",
                                cursor: "pointer",
                                textDecoration: "none",
                            }}
                        >
                            View 360 degre
                        </NavLink>
                    )}
                </div>
            ) : (
                <div>Hotel non trouvé</div>
            )}
        </div>
    )
}

export default HotelDetail
