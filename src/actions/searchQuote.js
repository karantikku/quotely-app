import fetch from "cross-fetch";

export const FETCH_SEARCH_QUOTES_REQUEST = "FETCH_SEARCH_QUOTES_REQUEST";
export const FETCH_SEARCH_QUOTES_RESPONSE = "FETCH_SEARCH_QUOTES_RESPONSE";

export const fetchSearchQuotesRequest = () => {
  return {
    type: FETCH_SEARCH_QUOTES_REQUEST,
    isFetching: true
  };
};

export const fetchSearchQuotesResponse = json => {
  return {
    type: FETCH_SEARCH_QUOTES_RESPONSE,
    quotes: json.quotes,
    isFetching: false,
    recievedAt: Date.now()
  };
};

export const fetchSearchQuotesFromAPI = searchQuery => {
  return dispatch => {
    dispatch(fetchSearchQuotesRequest());
    const authHeader = {
      method: "GET",
      headers: {
        Authorization: 'Token token="cbfbfc76e65c179005f2827220b71c2d"'
      }
    };
    return fetch(
      "https://favqs.com/api/quotes/?filter=" + searchQuery,
      authHeader
    )
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => {
        dispatch(
          fetchSearchQuotesResponse({
            quotes: json.quotes
          })
        );
      });
  };
};
