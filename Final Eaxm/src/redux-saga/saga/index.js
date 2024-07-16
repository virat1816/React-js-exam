
import { all } from "redux-saga/effects";
import { handle_delete_reservation_saga, handle_delete_roomlist_saga, handle_get_reservation_saga, handle_get_roomlist_saga, handle_get_user_saga, handle_post_reservation_saga, handle_post_roomlist_saga, handle_update_reservation_saga, handle_update_roomlist_saga } from "./rootSaga/userSaga";

function* rootSaga(){
    yield all([handle_get_user_saga(),handle_get_roomlist_saga(),handle_post_reservation_saga(),handle_get_reservation_saga(),handle_delete_reservation_saga(),handle_update_reservation_saga(),handle_post_roomlist_saga(),handle_delete_roomlist_saga(),handle_update_roomlist_saga()])
}
export default rootSaga