import React from "react";

function HomeCardComponent(props) {
  return (
    <div className="row card-div">
        <h1 className="home-card"> {props.title} </h1>{" "}
    </div>
  );
}

export default HomeCardComponent;
