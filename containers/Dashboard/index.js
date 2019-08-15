import React from "react";
import { withRouter } from "react-router-dom";
import { getBuckets } from "../../shared/store";
import { connect } from "react-redux";
class Dashboard extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push(`${process.env.PUBLIC_URL}/`);
    }
    this.props.getBuckets();
  }
  render() {
    return <div>hi</div>;
  }
}
const mapStateToProps = state => {
  return { buckets: state.buckets };
};

const mapDispatchToProps = dispatch => {
  return {
    getBuckets: () => dispatch(getBuckets())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
