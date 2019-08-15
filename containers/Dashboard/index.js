import React from "react";
import { withRouter } from "react-router-dom";
import { getBuckets, addNewBucket } from "../../shared/store";
import { connect } from "react-redux";
import { DashboardComponent } from "../../components";
class Dashboard extends React.Component {
  state = {
    addNewBucket: false,
    bucketname: ""
  };

  componentDidMount() {
    if (!localStorage.getItem("token")) {
      this.props.history.push(`${process.env.PUBLIC_URL}/`);
    } else {
      this.props.getBuckets();
    }
  }

  addNewBucket = () => {
    //Throw alert on empty submit
    if (!this.state.bucketname.length) {
      alert("Please enter name");
    } else {
      console.log(this.props);
      this.props.addNewBucket({ bucket_name: this.state.bucketname });
      // .then(res => console.log(res));
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = bucket => {
    localStorage.setItem("bucket", bucket.bucket_id);
    this.props.history.push(`${process.env.PUBLIC_URL}/bucket/todo`);
  };

  handleLogout = () => {
    this.props.history.push(`${process.env.PUBLIC_URL}`);
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
          handleChange={this.handleChange}
          bucketname={this.state.bucketname}
          handleLogout={this.handleLogout}
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
    getBuckets: () => dispatch(getBuckets()),
    addNewBucket: payload => dispatch(addNewBucket(payload))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
