import axios from "axios";
import Hotel from "../models/hotel";

export default class HotelService{

    static getHotels(pageNumber: number): Promise<Hotel[]>{
        return axios
            .get(
                `http://localhost:3001/hotels?_page=${pageNumber}&_limit=5`
            )
            .then(res => res.data)
            .catch(error => this.handleError(error))
    }

    static getHotelById(id: number): Promise<Hotel>{
        return axios.get(
            `http://localhost:3001/hotels/${id}`
        )
        .then(res => res.data)
        .catch(error => this.handleError(error))
    }

    static handleError(error: Error): void {
        console.error(error);
    }
}