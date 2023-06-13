import { FunctionComponent } from "react"
import Event from "../../models/event"
import "./event-card.css"
import { FormatEventDate } from "../../helpers/formatEventDate"

type Props = {
    event: Event
}

const EventCard: FunctionComponent<Props> = ({ event }) => {
    return (
        <div className="event-card">
            <div>
                <div className="event-org">
                    <img
                        src={event.hotel.picture}
                        alt={event.hotel.name}
                        width={50}
                    />
                    <br />
                    <span>{event.hotel.name}</span>
                </div>
                <div className="event-description">
                    <span>Le {FormatEventDate(new Date(event.eventDate))}</span>
                    <br />
                    <span className="event__name">{event.name}</span>
                    <br />
                    <p className="event__place">{event.eventPlace}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard
