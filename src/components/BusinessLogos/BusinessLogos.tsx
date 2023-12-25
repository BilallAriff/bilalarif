import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const BusinessLogos = () => {
  return (
    <div
      style={{
        // border: "1px solid red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a style={{ marginBottom: "-10px" }} href="https://www.upwork.com">
        <img
          className="freelance_business_logos"
          style={{ marginRight: "15px" }}
          height={30}
          src={"/business_icons/upwork_text.png"}
          alt={"upwork link"}
        />
      </a>
      <a href={"https://www.fiverr.com"}>
        <img
          className="freelance_business_logos"
          height={25}
          alt="fiverr link"
          src={"/business_icons/fiverr_text.png"}
        />
      </a>
    </div>
  );
};

export default BusinessLogos;
