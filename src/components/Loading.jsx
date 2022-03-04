import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center mt-3">
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Loading;
