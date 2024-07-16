import { DELETE_RESERVATION_ERROR, DELETE_RESERVATION_PENDING, DELETE_RESERVATION_SUCCESS, DELETE_ROOMLIST_ERROR, DELETE_ROOMLIST_PENDING, DELETE_ROOMLIST_SUCCESS, GET_RESERVATION_PENDING, GET_RESERVATION_SUCCESS, GET_ROOMDETAILS_ERROR, GET_ROOMDETAILS_PENDING, GET_ROOMDETAILS_SUCCESS, GET_ROOMLIST_ERROR, GET_ROOMLIST_PENDING, GET_ROOMLIST_SUCCESS, GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, POST_RESERVATION_ERROR, POST_RESERVATION_PENDING, POST_RESERVATION_SUCCESS, POST_ROOMLIST_ERROR, POST_ROOMLIST_PENDING, POST_ROOMLIST_SUCCESS, UPDATE_RESERVATION_ERROR, UPDATE_RESERVATION_PENDING, UPDATE_RESERVATION_SUCCESS, UPDATE_ROOMLIST_ERROR, UPDATE_ROOMLIST_PENDING, UPDATE_ROOMLIST_SUCCESS } from "../action/action";

let initialState = {
    roomdetails: [],
    roomlist: [],
    reservation: [],
    isLoading: false,
    isError: null

}

let userReducer = (state = initialState, action) => {
    console.log(action, "action from reducer");
    switch (action.type) {
        // get api

        case GET_ROOMDETAILS_PENDING, POST_ROOMLIST_PENDING, GET_ROOMLIST_PENDING, GET_RESERVATION_PENDING, POST_RESERVATION_PENDING, DELETE_RESERVATION_PENDING, UPDATE_RESERVATION_PENDING,DELETE_ROOMLIST_PENDING,UPDATE_ROOMLIST_PENDING: {


            return {
                isLoading: true,
                ...state,
            };
        }
        case GET_ROOMDETAILS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                roomdetails: action.data,
            };
        }
        case GET_ROOMLIST_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                roomlist: action.data,
            };
        }

        case GET_RESERVATION_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                reservation: action.data,
            };
        }


        case GET_ROOMDETAILS_ERROR, GET_ROOMLIST_ERROR, POST_RESERVATION_ERROR, UPDATE_RESERVATION_ERROR, POST_ROOMLIST_ERROR,UPDATE_ROOMLIST_ERROR: {
            return {
                ...state,
                isError: action.data.data,

            }
        }


        //   post 
        case POST_RESERVATION_SUCCESS: {
            return {
                isLoading: false,
                reservation: state.reservation.concat(action.data)
            }
        }

        case POST_ROOMLIST_SUCCESS: {
            return {
                isLoading: false,
                roomlist: state.roomlist.concat(action.data)
            }
        }





        // delete 

        case DELETE_RESERVATION_SUCCESS: {
            return {
                isLoading: false,
                reservation: state.reservation.filter((val) => val.id !== action.data.id)
            }
        }
       

        case DELETE_RESERVATION_ERROR: {
            return {
                isLoading: false,
                isError: action.data
            }
        }


        case DELETE_ROOMLIST_SUCCESS: {
            return {
                isLoading: false,
                roomlist: state.roomlist.filter((val) => val.id !== action.data.id)
            }
        }

        case DELETE_ROOMLIST_ERROR: {
            return {
                isLoading: false,
                isError: action.data
            }
        }


        //   update
        case UPDATE_RESERVATION_SUCCESS: {
            return {
                isLoading: false,
                reservation: state.reservation.map((val) => {
                    if (val.id == action.data.id) {
                        return {
                            ...val,
                            ...action.data
                        }
                    } else {
                        return val;

                    }
                })
            }
        }

        case UPDATE_ROOMLIST_SUCCESS: {
            return {
                isLoading: false,
                roomlist: state.roomlist.map((val) => {
                    if (val.id == action.data.id) {
                        return {
                            ...val,
                            ...action.data
                        }
                    } else {
                        return val;

                    }
                })
            }
        }


        //default
        default: {
            return {
                ...state
            }
        }
    }
}

export default userReducer;