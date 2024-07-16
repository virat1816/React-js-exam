import { takeLatest } from "redux-saga/effects";
import { handle_delete_reservation, handle_delete_roomlist, handle_get_reservation, handle_get_roomlist, handle_get_user, handle_post_reservation, handle_post_roomlist, handle_update_reservation, handle_update_roomlist } from "../user/manageUser";
import { DELETE_RESERVATION_PENDING, DELETE_ROOMLIST_PENDING, GET_RESERVATION_PENDING, GET_ROOMDETAILS_PENDING, GET_ROOMLIST_PENDING, GET_USER_PENDING, POST_RESERVATION_PENDING, POST_ROOMLIST_PENDING, UPDATE_RESERVATION_PENDING, UPDATE_ROOMLIST_PENDING } from "../../user/action/action";

function* handle_get_user_saga(){
    yield takeLatest(GET_ROOMDETAILS_PENDING,handle_get_user)
}
function* handle_get_roomlist_saga(){
    yield takeLatest(GET_ROOMLIST_PENDING,handle_get_roomlist)
}

function* handle_post_reservation_saga(){
    yield takeLatest(POST_RESERVATION_PENDING,handle_post_reservation)
}

function* handle_get_reservation_saga(){
    yield takeLatest(GET_RESERVATION_PENDING,handle_get_reservation)
}

function* handle_delete_reservation_saga(){
    yield takeLatest(DELETE_RESERVATION_PENDING,handle_delete_reservation)
}

function* handle_update_reservation_saga(){
    yield takeLatest(UPDATE_RESERVATION_PENDING,handle_update_reservation)
}

function* handle_post_roomlist_saga(){
    yield takeLatest(POST_ROOMLIST_PENDING,handle_post_roomlist)
}

function* handle_delete_roomlist_saga(){
    yield takeLatest(DELETE_ROOMLIST_PENDING,handle_delete_roomlist)
}
function* handle_update_roomlist_saga(){
    yield takeLatest(UPDATE_ROOMLIST_PENDING,handle_update_roomlist)
}
export{handle_get_user_saga,handle_get_roomlist_saga,handle_post_reservation_saga,handle_get_reservation_saga,handle_delete_reservation_saga,handle_update_reservation_saga,handle_post_roomlist_saga,handle_delete_roomlist_saga,handle_update_roomlist_saga}