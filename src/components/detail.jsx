import React from "react";
// myStore

// @observer
function Details(props) {
  const handleClick = e => {
    props.handleButtonClick("Details page data");
  };
  return (
    <div className="Details">
      <b>User Number: {props.userId}</b>
      {/*{myStore.userId}*/}
      <button onClick={event => handleClick(event)}>Details Button</button>
    </div>
  );
}

export default Details;
