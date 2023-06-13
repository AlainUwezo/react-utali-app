import axios from "axios";
import Event from "../models/event";

export default class EventService{

    static getEvents(): Promise<Event[]>{
        return axios
            .get(
                `http://localhost:3001/events`
            )
            .then(res => res.data)
            .catch(error => this.handleError(error))
    }

    static getEventByDate(date: any): Promise<Event[]>{
        // On récupère la date seulement en répérant le côté d'avant le T
        const selectedDate = new Date(date).toJSON().split('T')[0]
        console.log(selectedDate)
        return axios
            .get(
                `http://localhost:3001/events?eventDate_like=${selectedDate}`
            )
            .then(res => res.data)
            .catch(error => this.handleError(error))
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}