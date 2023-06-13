import Hotel from "./hotel";

export default class Event{
    id: string;
    name: string;
    eventDate: Date;
    eventPlace: string;
    hotel: Hotel

    constructor(
        id: string,
        name: string,
        eventDate: Date,
        eventPlace: string,
        hotel: Hotel
    ){
        this.id = id;
        this.name = name;
        this.eventDate = eventDate;
        this.eventPlace = eventPlace;
        this.hotel = hotel;
    }
}