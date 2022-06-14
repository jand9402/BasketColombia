import axios from "axios";
import swal from "sweetalert";
export const FILTER_BY_LOCATION = "FILTER_BY_LOCATION"
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY"
export const FILTER_BY_GENDER = "FILTER_BY_GENDER"
export const ALL_EVENTS = "ALL_EVENTS"


// export const getEvents = () => async (dispatch) => {
//     return await fetch("https://pf-commerce.herokuapp.com/api/products")
//       .then((response) => response.json())
//       .then((json) => {
//         dispatch({ type: GET_ALL_EVENTS, payload: json });
//       });
//   };


  export function locationFilter(value){
    return{
        type: FILTER_BY_LOCATION,
        payload: value
    }
}

export function categoryFilter(value){
  return{
      type: FILTER_BY_CATEGORY,
      payload: value
  }
}

export function genderFilter(value){
  return{
      type: FILTER_BY_GENDER,
      payload: value
  }
}


export function Events(value){
  return{
      type: ALL_EVENTS,
      payload: value
  }
}