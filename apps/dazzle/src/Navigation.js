import { Link } from "react-router-dom";
import React from "react";

const style = { padding: 12, marginRight: 12, borderRight: "1px solid gray" };

const Navigation = () => (
  <ul style={style}>
    <li>
      <Link to="/">People</Link>
    </li>
    <li>
      <Link to="/admin/reviews/audit">Reviews</Link>
    </li>
  </ul>
);

export default Navigation;
