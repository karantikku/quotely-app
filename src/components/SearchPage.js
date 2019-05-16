import React from "react";
import { connect } from "react-redux";
import { fetchSearchQuotesFromAPI } from "../actions/searchQuote";
import QuoteBox from "./QuoteBox";
class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      quotes: props.quotes ? props.quotes : [],
      isFetching: props.isFetching ? props.isFetching : false,
      requestedAt: props.requestedAt ? props.requestedAt : ""
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchSearchQuotesFromAPI());
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    this.setState(prevState => ({
      quotes: nextProps.quotes,
      isFetching: nextProps.isFetching
    }));
  }

  handleClick() {
    const searchQuery = document.getElementById("searchField").value;
    this.props.dispatch(fetchSearchQuotesFromAPI(searchQuery));
  }

  render() {
    return (
      <div>
        <div>
          <input id="searchField" type="text" placeholder="quote text filter" />
          <button onClick={this.handleClick}>Search</button>
        </div>
        {this.state.quotes.map(quote => {
          return <QuoteBox qod={quote.body} />;
        })}
        <div />
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("state", state);

  return {
    quotes: state.quotes.quotes
  };
};

export default connect(mapStateToProps)(SearchPage);
