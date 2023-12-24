"use client";

import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

const DownloadResume = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    // Create a link element

    setIsLoading(true);

    try {
      const downloadLink = document.createElement("a");

      // Set the attributes for the link

      downloadLink.href = "/bilal_arif_software_engineer.pdf"; // Replace with the actual path to your PDF file
      downloadLink.download = "Bilal Arif - Software Engineer.pdf"; // Specify the desired file name

      // Append the link to the document
      document.body.appendChild(downloadLink);

      // Trigger a click on the link to start the download
      downloadLink.click();

      // Remove the link from the document after the download
      document.body.removeChild(downloadLink);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <Button
        variant="contained"
        size="small"
        disabled={isLoading}
        endIcon={isLoading && <CircularProgress size={18} />}
        onClick={handleDownload}
      >
        Resume
      </Button>
    </>
  );
};

export default DownloadResume;
