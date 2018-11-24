import React from "react";
import { connect } from "react-redux";
import QuoteBox from "./QuoteBox";
import { fetchQODFromAPI } from "../actions/qod";


class QODPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      QOD: props.QOD ? props.QOD : "",
      isFetching: props.isFetching ? props.isFetching : false,
      requestedAt: props.requestedAt ? props.requestedAt : ""
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchQODFromAPI());
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => ({
      QOD: nextProps.QOD,
      isFetching: nextProps.isFetching
    }));
  }
  render() {
    const isFetching = this.state.isFetching;
    if (isFetching) {
      return <p>Loading..</p>;
    } else
      return (
        <div>
          <QuoteBox qod={this.state.QOD} />
          <button
           onClick= {() => {
              this.props.dispatch(fetchQODFromAPI());
           }}> 
            Refresh
          </button>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    QOD: state.QOD,
    isFetching: state.isFetching,
    requestedAt: state.requestedAt
  };
};

export default connect(mapStateToProps)(QODPage);
