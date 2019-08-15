import React from "react";
import "./style.css";
function DashboardComponent({
  buckets,
  addNewBucket,
  handleClick,
  bucketname,
  handleChange
}) {
  return (
    <div>
      <div className="header">
        <h1>To-do Application</h1>
      </div>
      <div style={{ textAlign: "center" }}>
        <h2>List of Buckets</h2>
      </div>
      <div>
        <input
          type="text"
          name="bucketname"
          placeholder="Type bucket name"
          value={bucketname}
          onChange={handleChange}
        />
        <button className="addBucket" onClick={addNewBucket}>
          Add New bucket
        </button>
        {/* <button className="addBucket" onClick={addTodo}>
          Add New Todo
        </button> */}
      </div>
      <div className="bucketWrapper">
        {buckets.buckets.data.map(bucket => {
          return (
            <div
              key={bucket.bucket_id}
              onClick={() => handleClick(bucket)}
              className="bucketListWrapper"
            >
              <label>{bucket.bucket_name}</label>
              {/* <span className="editIcon">Edit</span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DashboardComponent;
