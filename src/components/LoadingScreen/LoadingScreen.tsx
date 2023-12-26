"use client";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  return (
    <Box
      sx={{
        display: isLoading ? "block" : "none !important",
        position: "absolute",
        top: 1,
        left: 1,
        width: "98%",
        height: "98%",
        backgroundColor: "#FFFFFF",
        zIndex: 999999,
      }}
      className={"flex-all-center"}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingScreen;
