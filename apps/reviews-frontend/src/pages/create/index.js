import React from "react";
import { Link } from "react-router-dom";

const style = {
  fontFamily: "arial",
  backgroundColor: "lavender",
  padding: 16,
};

const ReviewCreate = () => (
  <div style={style}>
    <h1>New Review Cycle</h1>
    <div style={{ marginBottom: 24 }}>
      <input type="text" placeholder="name" />
    </div>

    <Link to="/admin/reviews/audit">Back</Link>
    <p>
      <em>Page being provided by Reviews Frontend</em>
    </p>
  </div>
);

export default ReviewCreate;
