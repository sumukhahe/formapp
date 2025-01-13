import React from "react";
import "./UserCard.css";

export const UserCard = (props) => {
  return (
    <div className="user-card">
      <div className="user-card-left">
        <img
          className="user-img"
          src={props.data.picture.large}
          alt={`${props.data.name.first} ${props.data.name.last}`}
        />
        <h3>{`${props.data.name.first} ${props.data.name.last}`}</h3>
        <h4>
          {props.data.gender.charAt(0).toUpperCase() +
            props.data.gender.slice(1)}
        </h4>
      </div>

      <div className="user-card-right">
        <h3>Information</h3>
        <hr className="divider" />
        <div className="info-row">
          <span>Email</span>
          <span>Phone</span>
        </div>
        <div className="info-row">
          <p>{props.data.email}</p>
          <p>{props.data.phone}</p>
        </div>
        <hr className="divider" />
        <div className="info-row">
          <span>Address</span>
        </div>
        <p className="address">
          {props.data.location.street.number}, {props.data.location.city},{" "}
          {props.data.location.state}, {props.data.location.postcode}.
        </p>
      </div>
    </div>
  );
};
