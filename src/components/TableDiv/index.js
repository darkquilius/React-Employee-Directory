import React from "react";
import "./style.css";

function TableDiv(props) {

// (maybe image), first name, last name, username, email, phone number

return (
  <tr>
    <td className="content"><strong>{props.firstName}</strong></td>
    <td className="content"><strong>{props.lastName}</strong></td>
    <td className="content"><strong>{props.username}</strong></td>
    <td className="content"><strong>{props.email}</strong></td>
    <td className="content"><strong>{props.phone}</strong></td>
  </tr>
)

}

export default TableDiv;
