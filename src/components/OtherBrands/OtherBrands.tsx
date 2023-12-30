import { Box } from "@mui/material";
import React from "react";

const OtherBrands = (props: { name: string }) => {
  const { name } = props;
  const Logo = () => {
    switch (name) {
      case "google":
        return <img width={"60px"} src={"/other_brands/google.png"} />;

      case "coursera":
        return <img width={"80px"} src={"/other_brands/coursera.png"} />;
      default:
        break;
    }
  };

  return (
    <Box>
      <Logo />
    </Box>
  );
};

export default OtherBrands;
