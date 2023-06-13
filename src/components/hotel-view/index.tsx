import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer"
import { FunctionComponent, useState, useEffect } from "react"
import HotelService from "../../services/hotel-service"
import { useParams } from "react-router-dom"

const HotelView: FunctionComponent = () => {
    const [picture360, setPicture360] = useState<string>()
    const params = useParams()

    useEffect(() => {
        const id = params.id
        if (id) {
            HotelService.getHotelById(+id)
                .then((hotel) => setPicture360(hotel.picture360))
                .catch((error) => console.log(error))
        }
    })

    return (
        <div>
            {picture360 ? (
                <div
                    style={{
                        height: "100vh",
                        width: "50%",
                        margin: "50px auto",
                    }}
                >
                    <ReactPhotoSphereViewer
                        container={"#sphere"}
                        src={picture360}
                        height="70%"
                        width="100%"
                    />
                    <div id="sphere"></div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default HotelView
