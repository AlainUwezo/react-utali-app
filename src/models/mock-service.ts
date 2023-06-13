import Hotel from "./hotel";
import Monta from './../assets/img/hotels/Monta.png';
import Event from "./event";

export const HOTELS: Hotel[] = [{
    id: "asjsds2367182wdfa102",
    name: 'Hotel_1',
    place: 'Place_1',
    picture: Monta
},{
    id: "sajcb283912hfvfs9021",
    name: 'Hotel_2',
    place: 'Place_2',
    picture: Monta
},{
    id: "dkasaxzn2781980484ns",
    name: 'Hotel_3',
    place: 'Place_3',
    picture: Monta
},{
    id: "d831310djsfs09afafasas",
    name: 'Hotel_4',
    place: 'Place_4',
    picture: Monta
},{
    id:"3812jkksldadas9dfafczc3",
    name: 'Hotel_5',
    place: 'Place_5',
    picture: Monta
},{
    id: "sa1209cos0d9ada4lfn239",
    name: 'Hotel_6',
    place: 'Place_6',
    picture: Monta
},{
    id: "31821011nvd18ddj19dsdn",
    name: 'Hotel_7',
    place: 'Place_7',
    picture: Monta
},{
    id: "dijda9ad0amnfa190319d0",
    name: 'Hotel_8',
    place: 'Place_8',
    picture: Monta
},{
    id: "kio8021nd10801nd0109d1",
    name: 'Hotel_9',
    place: 'Place_9',
    picture: Monta
},{
    id: "iasqiyb189201931nnd191",
    name: 'Hotel_10',
    place: 'Place_10',
    picture: Monta
},{
    id: "rygbcuuw892100192nddjdn",
    name: 'Hotel_11',
    place: 'Place_11',
    picture: Monta
},{
    id: "2189dbbhsdas89da0921098",
    name: 'Hotel_12',
    place: 'Place_12',
    picture: Monta
},]


export const EVENTS:Event[] = [{
    id: 'dnajndja1219bfdanda',
    name: 'Event 1',
    eventDate: new Date(),
    eventPlace: 'Event place 1',
    hotel: HOTELS[0]
},{
    id: 'dnajndja12142r',
    name: 'Event 2',
    eventDate: new Date(2023, 7, 24, 12, 30),
    eventPlace: 'Event place 2',
    hotel: HOTELS[0]
}, {
    id: 'dnajndja1219bf20-01',
    name: 'Event 3',
    eventDate: new Date(),
    eventPlace: 'Event place 3',
    hotel: HOTELS[3]
}]