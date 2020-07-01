import React from "react";
import { Link } from "react-router-dom";

const style = {
  fontFamily: "arial",
  backgroundColor: "lavender",
  padding: 16,
};

const border = { border: "1px solid rgba(0,0,0,0.2)", padding: 12 };

const ReviewAudit = () => (
  <div style={style}>
    <div>
      <h1>Reviews Audit Page</h1>

      <Link to="/admin/reviews/create">Create new review cycle</Link>
    </div>

    <table style={{ marginTop: 12 }}>
      <thead>
        <tr>
          <th style={border}>Name</th>
          <th style={border}>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={border}>Q2 Performance Review</td>
          <td style={border}>Active</td>
        </tr>
      </tbody>
    </table>
    <p>
      <em>Page being provided by Reviews Frontend</em>
    </p>
  </div>
);

export default ReviewAudit;
