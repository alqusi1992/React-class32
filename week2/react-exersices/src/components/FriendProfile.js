import React from "react";

function FriendProfile({ friend }) {
  return (
    <div>
      <ul>
        {Object.keys(friend).map((key, i) => (
          <div key={i}>
            <li>first name: {friend[key].name.first}</li>
            <li>last name: {friend[key].name.last}</li>
            <li>
              address: {friend[key].location.street.name}
              {friend[key].location.street.number}, {friend[key].location.city}
            </li>
            <li>country: {friend[key].location.country} </li>
            <li>email: {friend[key].email}</li>
            <li>phone number: {friend[key].phone}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default FriendProfile;
