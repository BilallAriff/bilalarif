import CommingSoon from "@/components/CommingSoon/CommingSoon";
import { Box, Typography } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      className={"full-screen flex-all-center"}
      sx={{ flexDirection: "column" }}
    >
      <Typography variant="h2">Blog</Typography>
      <CommingSoon />
    </Box>
  );
};

export default page;
