import axios from "axios";
import { DELETE_RESERVATION, DELETE_ROOMLIST, GET_RESERVATION, GET_ROOMDETAILS, GET_ROOMLIST, GET_USER, POST_RESERVATION, POST_ROOMLIST, PUT_RESERVATION, PUT_ROOMLIST, base_url } from "../../constant";

//ROOM DETAILS ===============================================
let get_user = (action) => {

    console.log(action, "action from api");
    //console.log("action from get api");
    return axios.get(base_url + GET_ROOMDETAILS).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};

//ROOMLIST ================================================================
let get_roomlist = (action) => {

    console.log(action, "action from api");
    //console.log("action from get api");
    return axios.get(base_url + GET_ROOMLIST).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};


let post_roomlist = (action) => {
    console.log("action from post api");

    return axios.post(base_url + POST_ROOMLIST, action.payload).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

let delete_roomlist = (action) => {

    console.log("action from delete api");

    return axios.delete(base_url + DELETE_ROOMLIST + action.payload).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}
let update_roomlist = (action) => {

    console.log(action.payload,"action from update api");

    return axios.put(base_url + PUT_ROOMLIST + action.payload.id, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}

//RESERVATION =======================================================================
let get_reservationlist = (action) => {

    console.log(action, "action from api");
    //console.log("action from get api");
    return axios.get(base_url + GET_RESERVATION).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status };
    });
};



let post_reservation = (action) => {
    console.log("action from post api");

    return axios.post(base_url + POST_RESERVATION, action.payload).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}



let delete_reservation = (action) => {

    console.log("action from delete api");

    return axios.delete(base_url + DELETE_RESERVATION + action.payload).then((res) => {
        console.log(res);
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}



let update_reservation = (action) => {

    console.log(action.payload,"action from update api");

    return axios.put(base_url + PUT_RESERVATION + action.payload.id, action.payload).then((res) => {
        let data = res.data;
        let status = res.status;
        return { data, status }
    })
}
export { get_user,post_roomlist,delete_roomlist,update_roomlist, get_roomlist,post_reservation,get_reservationlist ,delete_reservation,update_reservation}