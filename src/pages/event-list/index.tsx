import { FunctionComponent, useState, useEffect } from "react"
import "react-calendar/dist/Calendar.css"
import { Value } from "react-calendar/dist/cjs/shared/types"
import Calendar from "react-calendar"
import EventService from "../../services/event-service"
import Event from "../../models/event"
import "./event-list.css"
import EventCard from "../../components/event-card"
import { FormatEventDate } from "../../helpers/formatEventDate"

const EventList: FunctionComponent = () => {
    const [eventList, setEventList] = useState<Event[]>([])
    const [selectedDate, setSelectedDate] = useState<Value>(new Date())

    useEffect(() => {
        EventService.getEventByDate(selectedDate).then((data) => {
            setEventList(data)
        })
    }, [selectedDate])

    //  Fonction pour modifier la date sélectionné et la valeur du calendrier
    const handleDateChange = (value: Value) => {
        EventService.getEventByDate(value).then((data) => {
            setEventList(data)
        })
        setSelectedDate(value)
    }

    return (
        <div className="event-list">
            <h1 className="event-list__title">Event List</h1>
            <div className="calendar">
                <Calendar onChange={handleDateChange} value={selectedDate} />
            </div>
            <div className="event-list-container">
                <h2>
                    {selectedDate &&
                        "Evénéments du " +
                            FormatEventDate(
                                new Date(selectedDate.toLocaleString())
                            ).split(" ")[0]}
                </h2>

                <div>
                    {eventList.length > 0 ? (
                        eventList.map((event) => (
                            <EventCard
                                key={event.id + event.name}
                                event={event}
                            />
                        ))
                    ) : (
                        <p>Aucun événement n'est prévu en ce jour</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventList
