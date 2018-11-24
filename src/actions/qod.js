import fetch from "cross-fetch";

export const FETCH_QOD_REQUEST = "FETCH_QOD_REQUEST";
//export const FETCH_QOD_FAILURE = "FETCH_QOD_FAILURE";
export const FETCH_QOD_RESPONSE = "FETCH_QOD_RESPONSE";
export const INVALIDATE_QOD = "INVALIDATE_QOD";

export const fetchQOD = () => {
  return {
    type: FETCH_QOD_REQUEST,
    isFetching: true
  };
};

export const receiveQOD = json => {
  return {
    type: FETCH_QOD_RESPONSE,
    QOD: json.qod,
    author: json.author ,
    isFetching: false,
    receivedAt: Date.now()
  };
};

export const fetchQODFromAPI = () => {
  return dispatch => {
    dispatch(fetchQOD());
    return fetch(`https://favqs.com/api/qotd`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveQOD({ qod: json.quote.body, author: json.quote.author })));
  };
};
