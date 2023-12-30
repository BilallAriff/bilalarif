import CommingSoon from "@/components/CommingSoon/CommingSoon";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

const page = () => {
  return (
    <Box
      className={"full-screen flex-all-center"}
      sx={{ flexDirection: "column" }}
    >
      <Typography variant={"h2"}>Adventurr Tech</Typography>
      <CommingSoon />
    </Box>
  );
};

export default page;
