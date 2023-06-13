import { FunctionComponent, useEffect, useState } from "react"
import "./hotel-list.css"
import HotelCard from "../../components/hotel-card"
import Hotel from "../../models/hotel"
import InfiniteScroll from "react-infinite-scroll-component"
import HotelService from "../../services/hotel-service"

const HotelList: FunctionComponent = () => {
    const [hotels, setHotels] = useState<Hotel[]>([])
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        HotelService.getHotels(pageNumber).then((data) => {
            setHotels(data)
        })
    }, [pageNumber])

    const fetchData = () => {
        setPageNumber(pageNumber + 1)

        HotelService.getHotels(pageNumber).then((data) => {
            setHotels(hotels.concat(data))
        })
    }

    return (
        <>
            <h2 className="list-title">Home components</h2>

            <div className="hote-container">
                {hotels.map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel}></HotelCard>
                ))}
            </div>

            <InfiniteScroll
                dataLength={hotels.length} // On ajoute la data au scroll component
                next={fetchData}
                hasMore={true}
                loader={
                    <p className="loader-container">
                        <span className="loader"></span>
                    </p>
                }
            >
                {/* {hotels} */}
            </InfiniteScroll>
        </>
    )
}

export default HotelList
