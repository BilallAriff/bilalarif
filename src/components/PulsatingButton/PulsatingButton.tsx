import Button from "@mui/material/Button";
import React from "react";

const PulsatingButton = (props: {
  onClick?: any;
  text?: any;
  endIcon?: any;
}) => {
  const { endIcon } = props;

  return (
    <span>
      <div className="pulsating-container">
        <div className="pulse">
          <span
            className="pulse-layers"
            style={{ "--i": 0 } as React.CSSProperties}
          ></span>
          <span
            className="pulse-layers"
            style={{ "--i": 1 } as React.CSSProperties}
          ></span>
          <span
            className="pulse-layers"
            style={{ "--i": 2 } as React.CSSProperties}
          ></span>
          <span
            className="pulse-layers"
            style={{ "--i": 3 } as React.CSSProperties}
          ></span>
          <p onClick={props?.onClick}>
            {props?.text}
            {endIcon && endIcon}
          </p>
        </div>
      </div>
    </span>
  );
};

export default PulsatingButton;
