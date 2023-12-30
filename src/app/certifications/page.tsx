"use client";
import Box from "@mui/material/Box";
import React from "react";
import { certifications } from "../store/certifications";
import CertificateCard from "@/components/CertificateCard/CertificateCard";
import { Typography } from "@mui/material";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

const page = () => {
  return (
    <Box className="flex-all-center" sx={{ flexDirection: "column" }}>
      <LoadingScreen />
      <Box>
        <Typography mt={5} mb={2} variant={"h3"} textAlign={"center"}>
          Certifications
        </Typography>
      </Box>
      <Box>
        {certifications?.map((certificate, index) => {
          return <CertificateCard key={index} certificate={certificate} />;
        })}
      </Box>
    </Box>
  );
};

export default page;
