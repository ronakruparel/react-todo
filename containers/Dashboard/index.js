import React from "react";
import { withRouter } from "react-router-dom";
import { getBuckets } from "../../shared/store";
import { connect } from "react-redux";
import { DashboardComponent } from "../../components";
class Dashboard extends React.Component {
  state = {
    addNewBucket: false
  };
  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push(`${process.env.PUBLIC_URL}/`);
    } else {
      this.props.getBuckets();
    }
  }

  addNewBucket = () => {
    this.setState({
      addNewBucket: true
    });
  };

  handleClick = bucket => {
    localStorage.setItem("bucket", bucket.bucket_id);
    this.props.history.push(`${process.env.PUBLIC_URL}/bucket/todo`);
  };

  render() {
    const { buckets } = this.props;
    return (
      !buckets.loading &&
      buckets.loaded && (
        <DashboardComponent
          {...this.props}
          addNewBucket={this.addNewBucket}
          handleClick={this.handleClick}
        />
      )
    );
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
