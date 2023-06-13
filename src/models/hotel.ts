export default class Hotel{
    id: string;
    name: string;
    place: string;
    picture: string;
    picture360?: string;

    constructor(
        id: string,
        name: string,
        place: string,
        picture: string,
        picture360: string
    ){
        this.id = id;
        this.name = name;
        this.place = place;
        this.picture = picture;
        this.picture360 = picture360
    }
}