"use client";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";

// const Link = styled(Typography)({
//   textDecoration: "none",
// });

const Navigation = () => {
  return (
    <Box paddingX={40} paddingTop={3}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link style={{ textDecoration: "none", color: "#0000009a" }} href="/">
          Home
        </Link>
        <span style={{ color: "lightgray" }}>|</span>
        <Link
          style={{ textDecoration: "none", color: "#0000009a" }}
          href={"/certifications"}
        >
          Certifications
        </Link>
        <span style={{ color: "lightgray" }}>|</span>
        <Link
          style={{ textDecoration: "none", color: "#0000009a" }}
          href={"/portfolio"}
        >
          Portfolio
        </Link>
        <span style={{ color: "lightgray" }}>|</span>
        <Link
          style={{ textDecoration: "none", color: "#0000009a" }}
          href={"/blog"}
        >
          Blog
        </Link>
        <span style={{ color: "lightgray" }}>|</span>
        <Link
          style={{ textDecoration: "none", color: "#0000009a" }}
          href={"/adventurr"}
        >
          Adventurr.tech
        </Link>
      </Box>
    </Box>
  );
};

export default Navigation;
