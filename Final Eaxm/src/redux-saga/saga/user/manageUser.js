import { call, put } from "redux-saga/effects";
import { delete_reservation, delete_roomlist, get_reservationlist, get_roomlist, get_user, post_reservation, post_roomlist, update_reservation, update_roomlist } from "../../user/api/api";
import { DELETE_RESERVATION_ERROR, DELETE_RESERVATION_SUCCESS, DELETE_ROOMLIST_ERROR, DELETE_ROOMLIST_SUCCESS, GET_RESERVATION_ERROR, GET_RESERVATION_SUCCESS, GET_ROOMDETAILS_ERROR, GET_ROOMDETAILS_SUCCESS, GET_ROOMLIST_ERROR, GET_ROOMLIST_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_RESERVATION_ERROR, POST_RESERVATION_SUCCESS, POST_ROOMLIST_ERROR, POST_ROOMLIST_SUCCESS, UPDATE_RESERVATION_ERROR, UPDATE_RESERVATION_SUCCESS, UPDATE_ROOMLIST_ERROR, UPDATE_ROOMLIST_SUCCESS } from "../../user/action/action";

//room details
function* handle_get_user(action) {
    console.log(action , "action manage user");
    try {
        let { data, status } = yield call(get_user, action);
        console.log(data, )
        if (status == 200) {
            yield put({ type: GET_ROOMDETAILS_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ROOMDETAILS_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_ROOMDETAILS_ERROR, error })
    }
}

//roomlist
function* handle_get_roomlist(action) {
    console.log(action , "action manage user");
    try {
        let { data, status } = yield call(get_roomlist, action);
        console.log(data, )
        if (status == 200) {
            yield put({ type: GET_ROOMLIST_SUCCESS, data })
        }
        else {
            yield put({ type: GET_ROOMLIST_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_ROOMLIST_ERROR, error })
    }
}
function* handle_post_roomlist(action) {
    try {
        let { data, status } = yield call(post_roomlist, action)

        if (status == 200 || status == 201) {
            yield put({ type: POST_ROOMLIST_SUCCESS, data })
        }
        else {
            yield put({ type: POST_ROOMLIST_ERROR, data })

        }
    }
    catch (err) {
        yield put({ type: POST_ROOMLIST_ERROR, err });
    }

}
function* handle_delete_roomlist(action) {
    console.log(action, "action from manage");
    try {

        let { data, status } = yield call(delete_roomlist, action)

        if (status == 200) {
            yield put({ type: DELETE_ROOMLIST_SUCCESS, data })
        } else {
            yield put({ type: DELETE_ROOMLIST_ERROR, data })
        }

    } catch (err) {
        yield put({ type: DELETE_ROOMLIST_ERROR, err })
    }
}
function* handle_update_roomlist(action) {
    console.log(action, "action from manage");
    try {

        let { data, status } = yield call(update_roomlist, action)

        if (status == 200) {
            yield put({ type: UPDATE_ROOMLIST_SUCCESS, data })
        } else {
            yield put({ type: UPDATE_ROOMLIST_ERROR, data })
        }

    } catch (err) {
        yield put({ type: UPDATE_ROOMLIST_ERROR, err })
    }
}




//roomreservation
function* handle_get_reservation(action) {
    console.log(action , "action manage user");
    try {
        let { data, status } = yield call(get_reservationlist, action);
        console.log(data, )
        if (status == 200) {
            yield put({ type: GET_RESERVATION_SUCCESS, data })
        }
        else {
            yield put({ type: GET_RESERVATION_ERROR, data })
        }
    } catch (error) {
        yield put({ type: GET_RESERVATION_ERROR, error })
    }
}


function* handle_post_reservation(action) {
    try {
        let { data, status } = yield call(post_reservation, action)

        if (status == 200 || status == 201) {
            yield put({ type: POST_RESERVATION_SUCCESS, data })
        }
        else {
            yield put({ type: POST_RESERVATION_ERROR, data })

        }
    }
    catch (err) {
        yield put({ type: POST_RESERVATION_ERROR, err });
    }

}


function* handle_delete_reservation(action) {
    console.log(action, "action from manage");
    try {

        let { data, status } = yield call(delete_reservation, action)

        if (status == 200) {
            yield put({ type: DELETE_RESERVATION_SUCCESS, data })
        } else {
            yield put({ type: DELETE_RESERVATION_ERROR, data })
        }

    } catch (err) {
        yield put({ type: DELETE_RESERVATION_ERROR, err })
    }
}


function* handle_update_reservation(action) {
    console.log(action, "action from manage");
    try {

        let { data, status } = yield call(update_reservation, action)

        if (status == 200) {
            yield put({ type: UPDATE_RESERVATION_SUCCESS, data })
        } else {
            yield put({ type: UPDATE_RESERVATION_ERROR, data })
        }

    } catch (err) {
        yield put({ type: UPDATE_RESERVATION_ERROR, err })
    }
}

export{handle_get_user,handle_post_roomlist,handle_get_roomlist,handle_get_reservation ,handle_post_reservation,handle_delete_reservation,handle_update_reservation,handle_delete_roomlist,handle_update_roomlist}