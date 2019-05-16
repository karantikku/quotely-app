import {
  FETCH_SEARCH_QUOTES_REQUEST,
  FETCH_SEARCH_QUOTES_RESPONSE,
  fetchSearchQuotesFromAPI
} from "../actions/searchQuote";

const defaultQODState = {
  quotes: [],
  isFetching: false,
  requestedAt: ""
};

export const searchQuoteReducer = (state = defaultQODState, action) => {
  console.log("action", action);
  switch (action.type) {
    case FETCH_SEARCH_QUOTES_REQUEST:
      return {
        ...state,
        isFetching: action.isFetching
      };
    case FETCH_SEARCH_QUOTES_RESPONSE:
      return {
        ...state,
        quotes: action.quotes,
        isFetching: action.isFetching,
        requestedAt: Date.now()
      };
    default:
      return state;
  }
};
