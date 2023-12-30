import { Tooltip } from "@mui/material";
import React from "react";

const Tag = ({
  text,
  color = "#12003d",
  tooltip,
  variant,
}: {
  text: string;
  color?: any;
  variant?: string;
  tooltip?: string;
}) => {
  return (
    <Tooltip title={tooltip ? tooltip : text}>
      <div
        // className="tag"
        style={{
          //   border: "1px solid #12003d",
          width: "fit-content",
          //   backgroundColor: color,
          //   padding: "1px 10px",
          //   color: "#FFFFFF",
          fontSize: "14px",
          //   borderRadius: "50px",
        }}
      >
        {text},
      </div>
    </Tooltip>
  );
};

export default Tag;
